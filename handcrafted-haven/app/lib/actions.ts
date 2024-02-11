"use server";
import { z } from "zod";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth, signIn, signOut } from "@/auth";



export type State = {
  errors?: {
    rating?: string[];
    comment?: string[];
  }
  message?: string | null;
}

const ReviewFormSchema = z.object({
  productId: z.string(),
  comment: z.string({
      invalid_type_error: "Please type a comment."
  })
    ,
  rating: z.coerce
      .number()
      .gte(1, { message: "Please select a vaild rating"})
      .lte(5, {message: "Please select a valid rating"}),
});

const ReviewProduct = ReviewFormSchema.omit({ productId: true });
export async function reviewProduct(productId: string, prevState: State, formData: FormData) {
  // Ensure user is logged in
  const session = await auth();
  const userId = session?.user?.id
  if(!userId) {
    return redirect("/login")
  }

  // validate fields
  const validatedFields = ReviewProduct.safeParse({
    comment: formData.get("comment"),
    rating: formData.get("rating")
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing fields. Faild to add review"
    }
  }

   const {rating, comment} = validatedFields.data;
   try {
    await sql`
      INSERT INTO reviews (product_id, user_id, rating, comment)
      VALUES (${productId}, ${userId}, ${rating}, ${comment})
    `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to add review.',
    };
}
  revalidatePath(`/products/${productId}`);
  redirect(`/products/${productId}`);
}




export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
  ) {
    try {
      await signIn('credentials', Object.fromEntries(formData));
    } catch (error) {
      if ((error as Error).message.includes('CredentialsSignin')) {
        return 'CredentialSignin';
      }
      throw error;
    }
  }

  export async function logOut() {
    try {
      await signOut()
    } catch (error) {
      // console.log(error)
      throw error
    } 
  }


  export type SignUpState = {
    errors?: {
      name?: string[];
      email?: string[];
      password?: string[];
    }
    message?: string | null;
  };

  
  const SignUpSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6)
  });
  
  export async function signUp(prevState: SignUpState, formData: FormData) {
    // Validate fields
    const validatedFields = SignUpSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    });
  
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: "Validation failed. Please check your input.",
      };
    }
  
    const { name, email, password } = validatedFields.data;
  
    try {
      // Insert user into the database
      const result = await sql`
        INSERT INTO users (name, email, password)
        VALUES (${name}, ${email}, ${password})
        RETURNING id, name, email;`;
  
      const user = result.rows[0];
      console.log(user)
  
      // Authenticate the user after sign-up (optional)
      // const session = await auth("credentials", {
      //   email: user.email,
      //   password: formData.get("password"),
      // });
  
      return {
        message: "Sign-up successful!",
      };
    } catch (error) {
      console.error("Database Error:", error);
      return {
        message: "Database Error: Failed to sign up.",
      };
    }
  }
    
  
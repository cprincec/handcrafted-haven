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

    
  
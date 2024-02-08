import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchProducts() {
  noStore();

  try {
    const data = await sql`
      SELECT products.id, products.seller_id, products.name, products.description, products.price, products.image_url, sellers.name seller_name
      FROM products
      INNER JOIN sellers ON products.seller_id = sellers.id;
      `;

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the products.');
  }
}

export async function fetchProductById(id: string) {
  try {
    const data = await sql`SELECT products.id, products.seller_id, products.name, products.description, products.price, products.image_url, sellers.name seller_name
    FROM products
    INNER JOIN sellers ON products.seller_id = sellers.id
    WHERE products.id = ${id};
    `;

    return data.rows[0];
   } catch (error) {
      console.log("Database Error:", error);
      throw new Error("Failed to fetch product.");
   }
}

export async function fetchSellers() {
    try {
    const data = await sql`SELECT * FROM sellers`;

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the sellers.');
  }
}


export async function fetchReviewsByProductId(product_id: string) {
  console.log(product_id, "Id here")
  try {
    const data = await sql`SELECT reviews.*, users.name, users.name
    FROM reviews
    INNER JOIN users ON reviews.user_id = users.id
    WHERE reviews.product_id = ${product_id};
    `;

    return data.rows;
   } catch (error) {
      console.log("Database Error:", error);
      throw new Error("Failed to fetch reviews.");
   }
}


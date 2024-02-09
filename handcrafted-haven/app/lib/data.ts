import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
import { Product } from './definitions';

export async function fetchProducts(maxPrice: string = "5000") {
  noStore();

  try {
    // Using a template literal for the query and parameterized SQL to prevent SQL injection.
    // The sql tagged template from '@vercel/postgres' automatically parameterizes inputs.
    const query = sql<Product>`
      SELECT products.id, products.seller_id, products.name, products.description, products.price, products.image_url, sellers.name AS seller_name
      FROM products
      INNER JOIN sellers ON products.seller_id = sellers.id
      WHERE products.price <= ${maxPrice}
      ORDER BY products.price desc;
    `;

    const data = await query;
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


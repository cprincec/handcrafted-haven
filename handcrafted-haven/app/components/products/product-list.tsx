import React from 'react';
import ProductCard from './product-card';
import { fetchProducts } from '../../lib/data';
import { Product } from '@/app/lib/definitions';

async function ProductList({ maxPrice }: { maxPrice: string }) {
  console.log(maxPrice);
  const products = await fetchProducts(maxPrice);
  return (
    <div className="grid grid-cols-1 gap-16 p-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;

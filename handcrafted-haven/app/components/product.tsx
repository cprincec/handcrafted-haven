import Link from 'next/link';
import React from 'react';
interface ProductProps {
  product: {
    id: number;
    name: string;
    description: string;
    seller: string;
    price: number;
    imageUrl: string;
  };
}

const Product: React.FC<ProductProps> = ({ product }) => {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="m-4 max-w-sm rounded-lg border border-gray-300 bg-[#feffea] p-4 text-center shadow-lg">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="mx-auto mb-2 w-full max-w-xs rounded-full"
        />
        <h3 className="mb-2 text-lg font-semibold">{product.name}</h3>
        <p className="mb-4 text-sm text-gray-600">{product.description}</p>
        <p className="text-xl font-bold text-green-500">${product.price}</p>
        <p className="text-sm text-gray-500">Sold by: {product.seller}</p>
      </div>
    </Link>
  );
};

export default Product;

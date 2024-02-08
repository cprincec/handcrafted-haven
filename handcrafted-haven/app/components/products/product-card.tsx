import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
interface ProductProps {
  product: {
    id: string;
    name: string;
    description: string;
    seller_id: string;
    seller_name: string;
    price: string;
    image_url: string;
  };
}

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  return (
    <Link
      href={`/products/${product.id}`}
      className="rounded-lg border border-gray-300 bg-[#feffea] p-6 text-center shadow-lg transition hover:scale-110 md:h-full"
    >
      <Image
        src={product.image_url}
        alt={product.name}
        className="mx-auto w-full max-w-xs rounded-full"
        height={200}
        width={200}
      />
      <h3 className="mb-2 mt-6 text-lg font-semibold">{product.name}</h3>
      <p className="mb-2 text-xl font-bold text-green-500">${product.price}</p>
      <p className="text-sm text-gray-500">Sold by: {product.seller_name}</p>
    </Link>
  );
};

export default ProductCard;

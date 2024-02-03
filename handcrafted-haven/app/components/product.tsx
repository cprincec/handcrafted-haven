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
      // Adjusting to match the seller-card styling with Tailwind CSS
      <div className="bg-[#feffea] border border-gray-300 rounded-lg p-4 m-4 max-w-sm text-center shadow-lg">
        {/* Tailwind CSS for image styling to match the sellers' card style */}
        <img src={product.imageUrl} alt={product.name} className="w-full rounded-full mb-2 mx-auto max-w-xs" />
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-4">{product.description}</p>
        <p className="text-xl font-bold text-green-500">${product.price}</p>
        <p className="text-sm text-gray-500">Sold by: {product.seller}</p>
      </div>
    );
  };
  

export default Product;

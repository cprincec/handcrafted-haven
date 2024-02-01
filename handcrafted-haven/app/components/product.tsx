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
    <div className="product">
      <img src={product.imageUrl} alt={product.name} className="item-image" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-description">{product.description}</p>
      <p className="product-price">${product.price}</p>
      <p className="product-seller">Sold by: {product.seller}</p>
    </div>
  );
};

export default Product;

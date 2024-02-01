import React from 'react';
import Product from './product';

const ProductList = () => {
    
const products = [
    {
      id: 1,
      name: "Vintage Vase",
      description: "A beautifully crafted vintage vase.",
      seller: "AntiqueBoutique",
      price: 45.99,
      imageUrl: "https://example.com/images/item1.jpg"
    },
    {
      id: 2,
      name: "Canvas Painting",
      description: "An original canvas painting, abstract art.",
      seller: "ArtGallery",
      price: 150.00,
      imageUrl: "https://example.com/images/item2.jpg"
    },
    {
      id: 3,
      name: "Leather Wallet",
      description: "Handmade leather wallet with multiple compartments.",
      seller: "CraftsmanLeather",
      price: 35.50,
      imageUrl: "https://example.com/images/item3.jpg"
    },
    {
      id: 4,
      name: "Ceramic Bowl",
      description: "A ceramic bowl with unique patterns.",
      seller: "AntiqueBoutique",
      price: 20.00,
      imageUrl: "https://example.com/images/item4.jpg"
    },
    {
      id: 5,
      name: "Wooden Sculpture",
      description: "Intricate wooden sculpture from Bali.",
      seller: "ArtGallery",
      price: 80.00,
      imageUrl: "https://example.com/images/item5.jpg"
    },
    {
      id: 6,
      name: "Silk Scarf",
      description: "Elegant silk scarf with floral design.",
      seller: "CraftsmanLeather",
      price: 22.99,
      imageUrl: "https://example.com/images/item6.jpg"
    },
    {
      id: 7,
      name: "Antique Clock",
      description: "19th-century antique clock, still functioning.",
      seller: "AntiqueBoutique",
      price: 120.00,
      imageUrl: "https://example.com/images/item7.jpg"
    },
    {
      id: 8,
      name: "Oil Painting",
      description: "Oil painting of a landscape scene.",
      seller: "ArtGallery",
      price: 200.00,
      imageUrl: "https://example.com/images/item8.jpg"
    },
    {
      id: 9,
      name: "Leather Belt",
      description: "Premium quality leather belt, adjustable size.",
      seller: "CraftsmanLeather",
      price: 29.99,
      imageUrl: "https://example.com/images/item9.jpg"
    },
    {
      id: 10,
      name: "Porcelain Teapot",
      description: "Vintage porcelain teapot with floral design.",
      seller: "AntiqueBoutique",
      price: 55.00,
      imageUrl: "https://example.com/images/item10.jpg"
    },
    {
      id: 11,
      name: "Bronze Statue",
      description: "A small bronze statue, Greek mythology figure.",
      seller: "ArtGallery",
      price: 90.00,
      imageUrl: "https://example.com/images/item11.jpg"
    },
    {
      id: 12,
      name: "Leather Notebook",
      description: "Handcrafted leather notebook with blank pages.",
      seller: "CraftsmanLeather",
      price: 18.99,
      imageUrl: "https://example.com/images/item12.jpg"
    }
  ];
  
  return (
    <div className="item-list">
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;

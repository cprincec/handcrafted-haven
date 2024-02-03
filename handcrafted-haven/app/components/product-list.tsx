import React from 'react';
import Product from './product';

const ProductList = () => {
    
  const products = [
    {
      id: 1,
      name: "Handcrafted Wooden Vase",
      description: "A beautifully handcrafted wooden vase by Carlose Woodward.",
      seller: "Carlose Woodward",
      price: 45.99,
      imageUrl: "https://example.com/images/woodenVase.jpg"
    },
    {
      id: 2,
      name: "Rustic Wooden Bowl",
      description: "Rustic wooden bowl perfect for any home, crafted by Carlose Woodward.",
      seller: "Carlose Woodward",
      price: 30.00,
      imageUrl: "https://example.com/images/woodenBowl.jpg"
    },
    {
      id: 3,
      name: "Wooden Sculpture",
      description: "Intricate wooden sculpture from Carlose Woodward.",
      seller: "Carlose Woodward",
      price: 60.00,
      imageUrl: "https://example.com/images/woodenSculpture.jpg"
    },
    {
      id: 4,
      name: "Ceramic Vase",
      description: "A unique ceramic vase, handcrafted by Larry Clayton.",
      seller: "Larry Clayton",
      price: 40.00,
      imageUrl: "https://example.com/images/ceramicVase.jpg"
    },
    {
      id: 5,
      name: "Ceramic Plate Set",
      description: "Handmade ceramic plate set with unique glazes by Larry Clayton.",
      seller: "Larry Clayton",
      price: 75.00,
      imageUrl: "https://example.com/images/ceramicPlates.jpg"
    },
    {
      id: 6,
      name: "Decorative Pottery Mug",
      description: "Handcrafted pottery mug by Larry Clayton, perfect for your morning coffee.",
      seller: "Larry Clayton",
      price: 25.00,
      imageUrl: "https://example.com/images/potteryMug.jpg"
    },
    {
      id: 7,
      name: "Textile Wall Art",
      description: "Contemporary textile wall art by Darla Thread, a unique fabric masterpiece.",
      seller: "Darla Thread",
      price: 85.00,
      imageUrl: "https://example.com/images/textileWallArt.jpg"
    },
    {
      id: 8,
      name: "Handwoven Scarf",
      description: "Luxurious handwoven scarf by Darla Thread, combining comfort with art.",
      seller: "Darla Thread",
      price: 50.00,
      imageUrl: "https://example.com/images/handwovenScarf.jpg"
    },
    {
      id: 9,
      name: "Fabric Tote Bag",
      description: "Stylish and durable handcrafted tote bag by Darla Thread.",
      seller: "Darla Thread",
      price: 35.00,
      imageUrl: "https://example.com/images/fabricTote.jpg"
    },
    {
      id: 10,
      name: "Abstract Canvas Painting",
      description: "An original abstract canvas painting by Allison Artison.",
      seller: "Allison Artison",
      price: 150.00,
      imageUrl: "https://example.com/images/abstractPainting.jpg"
    },
    {
      id: 11,
      name: "Landscape Oil Painting",
      description: "Beautiful landscape oil painting by Allison Artison, capturing the essence of nature.",
      seller: "Allison Artison",
      price: 200.00,
      imageUrl: "https://example.com/images/landscapePainting.jpg"
    },
    {
      id: 12,
      name: "Modern Art Piece",
      description: "A striking modern art piece by Allison Artison, vibrant and captivating.",
      seller: "Allison Artison",
      price: 175.00,
      imageUrl: "https://example.com/images/modernArt.jpg"
    },
    {
      id: 13,
      name: "Metal Wall Decor",
      description: "Elegant metal wall decor by Sarah Brass, perfect for adding a touch of sophistication.",
      seller: "Sarah Brass",
      price: 95.00,
      imageUrl: "https://example.com/images/metalWallDecor.jpg"
    },
    {
      id: 14,
      name: "Handforged Metal Vase",
      description: "A handforged metal vase by Sarah Brass, combining durability with style.",
      seller: "Sarah Brass",
      price: 70.00,
      imageUrl: "https://example.com/images/metalVase.jpg"
    },
    {
      id: 15,
      name: "Artistic Metal Bowl",
      description: "A beautifully designed metal bowl by Sarah Brass, a true work of art.",
      seller: "Sarah Brass",
      price: 55.00,
      imageUrl: "https://example.com/images/metalBowl.jpg"
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

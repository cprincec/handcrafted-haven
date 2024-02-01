import React from 'react';
import './SellerPage.css';
import carolsThumbnail1 from '../images/wood.webp';
import darlaThumbnail2 from '../images/crochet.webp';
import larryThumbnail3 from '../images/clay.webp';
import allisonThumbnail4 from '../images/paint.webp';
import sarahThumbnail5 from '../images/metal.webp';


const sellersData = [
  {
    "sellersId": 1,
    "name": "Carlose Woodward",
    "productsId": "(unknown)",
    "sellerThumbnail": carolsThumbnail1,
    "sellerImage": "https://drive.google.com/file/d/1oGjWqlFTelUV_ea77cG7zodP-WOdQ30r/view?usp=drive_link",
    "sellerBio": "Hey there, I'm Carlose, a dedicated woodworker showcasing my craft at Handcrafted Haven. Crafting bespoke furniture and decor, each piece I create exudes timeless sophistication, leaving a lasting impression in the world of handcrafted woodwork."
  },
  {
    "sellersId": 2,
    "name": "Darla Thread",
    "productsId": "(unknown)",
    "sellerThumbnail": darlaThumbnail2,
    "sellerImage": "https://drive.google.com/file/d/1-0HRNXLGv_IzQSFABNabmI617UeiMXzT/view?usp=drive_link",
    "sellerBio": "Greetings, I'm Darla, the artisan behind Textile Enchantment, now available at Handcrafted Haven. Elevating fabric to an art form, my handmade textiles blend tradition with contemporary design. Each creation tells stories through patterns and colors, embodying the seamless fusion of craftsmanship and artistic expression."
  },
  {
    "sellersId": 3,
    "name": "Larry Clayton",
    "productsId": "(unknown)",
    "sellerThumbnail": larryThumbnail3,
    "sellerImage": "https://drive.google.com/file/d/1TLCLNlaC-SpYUNFoeYzzXitsF2aL3uXh/view?usp=sharing",
    "sellerBio": "Hello, I'm Larry, a potter with a passion for handcrafted ceramics at Handcrafted Haven. Sculpting clay into functional and decorative pieces, my creations are a harmonious blend of form and function, showcasing the timeless beauty of handcrafted pottery."
  },
  {
    "sellersId": 4,
    "name": "Allison Artison",
    "productsId": "(unknown)",
    "sellerThumbnail": allisonThumbnail4,
    "sellerImage": "https://drive.google.com/file/d/1KQfKzRtL4fMXhCh0elgc6pnwW8NiYG3o/view?usp=sharing",
    "sellerBio": "Hi there, I'm Allison, a visionary painter now featuring my artworks at Handcrafted Haven. Transforming blank canvases into visual symphonies, my pieces are a burst of expression and color, creating a unique journey for art enthusiasts."
  },
  {
    "sellersId": 5,
    "name": "Sarah Brass",
    "productsId": "(unknown)",
    "sellerThumbnail": sarahThumbnail5,
    "sellerImage": "https://drive.google.com/file/d/16aSZlrcRjcn5Nlo0pOetFvig6XU0RNXF/view?usp=drive_link",
    "sellerBio": "Greetings, I'm Sarah, a skilled metalworker presenting my creations at Handcrafted Haven. Shaping metal into captivating works of art, my unique approach to metalcraft infuses each piece with character, offering timeless and captivating metal artworks for those who appreciate craftsmanship."
  },
  // Add more sellers data if needed
];

const SellersPage = () => {
    return (
      <div>
        <h1>Handcrafted Haven Sellers</h1>
        <div className="sellers-container">
          {sellersData.map((seller) => (
            <div key={seller.sellersId} className="seller-card">
              {/* Display the image */}
              <img src={seller.sellerThumbnail} alt={seller.name} />
  
              <h2>{seller.name}</h2>
              <p>{seller.sellerBio}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default SellersPage;
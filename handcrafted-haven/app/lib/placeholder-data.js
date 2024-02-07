const sellers = [
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Carlose Woodward',
    sellerThumbnail:
      'https://lh3.googleusercontent.com/drive-viewer/AEYmBYRbc8EhK_00t5oSG9K9uXbpYGobVaA4xqrwa9PCZu8wMpgL_1xs7mtgTxNmtwcJDzyJeFeuMO2cnA_igiA8S8ZKssWT=s2560',
    sellerImage:
      'https://lh3.googleusercontent.com/drive-viewer/AEYmBYQHKSVpvLh8j1Jwp9EgDffffayDqjiOm308VN37-Qx__dk1p_rLZv9kpLyx5XB98RkeOlapu1WNNi3FcLyY8D3ZBHmGCg=s2560',
    sellerBio:
      "Hey there, I'm Carlose, a dedicated woodworker showcasing my craft at Handcrafted Haven. Crafting bespoke furniture and decor, each piece I create exudes timeless sophistication, leaving a lasting impression in the world of handcrafted woodwork.",
  },
  {
    id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
    name: 'Darla Thread',
    sellerThumbnail:
      'https://lh3.googleusercontent.com/drive-viewer/AEYmBYShv-S712Zu39Kh6XprX8ZXfAiDZnGmqMkuQQdOFqHPj8SvbYmPecaYuR_vLqkpXMsdwBPNMTQuNPxH3YcOz2blM13Z=s2560',
    sellerImage:
      'https://lh3.googleusercontent.com/drive-viewer/AEYmBYSQyV6umQ03jwilVYYZAqbar8ZENU7EGz8gg5DyolhJPPoNALvsRCitAncFvqH-xAwj8mjYKxZNODnde_JyMjSLJdhaeQ=s2560',
    sellerBio:
      "Greetings, I'm Darla, the artisan behind Textile Enchantment, now available at Handcrafted Haven. Elevating fabric to an art form, my handmade textiles blend tradition with contemporary design. Each creation tells stories through patterns and colors, embodying the seamless fusion of craftsmanship and artistic expression.",
  },
  {
    id: '50ca3e20-62cd-11ee-8c99-0242ac120002',
    name: 'Larry Clayton',
    sellerThumbnail:
      'https://lh3.googleusercontent.com/drive-viewer/AEYmBYQthKLfexz-m-uzOvFAfoSMsCiI0gMZwBUNdReNkg98v1kqgAzejZCWpXJ1ytdK-aRmFDYB_eE0MOJK0eRti4JXKn9i=s2560',
    sellerImage:
      'https://lh3.googleusercontent.com/drive-viewer/AEYmBYQoyCrphtDhwR6_rn_jpQlWLsH7qxtb2giylWQx3ojILAvOZUaLWMyhs42YrwrrY5hFwdPRSu58mTLmSrd5fiSDhir5mw=s2560',
    sellerBio:
      "Hello, I'm Larry, a potter with a passion for handcrafted ceramics at Handcrafted Haven. Sculpting clay into functional and decorative pieces, my creations are a harmonious blend of form and function, showcasing the timeless beauty of handcrafted pottery.",
  },
  {
    id: '50ca3e19-62cd-11ee-8c99-0242ac120002',
    name: 'Allison Artison',
    sellerThumbnail:
      'https://lh3.googleusercontent.com/drive-viewer/AEYmBYQpeOl1Bwai4KfdH0cDu1H23dVEu86Ez46NlmWZFihMTP3v2731q0_FQ4WsPpi1GmsAwG2TNEWLiLHQG42DSAOw9vF2Mg=s2560',
    sellerImage:
      'https://lh3.googleusercontent.com/drive-viewer/AEYmBYR5ksFvZJAZTKhhF73AA0os7dB4YxRUeB9oU6HV_aDAJHu0MBHynTQlGCYZnwTWh1uymHukqFy8pJt6Q_YuRFxUcZNyhQ=s2560',
    sellerBio:
      "Hi there, I'm Allison, a visionary painter now featuring my artworks at Handcrafted Haven. Transforming blank canvases into visual symphonies, my pieces are a burst of expression and color, creating a unique journey for art enthusiasts.",
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Sarah Brass',
    sellerThumbnail:
      'https://lh3.googleusercontent.com/drive-viewer/AEYmBYQIpnUMLKHKG40r0zO4WwrZzeNYP89lGJf89nKU8tbjs1IWf3Ao7xeDJiunoY6Wut_79wPDJd4X3giO5oNn_v-awS-2=s2560',
    sellerImage:
      'https://lh3.googleusercontent.com/drive-viewer/AEYmBYTeAO5c3W8y1sYfGaabg8O_xTaSYiURNG7S69Iy2T1PAy5I-4iuoJUDHiqrGWEsCYPpjp6KPJOyZK0hUJrXfnGwNDGn=s2560',
    sellerBio:
      "Greetings, I'm Sarah, a skilled metalworker presenting my creations at Handcrafted Haven. Shaping metal into captivating works of art, my unique approach to metalcraft infuses each piece with character, offering timeless and captivating metal artworks for those who appreciate craftsmanship.",
  },
];

const products = [
  {
    sellerId: sellers[0].id,
    name: 'Handcrafted Wooden Vase',
    description: 'A beautifully handcrafted wooden vase.',
    price: 45.99,
    imageUrl:
      'https://dl.dropboxusercontent.com/scl/fi/5s6gvlr7npo5pmwhvfqnl/wooden-vase.webp?rlkey=sdnp04o8wndo61yrk0maxw9zk&dl=0',
  },
  {
    sellerId: sellers[1].id,
    name: 'Rustic Wooden Bowl',
    description: 'Rustic, warm wooden bowl perfect for any home.',
    price: 30.0,
    imageUrl:
      'https://dl.dropboxusercontent.com/scl/fi/5of7fs1w9d6oqvl3z0i96/rustic-wooden-bowl.webp?rlkey=ok3cs8styqaugculvob8mywfm&dl=0',
  },
  {
    sellerId: sellers[2].id,
    name: 'Wooden Sculpture',
    description:
      'Intricate wooden sculpture sure to warm your living space with its inspiring design.',
    price: 60.0,
    imageUrl:
      'https://dl.dropboxusercontent.com/scl/fi/wxbiingc3020xlvfb4afj/wooden-sculpture.webp?rlkey=fbwgipgi0lz6d6oonlyzoae3c&dl=0',
  },
  {
    sellerId: sellers[3].id,
    name: 'Ceramic Vase',
    description: 'A unique ceramic vase.',
    price: 40.0,
    imageUrl:
      'https://dl.dropboxusercontent.com/scl/fi/vdsmqsohbb0kqmvfroiof/ceramic-vase.webp?rlkey=bh8kmlpktq3ae85sdpyyzdv1k&dl=0',
  },
  {
    sellerId: sellers[4].id,
    name: 'Ceramic Plate Set',
    description:
      'Handmade, unique ceramic plate set to inspire your space each day.',
    price: 75.0,
    imageUrl:
      'https://dl.dropboxusercontent.com/scl/fi/76o2ijzkl3fu0tsomb8q1/ceramic-plates.webp?rlkey=653d4vwgf5b2wn0lueom1lv74&dl=0',
  },
  {
    sellerId: sellers[2].id,
    name: 'Decorative Pottery Mug',
    description: 'Handcrafted pottery mug.',
    price: 25.0,
    imageUrl:
      'https://dl.dropboxusercontent.com/scl/fi/3vmh07nasz3h153dfb5ry/ceramic-mug.webp?rlkey=5aucgdna8tikm7pl5brfkeioy&dl=0',
  },
  {
    sellerId: sellers[0].id,
    name: 'Textile Wall Art',
    description: 'Contemporary textile wall art. A unique fabric masterpiece.',
    price: 85.0,
    imageUrl:
      'https://dl.dropboxusercontent.com/scl/fi/zkqpubtaf3jbzba3q5gu7/textile-wall-art.webp?rlkey=d79shcmcxf499xvcmf82vykvv&dl=0',
  },
  {
    sellerId: sellers[1].id,
    name: 'Handwoven Scarf',
    description: 'Luxurious handwoven scarf combining comfort with art.',
    price: 50.0,
    imageUrl:
      'https://dl.dropboxusercontent.com/scl/fi/o4b93odhd8166ftvjodx0/scarf.webp?rlkey=en3lbe9u1gaem0fa97hnnwtgu&dl=0',
  },
  {
    sellerId: sellers[3].id,
    name: 'Fabric Tote Bag',
    description: 'Stylish and durable handcrafted tote bag.',
    price: 35.0,
    imageUrl:
      'https://dl.dropboxusercontent.com/scl/fi/01o790zwm6lrccrubu0gk/tote-bag.webp?rlkey=0yt4je8psaj86km1s9x42wczb&dl=0',
  },
  {
    sellerId: sellers[1].id,
    name: 'Abstract Canvas Painting',
    description: 'An original abstract canvas painting by Allison Artison.',
    seller: 'Allison Artison',
    price: 150.0,
    imageUrl:
      'https://dl.dropboxusercontent.com/scl/fi/oygzza42qctano90t13du/abstract-painting.webp?rlkey=dmyq2699j8x6k4utm0ph1ekat&dl=0',
  },
  {
    sellerId: sellers[0].id,
    name: 'Landscape Oil Painting',
    description:
      'Beautiful landscape oil painting, capturing the essence of nature.',
    price: 200.0,
    imageUrl:
      'https://dl.dropboxusercontent.com/scl/fi/8u3sr4fk6kglcs1fi6bwd/landscape-painting.webp?rlkey=a15zg2e5atc4gmjqayeqpcfet&dl=0',
  },
  {
    sellerId: sellers[4].id,
    name: 'Modern Art Piece',
    description: 'A striking modern art piece, vibrant and captivating.',
    price: 175.0,
    imageUrl:
      'https://dl.dropboxusercontent.com/scl/fi/uuic1sq6l9z8b0gxozk5c/modern-painting.webp?rlkey=yvm1cxb1lceosg9w79g44bm1t&dl=0',
  },
  {
    sellerId: sellers[3].id,
    name: 'Metal Wall Decor',
    description:
      'Elegant metal wall decor, perfect for adding a touch of sophistication.',
    price: 95.0,
    imageUrl:
      'https://dl.dropboxusercontent.com/scl/fi/f3pd9t9e6oiw16x7kxp7b/metal-wall-art.webp?rlkey=2j5bchtnrr1eypma32s6we133&dl=0',
  },
  {
    sellerId: sellers[2].id,
    name: 'Handforged Metal Vase',
    description: 'A handforged metal vase combining durability with style.',
    price: 70.0,
    imageUrl:
      'https://dl.dropboxusercontent.com/scl/fi/vkueiqce01g82b7ae0roh/metal-vase.webp?rlkey=pehorvz4pu50ip6e6w3ph58dw&dl=0',
  },
  {
    sellerId: sellers[2].id,
    name: 'Artistic Metal Bowl',
    description: 'A beautifully designed metal bowl, a true work of art.',
    price: 55.0,
    imageUrl:
      'https://dl.dropboxusercontent.com/scl/fi/3blxsdmrykf6zemnxmv8n/metal-bowl.webp?rlkey=mdo2n3a9dh0uoj82gibnvdgns&dl=0',
  },
];

const reviews = [];

module.exports = {
  products,
  sellers,
};

// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
// const users = [
//   {
//     id: '410544b2-4001-4271-9855-fec4b6a6442a',
//     name: 'User',
//     email: 'user@nextmail.com',
//     password: '123456',
//   },
// ];

// const users = [
//   {
//     id: '1',
//     name: 'User',
//     email: 'user@nextmail.com',
//     password: '123456',
//   },
// ];

// const customers = [
//   {
//     id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
//     name: 'Delba de Oliveira',
//     email: 'delba@oliveira.com',
//     image_url: '/customers/delba-de-oliveira.png',
//   },
//   {
//     id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
//     name: 'Lee Robinson',
//     email: 'lee@robinson.com',
//     image_url: '/customers/lee-robinson.png',
//   },
//   {
//     id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
//     name: 'Hector Simpson',
//     email: 'hector@simpson.com',
//     image_url: '/customers/hector-simpson.png',
//   },
//   {
//     id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
//     name: 'Steven Tey',
//     email: 'steven@tey.com',
//     image_url: '/customers/steven-tey.png',
//   },
//   {
//     id: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
//     name: 'Steph Dietz',
//     email: 'steph@dietz.com',
//     image_url: '/customers/steph-dietz.png',
//   },
//   {
//     id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
//     name: 'Michael Novotny',
//     email: 'michael@novotny.com',
//     image_url: '/customers/michael-novotny.png',
//   },
//   {
//     id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
//     name: 'Evil Rabbit',
//     email: 'evil@rabbit.com',
//     image_url: '/customers/evil-rabbit.png',
//   },
//   {
//     id: '126eed9c-c90c-4ef6-a4a8-fcf7408d3c66',
//     name: 'Emil Kowalski',
//     email: 'emil@kowalski.com',
//     image_url: '/customers/emil-kowalski.png',
//   },
//   {
//     id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
//     name: 'Amy Burns',
//     email: 'amy@burns.com',
//     image_url: '/customers/amy-burns.png',
//   },
//   {
//     id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
//     name: 'Balazs Orban',
//     email: 'balazs@orban.com',
//     image_url: '/customers/balazs-orban.png',
//   },
// ];

// const invoices = [
//   {
//     customer_id: customers[0].id,
//     amount: 15795,
//     status: 'pending',
//     date: '2022-12-06',
//   },
//   {
//     customer_id: customers[1].id,
//     amount: 20348,
//     status: 'pending',
//     date: '2022-11-14',
//   },
//   {
//     customer_id: customers[4].id,
//     amount: 3040,
//     status: 'paid',
//     date: '2022-10-29',
//   },
//   {
//     customer_id: customers[3].id,
//     amount: 44800,
//     status: 'paid',
//     date: '2023-09-10',
//   },
//   {
//     customer_id: customers[5].id,
//     amount: 34577,
//     status: 'pending',
//     date: '2023-08-05',
//   },
//   {
//     customer_id: customers[7].id,
//     amount: 54246,
//     status: 'pending',
//     date: '2023-07-16',
//   },
//   {
//     customer_id: customers[6].id,
//     amount: 666,
//     status: 'pending',
//     date: '2023-06-27',
//   },
//   {
//     customer_id: customers[3].id,
//     amount: 32545,
//     status: 'paid',
//     date: '2023-06-09',
//   },
//   {
//     customer_id: customers[4].id,
//     amount: 1250,
//     status: 'paid',
//     date: '2023-06-17',
//   },
//   {
//     customer_id: customers[5].id,
//     amount: 8546,
//     status: 'paid',
//     date: '2023-06-07',
//   },
//   {
//     customer_id: customers[1].id,
//     amount: 500,
//     status: 'paid',
//     date: '2023-08-19',
//   },
//   {
//     customer_id: customers[5].id,
//     amount: 8945,
//     status: 'paid',
//     date: '2023-06-03',
//   },
//   {
//     customer_id: customers[2].id,
//     amount: 8945,
//     status: 'paid',
//     date: '2023-06-18',
//   },
//   {
//     customer_id: customers[0].id,
//     amount: 8945,
//     status: 'paid',
//     date: '2023-10-04',
//   },
//   {
//     customer_id: customers[2].id,
//     amount: 1000,
//     status: 'paid',
//     date: '2022-06-05',
//   },
// ];

// const revenue = [
//   { month: 'Jan', revenue: 2000 },
//   { month: 'Feb', revenue: 1800 },
//   { month: 'Mar', revenue: 2200 },
//   { month: 'Apr', revenue: 2500 },
//   { month: 'May', revenue: 2300 },
//   { month: 'Jun', revenue: 3200 },
//   { month: 'Jul', revenue: 3500 },
//   { month: 'Aug', revenue: 3700 },
//   { month: 'Sep', revenue: 2500 },
//   { month: 'Oct', revenue: 2800 },
//   { month: 'Nov', revenue: 3000 },
//   { month: 'Dec', revenue: 4800 },
// ];

// module.exports = {
//   users,
//   customers,
//   invoices,
//   revenue,
// };

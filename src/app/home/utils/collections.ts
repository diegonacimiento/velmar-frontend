import { IProduct } from "@/types/products";

export const productsWomen = [
  {
    id: 3,
    name: "Women's Dress",
    description:
      "Elegant midi dress with spaghetti straps and a sweetheart neckline. Features a fitted bodice and a flowy skirt with side slits, offering both style and comfort. Ideal for formal events or a sophisticated evening out.",
    price: "15.00",
    images: [
      {
        color: "black",
        urls: ["https://iili.io/J8zaEB4.webp", "https://iili.io/J8zalhG.webp"],
        sizes: ["XS", "S", "M", "L"],
      },
      {
        color: "green",
        urls: ["https://iili.io/J8zaM42.webp", "https://iili.io/J8zaGEl.webp"],
        sizes: ["XS", "S", "M"],
      },
      {
        color: "red",
        urls: ["https://iili.io/J8zaXY7.webp", "https://iili.io/J8zaW2S.webp"],
        sizes: ["XS", "M", "L", "XL"],
      },
    ],
    isProtected: true,
    brand: {
      id: 5,
      name: "Carol Danvers",
      isProtected: true,
    },
    categories: [
      {
        id: 5,
        name: "Women",
        image: "https://iili.io/J8zaEB4.webp",
        isProtected: true,
      },
    ],
  },
  {
    id: 2,
    name: "Women's Blazer",
    description:
      "Blazer with a notched lapel and buttoned cuffs. Features a single-button design, two front pockets, and a comfortable fit. Perfect for adding an elegant touch to both professional and casual outfits.",
    price: "12.00",
    images: [
      {
        color: "blue",
        urls: ["https://iili.io/J8za0Qf.webp"],
        sizes: ["XS", "S", "M", "L", "XL"],
      },
      {
        color: "violet",
        urls: ["https://iili.io/J8zacIs.webp"],
        sizes: ["XS", "S", "M", "2XL"],
      },
    ],
    isProtected: true,
    brand: {
      id: 6,
      name: "Kara Zor-El ",
      isProtected: true,
    },
    categories: [
      {
        id: 5,
        name: "Women",
        image: "https://iili.io/J8zaEB4.webp",
        isProtected: true,
      },
    ],
  },
  {
    id: 6,
    name: "Women's Hoodie",
    description:
      "Relaxed and feminine cut sweatshirt, designed for comfort and style. It has a large hood adjustable with drawstrings, perfect for protecting yourself from the cold and adding a casual touch. The front kangaroo pocket is ideal for storing your hands or carrying small items. Its soft and pleasant to the touch fabric makes it a perfect garment for everyday wear. The absence of prints or additional details gives it a minimalist and versatile look, allowing it to be easily combined with different styles.",
    price: "12.00",
    images: [
      {
        color: "pink",
        urls: ["https://iili.io/J8zaLZJ.webp"],
        sizes: ["XS", "S", "M", "L", "XL", "2XL"],
      },
      {
        color: "green",
        urls: ["https://iili.io/J8zasja.webp"],
        sizes: ["XS", "S", "M", "L", "XL"],
      },
      {
        color: "orange",
        urls: ["https://iili.io/J8zaZCv.webp"],
        sizes: ["XS", "M", "2XL", "3XL"],
      },
    ],
    isProtected: true,
    brand: {
      id: 1,
      name: "Ice",
      isProtected: true,
    },
    categories: [
      {
        id: 5,
        name: "Women",
        image: "https://iili.io/J8zaEB4.webp",
        isProtected: true,
      },
    ],
  },
  {
    id: 9,
    name: "Women's Wide-Leg Jeans",
    description:
      "These high-waisted wide-leg jeans offer a chic and contemporary silhouette. Crafted from durable denim, they provide both comfort and style, featuring a relaxed fit through the legs and a flattering high-rise waist. Perfect for creating a bold fashion statement while maintaining casual elegance.",
    price: "17.00",
    images: [
      {
        color: "black",
        urls: ["https://iili.io/J8zam3N.webp"],
        sizes: ["XS", "S", "M", "L", "XL"],
      },
      {
        color: "blue",
        urls: ["https://iili.io/J8zc2ZG.webp"],
        sizes: ["S", "XL", "3XL"],
      },
    ],
    isProtected: true,
    brand: {
      id: 6,
      name: "Kara Zor-El ",
      isProtected: true,
    },
    categories: [
      {
        id: 5,
        name: "Women",
        image: "https://iili.io/J8zaEB4.webp",
        isProtected: true,
      },
    ],
  },
  {
    id: 10,
    name: "Women's Semi-Slim-Fit Jeans",
    description:
      "These semi-slim-fit jeans provide a sleek and modern look, featuring a slightly tapered leg for a flattering silhouette. Made from high-quality denim with a hint of stretch, they offer both comfort and a perfect fit. Ideal for everyday wear, these jeans effortlessly combine style and versatility.",
    price: "16.00",
    images: [
      {
        color: "cyan",
        urls: ["https://iili.io/J8zcFnf.webp"],
        sizes: ["S", "M", "L"],
      },
      {
        color: "blue",
        urls: ["https://iili.io/J8zcf6l.webp"],
        sizes: ["XS", "S", "L", "2XL"],
      },
    ],
    isProtected: true,
    brand: {
      id: 5,
      name: "Carol Danvers",
      isProtected: true,
    },
    categories: [
      {
        id: 5,
        name: "Women",
        image: "https://iili.io/J8zaEB4.webp",
        isProtected: true,
      },
    ],
  },
  {
    id: 14,
    name: "Oversized Jeans for Women",
    description:
      "These oversized jeans offer a relaxed and contemporary look, perfect for casual outings. They offer a soft and stylish appearance. The jeans are designed with a high waist and wide leg cut, providing comfort and ease of movement. Classic pockets add functionality and frayed hems provide a modern finish.",
    price: "22.00",
    images: [
      {
        color: "cyan",
        urls: ["https://iili.io/J8zcIwu.webp", "https://iili.io/J8zczue.webp"],
        sizes: ["XS", "S", "M", "L", "XL"],
      },
      {
        color: "white",
        urls: ["https://iili.io/J8zcacB.webp", "https://iili.io/J8zcYFV.webp"],
        sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
      },
      {
        color: "pink",
        urls: ["https://iili.io/J8zcRMx.webp", "https://iili.io/J8zcTZb.webp"],
        sizes: ["S", "L", "XL", "3XL"],
      },
    ],
    isProtected: true,
    brand: {
      id: 5,
      name: "Carol Danvers",
      isProtected: true,
    },
    categories: [
      {
        id: 5,
        name: "Women",
        image: "https://iili.io/J8zaEB4.webp",
        isProtected: true,
      },
    ],
  },
  {
    id: 31,
    name: "Women's Adjustable Neckline Sweater",
    description:
      "Elevate your casual wardrobe with our Women's Adjustable Neckline Sweater, a perfect blend of comfort and style. Designed with a chic and versatile neckline, this sweater offers a customizable look that adapts to your style and comfort preferences.",
    price: "34.00",
    images: [
      {
        color: "cyan",
        urls: ["https://iili.io/J8zlWbe.webp"],
        sizes: ["S", "M", "L", "XL", "2XL"],
      },
      {
        color: "gray",
        urls: ["https://iili.io/J8zljWb.webp"],
        sizes: ["XS", "S", "M", "L", "XL"],
      },
      {
        color: "magenta",
        urls: ["https://iili.io/J8zlhzu.webp"],
        sizes: ["S", "M", "L", "2XL", "3XL"],
      },
    ],
    isProtected: true,
    brand: {
      id: 3,
      name: "Summers",
      isProtected: true,
    },
    categories: [
      {
        id: 5,
        name: "Women",
        image: "https://iili.io/J8zaEB4.webp",
        isProtected: true,
      },
    ],
  },
  {
    id: 34,
    name: "Oversized Plain Cotton T-Shirt",
    description:
      "Discover the perfect blend of comfort and style with our Oversized Plain Cotton T-Shirt. Designed for a relaxed, laid-back look, this t-shirt offers a contemporary take on casual wear with its roomy fit and soft fabric.",
    price: "18.00",
    images: [
      {
        color: "black",
        urls: ["https://iili.io/J8zlQgp.webp", "https://iili.io/J8zlL1R.webp"],
        sizes: ["M", "L", "XL", "2XL", "3XL"],
      },
      {
        color: "brown",
        urls: ["https://iili.io/J8zlS5P.webp", "https://iili.io/J8zl8dB.webp"],
        sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
      },
      {
        color: "blue",
        urls: ["https://iili.io/J8zlD7I.webp", "https://iili.io/J8zltdN.webp"],
        sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
      },
    ],
    isProtected: true,
    brand: {
      id: 6,
      name: "Kara Zor-El ",
      isProtected: true,
    },
    categories: [
      {
        id: 5,
        name: "Women",
        image: "https://iili.io/J8zaEB4.webp",
        isProtected: true,
      },
    ],
  },
] as IProduct[];

export const productsMen = [
  {
    id: 8,
    name: "Men's Jeans",
    description:
      "Modern slim fit jeans with a classic design. Made from a comfortable stretch fabric that moves with you, these jeans are perfect for a contemporary and stylish look. Ideal for both casual and semi-formal outfits.",
    price: "15.00",
    images: [
      {
        color: "gray",
        urls: ["https://iili.io/J8zapaI.webp"],
        sizes: ["XS", "S", "M", "L"],
      },
    ],
    isProtected: true,
    brand: {
      id: 4,
      name: "Daredevil",
      isProtected: true,
    },
    categories: [
      {
        id: 4,
        name: "Men",
        image: "https://iili.io/J8zaD4p.webp",
        isProtected: true,
      },
    ],
  },
  {
    id: 35,
    name: "Men's Print Cotton T-Shirt",
    description:
      "Add a touch of personality to your wardrobe with our Men's Cotton T-Shirt featuring a distinctive print at heart height. Designed for both comfort and style, this tee is perfect for making a subtle yet impactful statement.",
    price: "20.00",
    images: [
      {
        color: "white",
        urls: ["https://iili.io/J8zlmmX.webp"],
        sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
      },
      {
        color: "lime",
        urls: ["https://iili.io/J8zlbet.webp"],
        sizes: ["S", "M", "L", "XL", "3XL"],
      },
    ],
    isProtected: true,
    brand: {
      id: 3,
      name: "Summers",
      isProtected: true,
    },
    categories: [
      {
        id: 4,
        name: "Men",
        image: "https://iili.io/J8zaD4p.webp",
        isProtected: true,
      },
    ],
  },
  {
    id: 5,
    name: "Men's Hoodie",
    description:
      "Oversized hoodie with long sleeves and a roomy body. It features a large kangaroo pocket in the front, perfect for keeping your hands warm or storing small items. The hood is adjustable with drawstrings, allowing you to customize the fit. Its design is minimalist and lacks any additional embellishments, giving it a simple and versatile look.",
    price: "13.00",
    images: [
      {
        color: "white",
        urls: ["https://iili.io/J8zaiTg.webp", "https://iili.io/J8za6yF.webp"],
        sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
      },
      {
        color: "lime",
        urls: ["https://iili.io/J8zavCx.webp", "https://iili.io/J8zaeQj.webp"],
        sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
      },
      {
        color: "pink",
        urls: ["https://iili.io/J8zaS4V.webp", "https://iili.io/J8za8EQ.webp"],
        sizes: ["XS", "S", "M", "2XL", "3XL"],
      },
      {
        color: "cyan",
        urls: ["https://iili.io/J8za4v1.webp", "https://iili.io/J8zarYP.webp"],
        sizes: ["XS", "M", "L", "3XL"],
      },
    ],
    isProtected: true,
    brand: {
      id: 1,
      name: "Ice",
      isProtected: true,
    },
    categories: [
      {
        id: 4,
        name: "Men",
        image: "https://iili.io/J8zaD4p.webp",
        isProtected: true,
      },
    ],
  },
  {
    id: 7,
    name: "Men's Quilted Jacket",
    description:
      "Quilted jacket with a high collar and button closure. Features a lightweight, padded design for warmth and comfort, and includes front pockets for added functionality. Perfect for layering during cooler weather.",
    price: "22.00",
    images: [
      {
        color: "white",
        urls: ["https://iili.io/J8zaD4p.webp"],
        sizes: ["XS", "S", "M", "L", "XL"],
      },
      {
        color: "cyan",
        urls: ["https://iili.io/J8zatGR.webp"],
        sizes: ["2XL", "3XL"],
      },
    ],
    isProtected: true,
    brand: {
      id: 2,
      name: "Bruce Banner",
      isProtected: true,
    },
    categories: [
      {
        id: 4,
        name: "Men",
        image: "https://iili.io/J8zaD4p.webp",
        isProtected: true,
      },
    ],
  },
  {
    id: 15,
    name: "Men's Straight-Cut Dress Pants",
    description:
      "Men's straight fit dress pants, designed for a sophisticated and modern style. Crafted from high quality fabric, these pants offer a sleek fit. For formal and semi-formal occasions. With a flat front, these pants maintain a clean and elegant silhouette. Traditional belt loops and side pockets add practicality without compromising on style.",
    price: "32.00",
    images: [
      {
        color: "gray",
        urls: ["https://iili.io/J8zcAnj.webp"],
        sizes: ["S", "M", "L", "XL", "2XL"],
      },
    ],
    isProtected: true,
    brand: {
      id: 2,
      name: "Bruce Banner",
      isProtected: true,
    },
    categories: [
      {
        id: 4,
        name: "Men",
        image: "https://iili.io/J8zaD4p.webp",
        isProtected: true,
      },
    ],
  },
  {
    id: 27,
    name: "Classic Bermuda Shorts for Men",
    description:
      "Update your casual wardrobe with our classic knee-length Bermuda shorts for men. Designed for comfort and versatility, these Bermuda shorts are perfect for warm weather and a variety of casual occasions.",
    price: "26.00",
    images: [
      {
        color: "orange",
        urls: ["https://iili.io/J8zlRbn.webp"],
        sizes: ["XS", "S", "M", "L"],
      },
      {
        color: "black",
        urls: ["https://iili.io/J8zluRt.webp"],
        sizes: ["XS", "S", "L", "2XL"],
      },
      {
        color: "white",
        urls: ["https://iili.io/J8zlAOX.webp"],
        sizes: ["XS", "S", "L", "XL", "2XL", "3XL"],
      },
    ],
    isProtected: true,
    brand: {
      id: 4,
      name: "Daredevil",
      isProtected: true,
    },
    categories: [
      {
        id: 4,
        name: "Men",
        image: "https://iili.io/J8zaD4p.webp",
        isProtected: true,
      },
    ],
  },
  {
    id: 28,
    name: "Men's Cotton Shorts",
    description:
      "Stay cool and comfortable with our Men's Cotton Shorts, designed for ultimate relaxation and casual style. Perfect for warm weather or lounging at home, these shorts offer a classic look with modern comfort.",
    price: "22.00",
    images: [
      {
        color: "orange",
        urls: ["https://iili.io/J8zlYWG.webp"],
        sizes: ["XS", "S", "M", "L"],
      },
      {
        color: "black",
        urls: ["https://iili.io/J8zl7xs.webp"],
        sizes: ["XS", "S", "L", "2XL", "3XL"],
      },
      {
        color: "cyan",
        urls: ["https://iili.io/J8zlasf.webp"],
        sizes: ["XS", "S", "M", "L", "XL", "2XL"],
      },
    ],
    isProtected: true,
    brand: {
      id: 1,
      name: "Ice",
      isProtected: true,
    },
    categories: [
      {
        id: 4,
        name: "Men",
        image: "https://iili.io/J8zaD4p.webp",
        isProtected: true,
      },
    ],
  },
  {
    id: 29,
    name: "Men's Wide Silk Bermuda Shorts",
    description:
      "Experience luxurious comfort and sophisticated style with our Men's Wide Silk Bermuda Shorts. Perfect for a relaxed yet refined look, these shorts offer an elegant touch to casual and semi-formal settings.",
    price: "115.00",
    images: [
      {
        color: "#af9f8c",
        urls: ["https://iili.io/J8zlGJS.webp", "https://iili.io/J8zl1g2.webp"],
        sizes: ["XS", "S", "M", "L", "XL"],
      },
      {
        color: "cyan",
        urls: ["https://iili.io/J8zl00l.webp", "https://iili.io/J8zllf4.webp"],
        sizes: ["XS", "S", "M", "L", "XL"],
      },
    ],
    isProtected: true,
    brand: {
      id: 2,
      name: "Bruce Banner",
      isProtected: true,
    },
    categories: [
      {
        id: 4,
        name: "Men",
        image: "https://iili.io/J8zaD4p.webp",
        isProtected: true,
      },
    ],
  },
] as IProduct[];

export const newArrivals = [
  {
    id: 18,
    name: "Classic men's shirt",
    description:
      "Plain short-sleeved shirt with standard buttons and a front breast pocket. Minimalist and classic style for casual occasions.",
    price: "28.00",
    images: [
      {
        color: "black",
        urls: ["https://iili.io/J8zcwcN.webp", "https://iili.io/J8zcjFp.webp"],
        sizes: ["XS", "S", "M", "L", "XL"],
      },
      {
        color: "blue",
        urls: ["https://iili.io/J8zce9t.webp", "https://iili.io/J8zcNSI.webp"],
        sizes: ["XS", "S", "M", "L"],
      },
      {
        color: "brown",
        urls: ["https://iili.io/J8zcvNn.webp", "https://iili.io/J8zckAX.webp"],
        sizes: ["XS", "M", "XL", "2XL"],
      },
    ],
    isProtected: true,
    brand: {
      id: 1,
      name: "Ice",
      isProtected: true,
    },
    categories: [
      {
        id: 1,
        name: "Top",
        image: "https://iili.io/J8zlmmX.webp",
        isProtected: true,
      },
      {
        id: 4,
        name: "Men",
        image: "https://iili.io/J8zaD4p.webp",
        isProtected: true,
      },
      {
        id: 7,
        name: "Rogers",
        image: "https://iili.io/J8zcAnj.webp",
        isProtected: true,
      },
    ],
  },
  {
    id: 13,
    name: "Sporty Track Pants",
    description:
      "These sporty track pants are perfect for an active lifestyle. Made from a lightweight and breathable fabric, they offer both comfort and flexibility. The adjustable drawstring waistband ensures a snug fit, while the classic pockets add functionality. Whether you're hitting the gym or running errands, these track pants provide the perfect blend of style and performance.",
    price: "10.00",
    images: [
      {
        color: "blue",
        urls: ["https://iili.io/J8zcCaS.webp"],
        sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
      },
      {
        color: "red",
        urls: ["https://iili.io/J8zcx99.webp"],
        sizes: ["XS", "S", "M", "L", "XL"],
      },
    ],
    isProtected: true,
    brand: {
      id: 3,
      name: "Summers",
      isProtected: true,
    },
    categories: [
      {
        id: 2,
        name: "Bottom",
        image: "https://iili.io/J8zcacB.webp",
        isProtected: true,
      },
      {
        id: 5,
        name: "Women",
        image: "https://iili.io/J8zaEB4.webp",
        isProtected: true,
      },
    ],
  },
  {
    id: 19,
    name: "Unisex sports shoes",
    description:
      "Special sports shoes for running. They have a semi-high platform to prevent impact with the ground when jogging or running. Comfortable and very light.",
    price: "45.00",
    images: [
      {
        color: "white",
        urls: ["https://iili.io/J8zcgVf.webp"],
        sizes: [36, 37, 38, 39, 40, 41, 42],
      },
    ],
    isProtected: true,
    brand: {
      id: 3,
      name: "Summers",
      isProtected: true,
    },
    categories: [
      {
        id: 3,
        name: "Shoes",
        image: "https://iili.io/J8zl3R1.webp",
        isProtected: true,
      },
    ],
  },
  {
    id: 21,
    name: "Women's sports shoe",
    description:
      "Super comfortable sports shoe, ideal for the gym, with a unique and modern design.",
    price: "45.00",
    images: [
      {
        color: "pink",
        urls: ["https://iili.io/J8zcrP4.webp", "https://iili.io/J8zc6Kl.webp"],
        sizes: [35, 36, 37, 38, 39, 40],
      },
    ],
    isProtected: true,
    brand: {
      id: 5,
      name: "Carol Danvers",
      isProtected: true,
    },
    categories: [
      {
        id: 3,
        name: "Shoes",
        image: "https://iili.io/J8zl3R1.webp",
        isProtected: true,
      },
      {
        id: 5,
        name: "Women",
        image: "https://iili.io/J8zaEB4.webp",
        isProtected: true,
      },
      {
        id: 6,
        name: "Romanoff",
        image: "https://iili.io/J8zam3N.webp",
        isProtected: true,
      },
    ],
  },
  {
    id: 23,
    name: "Women's high heel shoes",
    description:
      "Step into elegance with our exquisite Women's High Heel Formal Shoes, designed to elevate your style and confidence at any formal occasion. Crafted with precision, these shoes feature a sleek and sophisticated design that complements any evening attire.",
    price: "64.00",
    images: [
      {
        color: "black",
        urls: ["https://iili.io/J8zctDu.webp", "https://iili.io/J8zcZNe.webp"],
        sizes: [35, 36, 37, 38, 39, 40],
      },
      {
        color: "red",
        urls: ["https://iili.io/J8zlHlV.webp", "https://iili.io/J8zl9KQ.webp"],
        sizes: [35, 36, 37, 38, 39],
      },
    ],
    isProtected: true,
    brand: {
      id: 6,
      name: "Kara Zor-El ",
      isProtected: true,
    },
    categories: [
      {
        id: 3,
        name: "Shoes",
        image: "https://iili.io/J8zl3R1.webp",
        isProtected: true,
      },
      {
        id: 5,
        name: "Women",
        image: "https://iili.io/J8zaEB4.webp",
        isProtected: true,
      },
      {
        id: 6,
        name: "Romanoff",
        image: "https://iili.io/J8zam3N.webp",
        isProtected: true,
      },
    ],
  },
  {
    id: 24,
    name: "Men's Skater-Style Suede Sneakers",
    description:
      "Discover the perfect blend of style and functionality with our Men's Skater-Style Suede Sneakers. Designed for the modern skater and streetwear enthusiast, these sneakers offer a sleek and contemporary look with superior comfort.",
    price: "52.00",
    images: [
      {
        color: "orange",
        urls: ["https://iili.io/J8zl3R1.webp"],
        sizes: [38, 39, 40, 41, 42, 43],
      },
      {
        color: "blue",
        urls: ["https://iili.io/J8zl2HP.webp"],
        sizes: [40, 41, 42],
      },
      {
        color: "black",
        urls: ["https://iili.io/J8zlJUB.webp"],
        sizes: [39, 40, 43, 44],
      },
      {
        color: "red",
        urls: ["https://iili.io/J8zcpix.webp"],
        sizes: [38, 39, 40],
      },
    ],
    isProtected: true,
    brand: {
      id: 4,
      name: "Daredevil",
      isProtected: true,
    },
    categories: [
      {
        id: 3,
        name: "Shoes",
        image: "https://iili.io/J8zl3R1.webp",
        isProtected: true,
      },
      {
        id: 4,
        name: "Men",
        image: "https://iili.io/J8zaD4p.webp",
        isProtected: true,
      },
      {
        id: 7,
        name: "Rogers",
        image: "https://iili.io/J8zcAnj.webp",
        isProtected: true,
      },
    ],
  },
  {
    id: 30,
    name: "Women's Ankle-Length Skirt",
    description:
      "Embrace effortless elegance with our Women's Ankle-Length Skirt, designed to offer a graceful and sophisticated silhouette. Perfect for various occasions, this skirt combines style and comfort to create a versatile wardrobe staple.",
    price: "27.00",
    images: [
      {
        color: "#9a5b3a",
        urls: ["https://iili.io/J8zlM57.webp"],
        sizes: ["XS", "S", "M"],
      },
      {
        color: "red",
        urls: ["https://iili.io/J8zlVe9.webp"],
        sizes: ["S", "M", "XL"],
      },
    ],
    isProtected: true,
    brand: {
      id: 6,
      name: "Kara Zor-El ",
      isProtected: true,
    },
    categories: [
      {
        id: 2,
        name: "Bottom",
        image: "https://iili.io/J8zcacB.webp",
        isProtected: true,
      },
      {
        id: 5,
        name: "Women",
        image: "https://iili.io/J8zaEB4.webp",
        isProtected: true,
      },
      {
        id: 6,
        name: "Romanoff",
        image: "https://iili.io/J8zam3N.webp",
        isProtected: true,
      },
    ],
  },
  {
    id: 32,
    name: "Women's Cotton Graphic T-Shirt",
    description:
      "Women's cotton graphic t-shirt, designed for comfort and style. This t-shirt features a vibrant graphic print on the front, making it a standout piece to wear every day.",
    price: "15.00",
    images: [
      {
        color: "black",
        urls: ["https://iili.io/J8zlwsj.webp"],
        sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
      },
      {
        color: "blue",
        urls: ["https://iili.io/J8zlOqx.webp"],
        sizes: ["XS", "S", "M", "XL", "3XL"],
      },
    ],
    isProtected: true,
    brand: {
      id: 6,
      name: "Kara Zor-El ",
      isProtected: true,
    },
    categories: [
      {
        id: 1,
        name: "Top",
        image: "https://iili.io/J8zlmmX.webp",
        isProtected: true,
      },
      {
        id: 5,
        name: "Women",
        image: "https://iili.io/J8zaEB4.webp",
        isProtected: true,
      },
    ],
  },
  {
    id: 33,
    name: "Men's Plain Cotton T-Shirt",
    description:
      "Men's plain cotton t-shirt. Designed for simplicity and comfort, this classic t-shirt is a versatile addition to any wardrobe, perfect for casual style or layering.",
    price: "16.00",
    images: [
      {
        color: "white",
        urls: ["https://iili.io/J8zl6Xa.webp", "https://iili.io/J8zl4zg.webp"],
        sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
      },
      {
        color: "red",
        urls: ["https://iili.io/J8zlkgV.webp", "https://iili.io/J8zle0Q.webp"],
        sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
      },
      {
        color: "cyan",
        urls: ["https://iili.io/J8zlgmF.webp", "https://iili.io/J8zlUe1.webp"],
        sizes: ["XS", "S", "M", "L", "XL"],
      },
      {
        color: "yellow",
        urls: ["https://iili.io/J8zlsqv.webp", "https://iili.io/J8zlPLJ.webp"],
        sizes: ["M", "L", "XL", "2XL", "3XL"],
      },
    ],
    isProtected: true,
    brand: {
      id: 2,
      name: "Bruce Banner",
      isProtected: true,
    },
    categories: [
      {
        id: 1,
        name: "Top",
        image: "https://iili.io/J8zlmmX.webp",
        isProtected: true,
      },
      {
        id: 4,
        name: "Men",
        image: "https://iili.io/J8zaD4p.webp",
        isProtected: true,
      },
      {
        id: 7,
        name: "Rogers",
        image: "https://iili.io/J8zcAnj.webp",
        isProtected: true,
      },
    ],
  },
] as IProduct[];

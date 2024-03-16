import axios from "axios";

import { Product } from "@/types/products";

export const romanoffDescription = `Discover our women's clothing collection: where elegance meets
  comfort. Each piece celebrates your unique style. Explore the
  fashion that inspires you to shine on every occasion. Make a style
  statement with us today!`;

export const rogersDescription = `Explore our men's clothing collection: where sophistication meets versatility. Each piece embodies your distinct style. Dive into fashion that ignites your confidence on every occasion. Make a style statement with us today!`;

export const shoesDescription =
  "Introducing Eco-Comfort Sneakers: the epitome of sustainability and comfort. Crafted with eco-friendly materials, these sneakers offer both style and conscience. Walk the path of sustainability in comfort and style with Eco-Comfort Sneakers.";

export const getCollections = async (): Promise<{
  men: Product[];
  women: Product[];
  newArrivals: Product[];
}> => {
  const first = await axios.get(
    "https://fakestoreapi.com/products/category/men's clothing?limit=6"
  );
  const second = await axios.get(
    "https://fakestoreapi.com/products/category/women's clothing?limit=6"
  );

  const third = await axios.get(
    "https://fakestoreapi.com/products/category/jewelery?limit=6"
  );

  const allCollections = {
    men: first.data,
    women: second.data,
    newArrivals: third.data,
  };

  return allCollections;
};

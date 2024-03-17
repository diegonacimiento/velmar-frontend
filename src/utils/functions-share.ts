import { Cart } from "@/types/context";
import { Product } from "@/types/products";
import axios from "axios";

export const totalPrice = (cart: Cart[]): number => {
  const reducer = (accumulator: number, currentValue: Cart) =>
    accumulator + currentValue.product.price * currentValue.amount;
  const total = cart.reduce(reducer, 0);
  return Number(total.toFixed(2));
};

export const getProducts = async (
  offset?: number,
  limit?: number,
  category?: string
): Promise<Product[]> => {
  // await new Promise<void>((resolve) => setTimeout(resolve, 5000))

  if (category) {
    const response = await axios.get(
      `https://fakestoreapi.com/products/category/${category}?limit=${limit}`
    );
    return response.data;
  }

  const response = await axios.get(
    `https://fakestoreapi.com/products?limit=${""}`
  );

  let products = response.data;

  console.log(products);

  if (limit) {
    products = response.data.slice(offset, limit);
  }

  return products;
};

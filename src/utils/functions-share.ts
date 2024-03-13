import { Product } from "@/types/products";

export const totalPrice = (cart: Product[]): number => {
  const reducer = (accumulator: any, currentValue: any) =>
    accumulator + currentValue.price;
  const total = cart.reduce(reducer, 0);
  return total;
};

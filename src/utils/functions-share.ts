import { Cart } from "@/types/context";

export const totalPrice = (cart: Cart[]): number => {
  const reducer = (accumulator: number, currentValue: Cart) =>
    accumulator + currentValue.product.price * currentValue.amount;
  const total = cart.reduce(reducer, 0);
  return Number(total.toFixed(2));
};

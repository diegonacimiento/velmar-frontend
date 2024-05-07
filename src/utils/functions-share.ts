import { ICart } from "@/types/context";

export const totalPrice = (cart: ICart[]): number => {
  const reducer = (accumulator: number, currentValue: ICart) =>
    accumulator + Number(currentValue.product.price) * currentValue.amount;
  const total = cart.reduce(reducer, 0);
  return Number(total.toFixed(2));
};

export function genId() {
  
  const suffix = Math.random().toString(36).substring(2);

  const suffix2 = Math.random().toString(36).substring(2);

  const number = (Math.random()*10000).toString().substring(5);
  
  const uniqueId = suffix + '-' + suffix2 + '-' + number;
  
  return uniqueId;
}

export const copyData = (data: any) => {
  const copy = JSON.parse(JSON.stringify(data || null));
  return copy;
}
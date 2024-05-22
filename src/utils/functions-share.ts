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

  const number = (Math.random() * 10000).toString().substring(5);

  const uniqueId = suffix + "-" + suffix2 + "-" + number;

  return uniqueId;
}

export const copyData = (data: any) => {
  const copy = JSON.parse(JSON.stringify(data || null));
  return copy;
};

export const parseParamsToURL = (params: any) => {
  const { name, brands, categories, minPrice, maxPrice } = params;

  let url = name ? `?name=${name}&` : `?`;

  if (brands && brands.length > 0) {
    for (let index = 0; index < brands.length; index++) {
      url += `brands=${brands[index]}&`;
    }
  }
  if (categories && categories.length > 0) {
    for (let index = 0; index < categories.length; index++) {
      url += `categories=${categories[index]}&`;
    }
  }
  if (minPrice) {
    url += `minPrice=${minPrice}&`;
  }
  if (maxPrice) {
    url += `maxPrice=${maxPrice}&`;
  }

  const finalUrl = url.substring(0, url.length - 1);

  return finalUrl;
};

import { ICart } from "@/types/context";
import { IAddress } from "@/types/user";

export const totalPrice = (cart: ICart[]): number => {
  const reducer = (accumulator: number, currentValue: ICart) =>
    accumulator + Number(currentValue.product.price) * currentValue.amount;
  const total = cart.reduce(reducer, 0);
  return Number(total.toFixed(2));
};

export const addressToString = (address: IAddress) => {
  const addressArray = Object.values(address);
  const addressString = addressArray.join(", ");
  return addressString;
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
    if (Array.isArray(brands)) {
      for (let index = 0; index < brands.length; index++) {
        url += `brands=${brands[index]}&`;
      }
    } else {
      url += `brands=${brands}&`;
    }
  }

  if (categories && categories.length > 0) {
    if (Array.isArray(categories)) {
      for (let index = 0; index < categories.length; index++) {
        url += `categories=${categories[index]}&`;
      }
    } else {
      url += `categories=${categories}&`;
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

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    throw new TypeError("El argumento proporcionado no es una fecha válida");
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Los meses van de 0 a 11
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

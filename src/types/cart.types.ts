import { IProduct, Size } from "./products";

export interface ICart {
  id: number;
  createdAt: string;
  items: ICartItem[];
  user: {
    id: number;
    username: string;
  };
}

export interface ICartItem {
  id?: number;
  product: IProduct;
  quantity: number;
  size: Size;
}

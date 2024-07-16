import { Dispatch, SetStateAction } from "react";

import { IProduct, Size } from "./products";
import { ICartItem } from "./cart.types";

export interface IContext {
  isAuth: boolean;
  setIsAuth: Dispatch<SetStateAction<boolean>>;
  roleUser: TRole;
  setRoleUser: Dispatch<SetStateAction<TRole>>;
  addressValue: string;
  updateAddressValue: (value: string) => void;
  products: IProduct[];
  updateProducts: (products: IProduct[]) => void;
  cart: ICartItem[] | undefined;
  setCart: Dispatch<SetStateAction<ICartItem[] | undefined>>;
  addProductToCart: (product: IProduct, quantity: number, size: Size) => void;
}

export type TRole = "customer" | "salesperson" | null;

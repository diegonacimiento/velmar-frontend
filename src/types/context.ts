import { Dispatch, SetStateAction } from "react";

import { IProduct, Size } from "./products";
import { ICartItem } from "./cart.types";

export interface IContext {
  isAuth: boolean;
  setIsAuth: Dispatch<SetStateAction<boolean>>;
  roleUser: TRole;
  setRoleUser: Dispatch<SetStateAction<TRole>>;
  addressValue: any;
  updateAddressValue: (value: any) => void;
  products: IProduct[];
  updateProducts: (products: IProduct[]) => void;
  cart: ICartItem[] | undefined;
  setCart: Dispatch<SetStateAction<ICartItem[] | undefined>>;
  addProductToCart: (product: IProduct, quantity: number, size: Size) => void;
  deleteAllCart: () => void;
}

export type TRole = "customer" | "salesperson" | "superadmin" | null;

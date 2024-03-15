import { Product } from "./products";

export interface Context {
 addressValue: string;
 updateAddressValue: (value: string) => void;
 cart: Cart[];
 updateCart: (product: Product, amount: number) => void;
 products: Product[];
 updateProducts: (products: Product[]) => void;
 deleteItemCart: (product: Product) => void;
}

export interface Cart {
 product: Product;
 amount: number;
}
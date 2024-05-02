import { Brand } from "./brands";
import { Category } from "./categories";

export interface Product {
  id: number;

  name: string;

  description: string;

  price: string;

  images: ImageProduct[];

  brand: Brand;

  categories: Category[];

  createdAt: string;

  updatedAt: string;

  deletedAt: string;
}

export interface ImageProduct {
  color: string;
  urls: string[];
  sizes: Size[];
}

export interface PayloadUpdateProduct
  extends Omit<Product, "categories" | "brand"> {
  categories: number[];
  brand: number;
}

export interface ColorsTools {
  colorsImage: string[];
  handleNewColor: (color: string) => void;
  removeColor: (color: string) => void;
}

export interface SizesTools {
  addSize: (size: any) => void;
  removeSize: (size: any) => void;
  sizes: Size[];
}

export enum Size {
  XS = "XS",
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
  "2XL" = "2XL",
  "3XL" = "3XL",
}

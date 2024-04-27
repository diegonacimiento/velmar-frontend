import { Brand } from "./brands";
import { Category } from "./categories";

export interface Product {
  id: number;

  name: string;

  description: string;

  price: number;

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
}

export interface PayloadUpdateProduct
  extends Omit<Product, "categories" | "brand"> {
  categories: number[];
  brand: number;
}

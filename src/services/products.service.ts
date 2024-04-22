import axios from "axios";

import { Product } from "@/types/products";

export const getProducts = async (
  offset?: number,
  limit?: number,
  category?: string,
  name?: string
): Promise<Product[]> => {
  // await new Promise<void>((resolve) => setTimeout(resolve, 5000))
  try {
    const params =
      (limit ? `?limit=${limit}` : "") +
      (offset ? `&offset=${offset}` : "") +
      (name ? `?name=${name}` : "");
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_URL}/products${params}`,
      {
        headers: {
          "api-key": process.env.NEXT_PUBLIC_API_KEY,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getProduct = async (id: number): Promise<Product> => {
  // await new Promise<void>((resolve) => setTimeout(resolve, 5000))
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_URL}/products/${id}`,
      {
        headers: {
          "api-key": process.env.NEXT_PUBLIC_API_KEY,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

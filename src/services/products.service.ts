import axios from "axios";

import { PayloadUpdateProduct, Product } from "@/types/products";
import { headers } from "next/headers";

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

export const updateProduct = async (
  id: number,
  payload: PayloadUpdateProduct
) => {
  try {
    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_URL}/products/${id}`,
      payload,
      {
        headers: {
          "api-key": process.env.NEXT_PUBLIC_API_KEY,
        },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

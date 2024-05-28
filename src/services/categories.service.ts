import axios from "axios";

import { ICategory, IPayloadUpdateCategory } from "@/types/categories";

export const getCategories = async (): Promise<ICategory[]> => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_URL}/categories`,
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

export const getCategory = async (id: number): Promise<ICategory> => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_URL}/categories/${id}`,
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

export const updateCategory = async (
  id: number,
  payload: IPayloadUpdateCategory
): Promise<ICategory> => {
  try {
    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_URL}/categories/${id}`,
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

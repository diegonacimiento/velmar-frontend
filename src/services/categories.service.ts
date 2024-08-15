import axios from "axios";

import {
  ICategory,
  IPaylaodCreateCategory,
  IPayloadUpdateCategory,
} from "@/types/categories";

export const getCategories = async (): Promise<ICategory[]> => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/categories`,
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

export const getCategory = async (id: string): Promise<ICategory> => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/categories/${id}`,
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

export const createCategory = async (payload: IPaylaodCreateCategory) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/categories`,
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

export const updateCategory = async (
  id: number,
  payload: IPayloadUpdateCategory
): Promise<ICategory> => {
  try {
    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/categories/${id}`,
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

export const deleteCategory = async (id: number) => {
  // await new Promise<void>((resolve) => setTimeout(resolve, 5000))
  try {
    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/categories/${id}`,
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

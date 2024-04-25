import axios from "axios";

import { Category } from "@/types/categories";

export const getCategories = async (): Promise<Category[]> => {
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

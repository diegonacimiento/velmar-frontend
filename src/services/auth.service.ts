import axios from "axios";

import { SignInData } from "@/types/form";

export const signIn = async (payload: SignInData) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_URL}/auth/login`,
      { email: payload["your email"], password: payload["your password"] },
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

export const signOut = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_URL}/auth/logout`,
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

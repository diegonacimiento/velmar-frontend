import axios from "axios";

export class AuthService {
  async signIn(payload: any) {
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
  }
}

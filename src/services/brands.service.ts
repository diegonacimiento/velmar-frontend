import axios from "axios";

import { IBrand } from "@/types/brands";

export const getBrands = async (): Promise<IBrand[]> => {
 try {
   
   const response = await axios.get(
     `${process.env.NEXT_PUBLIC_URL}/brands`,
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
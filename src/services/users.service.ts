import axios from "axios";


export class UsersService {
 async getUser () {
  try {
   const response = await axios.get(`${process.env.BACKEND_URL}/users/profile`);
   return response.data;
  } catch (error) {
   console.error(error);
  }
 }
}
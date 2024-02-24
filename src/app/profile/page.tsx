import Form from "@/components/Form";
import axios from "axios";
import React from "react";
import Data from "./Data";

const getUser = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users/1"
  );
  return response.data;
};

const Profile = async () => {
  const user = await getUser();
  // console.log(user);
  return (
    <div className="flex flex-col justify-center gap-4 px-6 py-12 sm:px-12 mx-4 sm:mx-24 my-12 shadow-md rounded-lg w-500p bg-primary text-secondary">
      <h1 className="text-2xl text-center font-semibold text-secondary my-4 sm:text-3xl">
        Hi {user.name}
      </h1>
      <Data user={user} />
    </div>
  );
};

export default Profile;

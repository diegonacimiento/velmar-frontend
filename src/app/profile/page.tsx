import Form from "@/components/Form";
import axios from "axios";
import React from "react";
import Data from "./Data";
import Link from "next/link";

const getUser = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users/1"
  );
  return response.data;
};

const Profile = async () => {
  const user = await getUser();
  return (
    <div className="flex flex-col justify-center gap-4 px-6 py-12 sm:px-12 mx-4 sm:mx-24 my-12 shadow-md rounded-lg w-500p bg-primary text-secondary">
      <h1 className="text-2xl text-center font-semibold text-secondary my-4 sm:text-3xl">
        Hi {user.name}
      </h1>
      <Data user={user} />
      <div className="flex items-center gap-2 flex-wrap">
        <p className="text-gray-400 text-sm font-medium">Do you want to change your password?</p>
        <Link href="/profile/change-password" className="font-medium text-sm hover:underline">
          Change password
        </Link>
      </div>
    </div>
  );
};

export default Profile;

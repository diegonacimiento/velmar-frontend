"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import Data from "./Data";
import { getUser } from "@/services/users.service";
import { IUser } from "@/types/user";
import LoadingProfile from "./LoadingProfile";

const Profile = () => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [loading, setLoading] = useState<boolean>(true);

  
  useEffect(() => {
    const get = async () => {
      try {
        const response = await getUser();
        setUser(response);
        setLoading(false);
      } catch (error) {
        throw error;
      }
    };
    get();
  }, []);

  if (loading || !user) return <LoadingProfile />;

  return (
    <div className="flex flex-col justify-center gap-4 px-6 py-12 sm:px-12 my-4 shadow-md rounded-lg max-w-520 w-full bg-primary text-secondary">
      <Data user={user} setUser={setUser} />
      <div className="flex items-center gap-2 flex-wrap">
        <p className="text-gray-400 text-sm font-medium">
          Do you want to change your password?
        </p>
        <Link
          href="/profile/change-password"
          className="font-medium text-sm hover:underline"
        >
          Change password
        </Link>
      </div>
    </div>
  );
};

export default Profile;

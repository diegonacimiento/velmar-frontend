import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import Link from "next/link";

import Profile from "./Profile";

const page = () => {
  return (
    <div className="flex flex-col p-4 max-w-520 w-full">
      <Link href="/profile/orders" className="flex w-max hover:scale-105 duration-150">
        <div className="flex items-center gap-1 w-max text-secondary">
          {" "}
          <MdArrowForwardIos />
          My orders
        </div>
      </Link>
      <Profile />
    </div>
  );
};

export default page;

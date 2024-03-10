"use client";
import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import Link from "next/link";

import Nav from "./Nav";
import Drawer from "./Drawer";
import { usePathname } from "next/navigation";

const Header = () => {
  const path = usePathname();
  return (
    <header className="relative flex justify-center items-center shadow-md rd:px-4 h-16 bg-primary">
      <div className="flex justify-between items-center w-full max-w-2k">
        <Drawer />

        <p className="text-2xl text-secondary font-bold antialiased tracking-widest">
          <Link href="/">Velmar</Link>
        </p>

        <Nav />

        <Link href="/checkout">
          <button
            className={
              "relative flex items-center text-xl p-4 rd:pr-0 after:content-['12'] after:absolute after:flex after:items-center after:justify-center after:top-1 after:left-0.5 after:rounded-full after:h-4 after:w-4 after:text-xxs after:bg-letter after:text-primary hover:text-secondary hover:after:bg-secondary duration-150 after:duration-150 " +
              (path.includes("/cart")
                ? "text-secondary after:bg-secondary"
                : "")
            }
            type="button"
          >
            <MdOutlineShoppingCart />
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;

"use client";
import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import Link from "next/link";

import Nav from "./Nav";
import Drawer from "./Drawer";

const Header = () => {
  return (
    <header className="relative flex justify-between items-center shadow-md h-16 bg-primary">
      {/* <Nav /> */}
      <Drawer />
      <p className="text-2xl font-bold antialiased tracking-widest">
        <Link href="/">Velmar</Link>
      </p>
      <button
        className="relative flex items-center text-xl p-4 after:content-['12'] after:absolute after:flex after:items-center after:justify-center after:top-1 after:left-0.5 after:rounded-full after:h-4 after:w-4 after:text-xxs after:bg-letter after:text-primary"
        type="button"
      >
        <MdOutlineShoppingCart />
      </button>
    </header>
  );
};

export default Header;

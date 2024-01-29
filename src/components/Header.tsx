"use client";
import React, { useEffect, useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import Link from "next/link";

import Nav from "./Nav";
import Drawer from "./Drawer";

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="relative flex justify-center items-center shadow-md rd:px-4 h-16 bg-primary">
      <div className="flex justify-between items-center w-full max-w-2k">
        {windowWidth < 922 && <Drawer />}

        <p className="text-2xl text-secondary font-bold antialiased tracking-widest">
          <Link href="/">Velmar</Link>
        </p>

        {windowWidth >= 922 && (
          <Nav styles="flex justify-around items-center m-auto h-full max-w-520" />
        )}

        <button
          className="relative flex items-center text-xl p-4 after:content-['12'] after:absolute after:flex after:items-center after:justify-center after:top-1 after:left-0.5 after:rounded-full after:h-4 after:w-4 after:text-xxs after:bg-letter after:text-primary"
          type="button"
        >
          <MdOutlineShoppingCart />
        </button>
      </div>
    </header>
  );
};

export default Header;

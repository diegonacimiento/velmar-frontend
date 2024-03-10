import React from "react";
import Link from "next/link";

import Nav from "./Nav";
import Drawer from "./Drawer";
import Cart from "./Cart";

const Header = () => {
  return (
    <header className="relative flex justify-center items-center shadow-md rd:px-4 h-16 bg-primary">
      <div className="flex justify-between items-center w-full max-w-2k">
        <Drawer />

        <p className="text-2xl text-secondary font-bold antialiased tracking-widest">
          <Link href="/">Velmar</Link>
        </p>

        <Nav />

        <Cart />
      </div>
    </header>
  );
};

export default Header;

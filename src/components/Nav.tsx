"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = ({ handleDrawer }: { handleDrawer?: () => void }) => {
  const pathname = usePathname();

  const liStyles = handleDrawer
    ? "inline-block border-b border-gray-400 px-4 py-7 w-full text-gray-600 hover:text-secondary hover:border-secondary"
    : "text-gray-600 hover:text-secondary duration-300";

  const ulStyles = handleDrawer
    ? "flex flex-col h-100 pb-6"
    : "flex justify-around items-center m-auto h-full max-w-520";

  const navStyles = handleDrawer
    ? "w-full h-full overflow-auto"
    : "w-full h-full overflow-auto -rd:hidden";

  return (
    <nav className={navStyles}>
      <ul className={ulStyles}>
        <li>
          <Link
            className={liStyles + (pathname === "/" && " text-secondary")}
            onClick={handleDrawer}
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={
              liStyles + (pathname.includes("/products") && " text-secondary")
            }
            onClick={handleDrawer}
            href="/products"
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            className={liStyles + (pathname === "/about" && " text-secondary")}
            onClick={handleDrawer}
            href="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className={
              liStyles + (pathname === "/contact" && " text-secondary")
            }
            onClick={handleDrawer}
            href="/contact"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            className={
              liStyles + (pathname === "/sign-in" && " text-secondary")
            }
            onClick={handleDrawer}
            href="/sign-in"
          >
            Sign in
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

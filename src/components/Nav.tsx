"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useVelmarContext from "@/hooks/useVelmarContext";

const Nav = ({ handleDrawer }: { handleDrawer?: () => void }) => {
  const pathname = usePathname();

  const { isAuth } = useVelmarContext();

  const liStyles = handleDrawer
    ? "inline-block border-b border-gray-400 px-4 py-7 w-full text-gray-600 hover:text-secondary hover:border-secondary duration-150 "
    : "text-gray-600 hover:text-secondary duration-150 ";

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
            className={
              liStyles +
              (pathname === "/" && " text-secondary border-secondary")
            }
            onClick={handleDrawer}
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={
              liStyles +
              (pathname.includes("/products") &&
                " text-secondary border-secondary")
            }
            onClick={handleDrawer}
            href="/products"
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            className={
              liStyles +
              (pathname === "/about" && " text-secondary border-secondary")
            }
            onClick={handleDrawer}
            href="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className={
              liStyles +
              (pathname === "/contact" && " text-secondary border-secondary")
            }
            onClick={handleDrawer}
            href="/contact"
          >
            Contact
          </Link>
        </li>
        {isAuth ? (
          <>
            <li>
              <Link
                className={
                  liStyles +
                  (pathname === "/profile" &&
                    " text-secondary border-secondary")
                }
                onClick={handleDrawer}
                href="/profile"
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                className={
                  liStyles +
                  (pathname === "/sign-out" &&
                    " text-secondary border-secondary")
                }
                onClick={handleDrawer}
                href="/sign-out"
              >
                Sign out
              </Link>
            </li>
          </>
        ) : (
          <li>
            <Link
              className={
                liStyles +
                (pathname === "/sign-in" && " text-secondary border-secondary")
              }
              onClick={handleDrawer}
              href="/sign-in"
            >
              Sign in
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Nav;

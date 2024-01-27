import Link from "next/link";
import React from "react";

const Nav = (props: { styles: string; handleDrawer?: () => void }) => {
  const liStyles =
    "inline-block border-b border-gray-400 px-4 py-7 w-full text-gray-600 hover:text-black hover:border-black";
  return (
    <nav className="w-full h-full overflow-auto">
      <ul className={props.styles}>
        <li>
          <Link className={liStyles} onClick={props.handleDrawer} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            className={liStyles}
            onClick={props.handleDrawer}
            href="products"
          >
            Products
          </Link>
        </li>
        <li>
          <Link className={liStyles} onClick={props.handleDrawer} href="about">
            About
          </Link>
        </li>
        <li>
          <Link
            className={liStyles}
            onClick={props.handleDrawer}
            href="contact"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            className={liStyles}
            onClick={props.handleDrawer}
            href="profile"
          >
            Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

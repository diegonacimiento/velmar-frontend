import Link from "next/link";
import React from "react";

const Nav = (props: {styles: string, handleDrawer?: () => void}) => {
  return (
    <nav className="w-full h-full overflow-auto">
      <ul className={props.styles}>
        <li onClick={props.handleDrawer}>
          <Link href="/">Home</Link>
        </li>
        <li onClick={props.handleDrawer}>
          <Link href="products">Products</Link>
        </li>
        <li onClick={props.handleDrawer}>
          <Link href="about">About</Link>
        </li>
        <li onClick={props.handleDrawer}>
          <Link href="contact">Contact</Link>
        </li>
        <li onClick={props.handleDrawer}>
          <Link href="profile">Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

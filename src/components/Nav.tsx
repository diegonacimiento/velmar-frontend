import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Nav = (props: { styles: string; handleDrawer?: () => void }) => {
  const pathname = usePathname();

  const liStyles = props.handleDrawer ? "inline-block border-b border-gray-400 px-4 py-7 w-full text-gray-600 hover:text-secondary hover:border-secondary" : "text-gray-600 hover:text-secondary duration-300";

  return (
    <nav className="w-full h-full overflow-auto">
      <ul className={props.styles}>
        <li>
          <Link className={liStyles + (pathname === '/' && ' text-secondary')} onClick={props.handleDrawer} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            className={liStyles + (pathname === '/products' && ' text-secondary')}
            onClick={props.handleDrawer}
            href="products"
          >
            Products
          </Link>
        </li>
        <li>
          <Link className={liStyles + (pathname === '/about' && ' text-secondary')} onClick={props.handleDrawer} href="about">
            About
          </Link>
        </li>
        <li>
          <Link
            className={liStyles + (pathname === '/contact' && ' text-secondary')}
            onClick={props.handleDrawer}
            href="contact"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            className={liStyles + (pathname === '/profile' && ' text-secondary')}
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

import React from "react";
import Nav from "./Nav";
import Drawer from "./Drawer";

const Header = () => {
  return (
    <header className="relative flex items-center h-16 bg-primary">
      {/* <Nav /> */}
      <Drawer />
    </header>
  );
};

export default Header;

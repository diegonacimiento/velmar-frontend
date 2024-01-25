import React from "react";
import Nav from "./Nav";
import Drawer from "./Drawer";

const Header = () => {
  return (
    <header className="relative flex h-20 bg-slate-700">
      {/* <Nav /> */}
      <Drawer />
    </header>
  );
};

export default Header;

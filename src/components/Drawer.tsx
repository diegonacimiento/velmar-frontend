"use client";
import React, { useState } from "react";
import { MdOutlineClose, MdDensityMedium } from "react-icons/md";

import Nav from "./Nav";

const Drawer = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleDrawer = () => {
    setIsActive((prev) => !prev);
  };
  return (
    <div className="rd:hidden">
      <button className="p-4 text-lg" type="button" onClick={handleDrawer}>
        <MdDensityMedium />
      </button>
      <div className={isActive ? "fixed top-0 z-30" : undefined}>
      <div
        className={
          (isActive ? "w-screen opacity-80 z-10" : "w-0") +
          " h-screen opacity-0 overflow-hidden bg-gray-950 transition-opacity duration-100 absolute top-0"
        }
        onClick={handleDrawer}
      ></div>
      <div
        className={
          (isActive ? "w-draw opacity-100 z-20" : "w-0") +
          " h-screen opacity-0 overflow-hidden bg-primary duration-300 absolute top-0"
        }
      >
        <button
          className="text-lg p-4 float-end"
          type="button"
          onClick={handleDrawer}
        >
          <MdOutlineClose />
        </button>
        <Nav handleDrawer={handleDrawer} />
      </div>
      </div>
    </div>
  );
};

export default Drawer;

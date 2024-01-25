"use client";
import React, { useState } from "react";
import Nav from "./Nav";

const Drawer = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleDrawer = () => {
    setIsActive((prev) => !prev);
  };
  return (
    <div>
      <button
        className="border-1 border-slate-950 border-dashed bg-slate-400 p-1"
        type="button"
        onClick={handleDrawer}
      >
        O
      </button>
      <div
        className={
          (isActive ? "w-draw opacity-100" : "w-0") +
          " h-screen opacity-0 overflow-hidden bg-blue-600 duration-300 absolute top-0"
        }
      >
        <button
        className="border-1 border-slate-950 border-dashed bg-slate-400 p-1"
        type="button"
        onClick={handleDrawer}
      >
        X
      </button>
        <Nav
          styles="flex flex-col justify-around h-100 pl-2 pb-6"
          handleDrawer={handleDrawer}
        />
      </div>
    </div>
  );
};

export default Drawer;

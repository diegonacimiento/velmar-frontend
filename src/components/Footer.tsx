import { cv, linkedin, portfolio, twitter } from "@/utils/contacts";
import React from "react";
import { FaBriefcase, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaSheetPlastic } from "react-icons/fa6";

const Footer = () => {
  const aStyles = "p-4 text-3xl";
  return (
    <footer className="bg-secondary text-primary">
      <div className="m-auto max-w-2k">
        <div className="flex flex-col gap-5 p-10 text-center">
          <h3 className="text-3xl font-semibold tracking-widest">Velmar</h3>
          <p className="font-extralight">
            Fashion is what you buy, style is what you do with it.
          </p>
        </div>
        <div className="flex justify-center sm:gap-3 p-10">
          <a className={aStyles} href={linkedin}>
            <FaLinkedin />
          </a>
          <a className={aStyles} href={twitter}>
            <FaTwitter />
          </a>
          <a className={aStyles} href={portfolio}>
            <FaBriefcase />
          </a>
          <a className={aStyles} href={cv}>
            <FaSheetPlastic />
          </a>
        </div>
        <hr className="border-primary w-full absolute left-0" />
        <div className="p-10">
          <p className="flex items-center justify-center h-20 text-center font-semibold">
            © 2024 Velmar. Powered by Diego Nacimiento.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

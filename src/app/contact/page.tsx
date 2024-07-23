import React from "react";
import { FaBriefcase, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaSheetPlastic } from "react-icons/fa6";

import { cv, linkedin, portfolio, twitter } from "../../utils/contacts";

const Contact = () => {
  const divStyles = "h-60 w-full bg-primary";

  const aStyles =
    "flex flex-col justify-center items-center p-4 border-t border-secondary h-full w-full max-w-96 m-auto text-3xl hover:opacity-45 hover:bg-secondary hover:text-primary duration-150";

  const pStyles = "py-3 text-lg text-center";

  return (
    <div className="pt-10 w-full leading-8 text-secondary">
      <h2 className="text-2xl text-center font-bold">Contact me</h2>
      <p className="max-w-2k mt-8 mb-16 m-auto px-8 text-justify">
        Hello there! Thank you for visiting my social networks. I&apos;m
        currently actively seeking new job opportunities and would love to
        connect with you to discuss code and potential collaborations on
        interesting projects. Whether you have an opportunity available or just
        want to chat about technology, feel free to reach out! I&apos;m open to
        new ideas and excited about what the future may hold. Looking forward to
        hearing from you soon!
      </p>
      <div className={divStyles}>
        <a target="_blank" className={aStyles + " border-t-0"} href={linkedin}>
          <FaLinkedin />
          <p className={pStyles}>Diego Nacimiento</p>
        </a>
      </div>
      <div className={divStyles}>
        <a target="_blank" className={aStyles} href={twitter}>
          <FaTwitter />
          <p className={pStyles}>@diegonac23</p>
        </a>
      </div>
      <div className={divStyles}>
        <a target="_blank" className={aStyles} href={portfolio}>
          <FaBriefcase />
          <p className={pStyles}>My portfolio</p>
        </a>
      </div>
      <div className={divStyles}>
        <a target="_blank" className={aStyles} href={cv}>
          <FaSheetPlastic />
          <p className={pStyles}>CV</p>
        </a>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";
import Image from "next/image";
import { welcomeImage } from "./utils/links";

const Welcome = () => {
  return (
    <section className="w-full py-64 relative">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex flex-col px-6 py-6 sm:py-16 gap-3 bg-slate-300 bg-opacity-60 rounded-2xl m-2">
          <h3 className="font-medium sm:text-3xl text-2xl">
            Welcome to Velmar!
          </h3>
          <h1 className="font-semibold sm:text-6xl text-3xl max-w-2k">
            Find your style with just one click!
          </h1>
        </div>
        <Image
          className="absolute top-0 -z-10 w-full h-full object-cover"
          width={600}
          height={470}
          src={welcomeImage}
          alt="Shop"
        />
      </div>
    </section>
  );
};

export default Welcome;

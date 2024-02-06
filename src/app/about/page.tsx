import React from "react";
import { MdProductionQuantityLimits, MdOutlineSecurity } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-col leading-8 w-full">
      <section className="bg-secondary p-4 text-primary">
        <div className="max-w-2k m-auto px-4">
          <h3 className="text-2xl font-semibold">About</h3>
          <p className="text-justify my-4">
            Explore our innovative virtual shopping space! Immerse yourself in a
            world of possibilities where you can discover a wide selection of
            carefully curated products from the most recognized and emerging
            brands in the market. From fashion and accessories to technology and
            home goods, our ecommerce platform offers you a unique experience of
            discovery and convenience. <br />
            <br />{" "}
            <span className="text-5xl">
              <MdProductionQuantityLimits />
            </span>{" "}
            Navigate through our thoughtfully organized categories and find
            exactly what you need with ease and speed. Our product management
            system ensures that each item is presented attractively and with the
            detailed information you need to make informed purchasing decisions.{" "}
            <br />
            <br />
            <span className="text-5xl">
              <BiCategory />
            </span>{" "}
            Your security and privacy are our top priorities. With a robust user
            authentication system, you can trust that your personal and
            financial data are protected at all times. Additionally, our
            ordering process is designed to be efficient and hassle-free,
            ensuring a seamless shopping experience. <br />
            <br />
            <span className="text-5xl">
              <MdOutlineSecurity />
            </span>{" "}
            From the first click to the delivery at your doorstep, we are
            committed to providing you with exceptional service and an
            unparalleled shopping experience. Join us and discover the comfort
            and excitement of online shopping on our fictitious ecommerce
            platform.
          </p>
        </div>
      </section>

      <section className="bg-primary p-4 text-secondary">
        <div className="max-w-2k m-auto px-4">
        <div className="my-4">
          <h3 className="text-2xl font-semibold">Vision</h3>
          <p className="text-justify font-light my-2">
            To be the leading ecommerce platform, recognized for delivering an
            exceptional shopping experience and for connecting consumers with
            innovative and quality products from globally renowned brands.
          </p>
        </div>
        <div className="my-4">
          <h3 className="text-2xl font-semibold">Mission</h3>
          <p className="text-justify font-light my-2">
            Our mission is to offer a seamless, secure, and enjoyable online
            shopping experience by curating a diverse range of high-quality
            products. We prioritize customer satisfaction through exceptional
            service, data security, and privacy standards, aiming to become a
            trusted ecommerce platform fostering innovation and trust.
          </p>
        </div>
        </div>
      </section>

      <section className="p-4">
        <div className="max-w-2k m-auto px-4">
          <h3 className="text-2xl font-semibold">Technologies</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 justify-items-center items-center my-4">
            <Image
              width={100}
              height={100}
              src={"https://i.imgur.com/xr3xQTa.png"}
              alt="Nest.js icon"
              title="Nest.js icon"
            />
            <Image
              width={100}
              height={100}
              src={"https://i.imgur.com/hffY0kC.png"}
              alt="TypeScript icon"
              title="TypeScript icon"
            />

            <Image
              width={100}
              height={100}
              src={"https://i.imgur.com/qEzAmez.png"}
              alt="TypeORM icon"
              title="TypeORM icon"
            />

            <Image
              width={100}
              height={100}
              src={"https://i.imgur.com/rydGd27.png"}
              alt="PostgreSQL icon"
              title="PostgreSQL icon"
            />

            <Image
              width={100}
              height={100}
              src={"https://i.imgur.com/5ScobMw.png"}
              alt="Next.js icon"
              title="Next.js icon"
            />

            <Image
              width={100}
              height={100}
              src={"https://i.imgur.com/mB4MUGf.png"}
              title="TailwindCSS icon"
              alt="TailwindCSS icon"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

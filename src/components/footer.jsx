import React from "react";
import Layout from "./layout";
import Link from "next/link";
import { FaRegSnowflake } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="w-full relative border-t-2 border-solid border-dark dark:border-light font-medium 
    text-lg lg:flex-col lg:items-center lg:justify-center lg:py-1  bottom-0"
    >
      <div
        className="py-8 flex items-center justify-between lg:flex-col  md:py-2 w-full h-full  z-0 bg-light
      p-15 lg:pt-20 md:pt-[7rem] sm:pt-20 dark:bg-dark xl:p-24 sm:p-3 lg:p-10 "
      >
        <span className="mr-4 text-dark dark:text-light">
          {new Date().getFullYear()} &copy; All Rights Reserved
        </span>
        <div className="flex lg:py-2">
          <Link href="/" className="mr-4 text-dark dark:text-light lg:text-sm">
            developed By{" "}
            <span className="text-primary text-2xl lg:text-base px-1">☛</span>
            <span className="underline underline-offset-2 font-bold">
              Basanta Shrestha
            </span>
            <span className="text-primary text-2xl lg:text-base px-1">
              &#9754;
            </span>
          </Link>
        </div>

        <Link href="/" className=" text-dark dark:text-light">
          Lets Talk
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

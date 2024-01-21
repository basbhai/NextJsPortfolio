import React from "react";
import Layout from "./layout";
import Link from "next/link";
import { FaRegSnowflake } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark dark:border-light font-medium text-lg">
      <Layout className="py-8 flex items-center justify-between">
        <span className="mr-4 text-dark dark:text-light">
          {new Date().getFullYear()} &copy; All Rights Reserved
        </span>
        <div>
          <Link href="/" className="mr-4 text-dark dark:text-light">
            developed By <span className="text-primary text-2xl px-1">☛</span>
            <span className="underline underline-offset-2 font-bold">
              Basanta Shrestha
            </span>
            <span className="text-primary text-2xl px-1">&#9754;</span>
          </Link>
        </div>

        <Link href="/" className=" text-dark dark:text-light">
          Lets Talk
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;

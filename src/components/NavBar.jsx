import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Logo from "./logo";
import {
  FaFacebook,
  FaGithub,
  FaYoutube,
  FaSquareXTwitter,
  FaMoon,
} from "react-icons/fa6";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { IoSunnyOutline, IoIosMoon, IoToggleSharp } from "react-icons/io5";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group `}>
      {title}
      <span
        className={`h-[1px] inline-block  bg-black 
        absolute left-0 -bottom-0.5
        group-hover:w-full transition-[width] ease duration-300
        ${router.asPath === href ? "w-full" : "w-0"}
        dark:bg-light `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`${className} relative group my-2 capitalize`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[1px] inline-block  bg-light 
        absolute left-0 -bottom-0.5 
        group-hover:w-full transition-[width] ease duration-300
        ${router.asPath === href ? "w-full" : "w-0"}
        dark:bg-dark `}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className=" w-full px-32 py-8 font-medium flex items-center justify-between
    dark:text-light relative
    "
    >
      <button
        className="flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition=all duration-300 ease-out h-0.5 w-6  -translate-y-0.5
        ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}
        `}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition=all duration-300 ease-out h-0.5 w-6 my-0.5 ${
            isOpen ? "opacity-0" : "opacity - 100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition=all duration-300 ease-out h-0.5 w-6 translate-y-0.5 
         ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}
        `}
        ></span>
      </button>
      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="about" className="mx-4" />
          <CustomLink href="/Portfolio" title="Portfolio" className="mx-4" />
          {/* <CustomLink href="/articles" title="Articles" className="ml-4" /> */}
        </nav>

        <nav className="flex align-items-center justify-content-center flex-wrap ">
          <motion.a
            href="https://www.facebook.com/basbhai"
            target={"_blank"}
            className="mr-4 text-blue-500 text-3xl"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaFacebook />
          </motion.a>
          <motion.a
            href="https://github.com/basbhai"
            target={"_blank"}
            className="mx-4 text-black-500 text-3xl"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.youtube.com/channel/UCWeOMz6B427vD40SUS-894g"
            target={"_blank"}
            className="mx-4 text-red-500 text-3xl"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaYoutube />
          </motion.a>
          <motion.a
            href="/"
            target={"_blank"}
            className="mx-4 text-black-500 text-3xl"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaSquareXTwitter />
          </motion.a>
          <motion.button
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-1 flex items-center justify-center rounded-full p-1 text-3xl 
          ${mode === "light" ? " text-light" : "bg-light text-dark"}
          `}
          >
            {mode === "dark" ? (
              <IoSunnyOutline className={" fill-light"} />
            ) : (
              <FaMoon className={"fill-dark"} />
            )}
          </motion.button>
        </nav>
      </div>
      {/* 
      Mobile Nav Links */}

      {isOpen ? (
        <div
          className="min-w-[70vw] flex flex-col justify-between z-30  items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32 dark:text-dark text-light
      "
        >
          <nav className="flex items-center flex-col justify-center capitalize">
            <CustomMobileLink
              href="/"
              title="Home"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title="about"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/Portfolio"
              title="Portfolio"
              className=""
              toggle={handleClick}
            />
            {/* <CustomLink href="/articles" title="Articles" className="ml-4" /> */}
          </nav>

          <nav className="flex align-items-center justify-content-center flex-wrap ">
            <motion.a
              href="https://www.facebook.com/basbhai"
              target={"_blank"}
              className="mr-4 text-blue-500 text-3xl"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaFacebook />
            </motion.a>
            <motion.a
              href="https://github.com/basbhai"
              target={"_blank"}
              className="mx-4 text-black-500 text-3xl"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.youtube.com/channel/UCWeOMz6B427vD40SUS-894g"
              target={"_blank"}
              className="mx-4 text-red-500 text-3xl"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaYoutube />
            </motion.a>
            <motion.a
              href="/"
              target={"_blank"}
              className="mx-4 text-black-500 text-3xl"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaSquareXTwitter />
            </motion.a>
            <motion.button
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`ml-1 flex items-center justify-center rounded-full p-1 text-3xl 
          ${mode === "light" ? " text-light" : "bg-light text-dark"}
          `}
            >
              {mode === "dark" ? (
                <IoSunnyOutline className={" fill-light"} />
              ) : (
                <FaMoon className={"fill-dark"} />
              )}
            </motion.button>
          </nav>
        </div>
      ) : null}

      <div
        className="absolute px-4 left-[50%] top-2 translate-x-[-50%]"
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.9 }}
      >
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;

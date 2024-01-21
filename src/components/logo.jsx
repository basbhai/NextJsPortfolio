import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const logo = () => {
  return (
    <div>
      <MotionLink
        href="/"
        className="w-16 h-16 bg-dark text-light 
        flex items-center justify-center 
        rounded-full text-2xl font-bold border border-solid border-transparent dark:border-light
        "
        whileHover={{
          backgroundColor: [
            "#121212",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
          ],
          transition: { duration: 1, repeat: Infinity },
          scale: 1.2,
        }}
      >
        BS
      </MotionLink>
    </div>
  );
};

export default logo;
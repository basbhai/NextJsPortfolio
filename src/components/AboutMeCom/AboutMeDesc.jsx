import React from "react";
import AnimatedText from "../animatedText";
import { aboutData, stat } from "../data";
import { motion } from "framer-motion";

const AboutMeDesc = () => {
  return (
    <>
      <div className="flex flex-col items-start justify-start my-4">
        <h2 className="mb-5 text-2xl underline underline-offset-8 font-bold uppercase text-dark/75 dark:text-light/75 lg:text-xl md:text-base ">
          About Me
        </h2>
        {aboutData.map((details, index) => (
          <motion.p
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
            className={`font-normal   ${
              index === 0
                ? "first-letter:text-3xl first-letter:text-primary dark:first-letter:text-primaryDark"
                : ""
            }   text-xl  my-4 text-dark dark:text-light sm:text-sm`}
            key={index}
          >
            {details.content}
          </motion.p>
        ))}
      </div>
    </>
  );
};

export default AboutMeDesc;

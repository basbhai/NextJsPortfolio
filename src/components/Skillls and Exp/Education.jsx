import React, { useRef } from "react";
import { Edu } from "../data";
import { useScroll, motion } from "framer-motion";
import LiIcon from "../LiIcon";
import Footer from "../footer";

const Details = ({ passOutYear, Instution, Degree, percentage, Board }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8  w-[70%] mx-auto flex flex-col
      items-start justify-between border-b border-dark dark:border-light border-solid pb-2
      md:w-4/5 sm:text-xl xs:text-lg
      "
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl text-dark dark:text-light sm:text-xl">
          {Degree} <br />
          <span className="text-primary dark:text-primaryDark">
            {percentage}
          </span>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm  ">
          {passOutYear} | {Instution}
        </span>
        <p className="font-medium w-full md:text-sm  text-dark dark:text-light">
          {Board}
        </p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  return (
    <div className="my-64 md:mt-16 md:mb-8">
      <h2 className="font-bold text-8xl mb-24 w-full text-center md:text-6xl xs:text-4xl md:mb-16 dark:text-light">
        Education
      </h2>
      <div
        ref={ref}
        className="w-[75%] mx-auto relative pb-8 lg:w-[90%] md:w-full"
      >
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute top-0 left-9 w-[4px] h-full bg-dark dark:bg-light origin-top  md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        {/* //passOutYear, Instution, Degree, percentage, Board  */}
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          {Edu.map((Education, index) => (
            <Details
              key={index}
              passOutYear={Education.year}
              Instution={Education.institution}
              Degree={Education.degree}
              percentage={Education.percentage}
              Board={Education.board}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Education;

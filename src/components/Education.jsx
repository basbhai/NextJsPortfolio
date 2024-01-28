import React, { useRef } from "react";
import { Edu } from "./data";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";
import Footer from "./footer";

const Details = ({ passOutYear, Instution, Degree, percentage, Board }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8  w-[70%] mx-auto flex flex-col
    items-start justify-between border-b border-dark border-solid dark:border-light pb-2"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">
          {Degree}&nbsp;-{percentage}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 ">
          {passOutYear} | {Instution}
        </span>
        <p className="font-medium w-full">{Board}</p>
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
    <div className="my-16 h-screen">
      <h2 className="font-bold text-8xl mb-24 w-full text-center">Education</h2>
      <div ref={ref} className="w-[75%] mx-auto relative pb-8">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute top-0 left-9 w-[4px] h-full bg-dark dark:bg-light origin-top"
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

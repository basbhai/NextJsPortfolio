import React, { useRef } from "react";
import { Exp } from "../data";
import { useScroll, motion } from "framer-motion";
import LiIcon from "../LiIcon";
import Footer from "../footer";

const Details = ({ position, company, companyLink, time, address, work }) => {
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
          {position}&nbsp; <br />
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:primaryDark capitalize sm:text-base"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm  ">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm  text-dark dark:text-light">
          {work}
        </p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  return (
    <>
      <div className="my-64 md:mt-16 md:mb-8">
        <h2 className="font-bold text-8xl mb-24 w-full text-center md:text-6xl xs:text-4xl md:mb-16 dark:text-light">
          Experiences
        </h2>
        <div
          ref={ref}
          className="w-[75%] mx-auto relative pb-8 lg:w-[90%] md:w-full"
        >
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute top-0 left-9 w-[4px] h-full bg-dark dark:bg-light origin-top  md:w-[2px] md:left-[30px] xs:left-[20px]"
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
            {Exp.map((experience, index) => (
              <Details
                key={index}
                position={experience.title}
                company={experience.company}
                time={experience.time}
                address={experience.location}
                work={experience.jd}
                companyLink={experience.website}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Experience;

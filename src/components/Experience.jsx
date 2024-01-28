import React, { useRef } from "react";
import { Exp } from "./data";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";
import Footer from "./footer";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8  w-[70%] mx-auto flex flex-col
    items-start justify-between border-b border-dark dark:border-light border-solid pb-2"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;{" "}
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 ">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <>
      <div className="my-64">
        <h2 className="font-bold text-8xl mb-24 w-full text-center">
          Experiences
        </h2>
        <div ref={ref} className="w-[75%] mx-auto relative pb-8">
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute top-0 left-9 w-[4px] h-full bg-dark dark:bg-light origin-top"
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4">
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

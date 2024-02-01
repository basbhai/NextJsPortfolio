import React from "react";
import { motion } from "framer-motion";
import Layout from "../layout";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full
      font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute capitalize
      dark:bg-light dark:text-dark
      lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px3 xs:bg-transparent xs:dark:bg-transparent
      xs:text-dark xs:dark:text-light xs:font-bold xs:text-xs

      "
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <div
      className="w-full h-screen   flex items-center justify-center rounded-full
      bg-circularLightSm  dark:bg-circularDarkSm   translate-x-0
    
     
    
      "
    >
      <motion.div
        className="flex items-center justify-center rounded-full
        font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer absolute text-wrap 
        dark:bg-light dark:text-dark dark:shadow-light lg:p-6 md:p-4 xs:text-xs xs:p-2 
        "
        whileHover={{ scale: 1.05 }}
      >
        Web
      </motion.div>
      <Skill name="JavaScript" x="-4vw" y="-4vw" />
      <Skill name="ReactJs" x="10vw" y="2vw" />
      <Skill name="NextJs" x="-5vw" y="-10vw" />
      <Skill name="NodeJs" x="5vw" y="16vw" />
      <Skill name="HTML" x="20vw" y="6vw" />
      <Skill name="Web Development" x="17vw" y="-11vw" />
      <Skill name="MSSQL" x="10vw" y="-5vw" />
      <Skill name="CSS" x="0vw" y="13.5vw" />
      <Skill name="JQuery" x="-10vw" y="10vw" />
      <Skill name="C#" x="-15vw" y="-12vw" />
      <Skill name="Blazor" x="-20vw" y="0vw" />
      <Skill name="Asp.Net Core" x="-15vw" y="18vw" />
    </div>
  );
};

export default Skills;

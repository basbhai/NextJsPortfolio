import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full
      font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute capitalize
      dark:bg-light dark:text-dark
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
    <div className="bg-light dark:bg-dark">
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
      <div
        className="w-full h-screen  flex items-center justify-center rounded-full
      bg-circularLight  dark:bg-circularDark
      
      "
      >
        <motion.div
          className="flex items-center justify-center rounded-full
        font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer absolute text-wrap 
        dark:bg-light dark:text-dark dark:shadow-light
        "
          whileHover={{ scale: 1.05 }}
        >
          Web Application
        </motion.div>
        <Skill name="JavaScript" x="20vw" y="6vw" />
        <Skill name="ReactJs" x="30vw" y="2vw" />
        <Skill name="NextJs" x="-5vw" y="-10vw" />
        <Skill name="NodeJs" x="5vw" y="-16vw" />
        <Skill name="HTML" x="20vw" y="6vw" />
        <Skill name="Web Development" x="15vw" y="15vw" />
        <Skill name="MSSQL" x="10vw" y="-5vw" />
        <Skill name="CSS" x="0vw" y="13.5vw" />
        <Skill name="JQuery" x="-20vw" y="-15vw" />
        <Skill name="C#" x="15vw" y="-12vw" />
        <Skill name="Blazor" x="-20vw" y="0vw" />
        <Skill name="Asp.Net Core" x="-15vw" y="18vw" />
      </div>
    </div>
  );
};

export default Skills;

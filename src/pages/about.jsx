import AboutMeDesc from "@/components/AboutMeCom/AboutMeDesc";
import ProfilePic from "@/components/AboutMeCom/ProfilePic";
import Layout from "@/components/layout";
import React, { useRef } from "react";
import AnimatedText from "@/components/animatedText";
import Head from "next/head";
import Numbers from "@/components/AboutMeCom/Numbers";
import Skills from "@/components/Skillls and Exp/Skills";
import Experience from "@/components/Skillls and Exp/Experience";
import Education from "@/components/Skillls and Exp/Education";
import ProgressBar from "@/components/Skillls and Exp/progressBar";
import { headerData } from "@/components/data";

const About = () => {
  return (
    <>
      <Head>
        <title>{headerData[0].about.title}</title>
        <meta name="description" content={headerData[0].about.desc}></meta>
      </Head>
      <main
        className="flex  flex-col items-center
    justify-center w-[100%] "
      >
        <Layout className="w-[100%]   ">
          <AnimatedText
            text="Purpose gives passion wings to soar where eyes can’t see!! "
            className="mb-12 pt-32 lg:!text-6xl md:!text-5xl sm:!text-4xl xs:!text-3xl md:pt-16 sm:!pt-20 
            sm:mb-5"
          />

          <div className="flex flex-row items-start bg-transparent z-0 justify-start !p-0 w-full relative lg:flex-col lg:items-center">
            {/* about me paragraphs paragraphs */}
            <div className="basis-1/2 flex flex-col ml-2 px-8 lg:basis-full lg:p-8 lg:order-2">
              <AboutMeDesc />
            </div>
            {/* 
        for picture */}
            <div className="basis-1/3 w-full h-auto flex items-center justify-between">
              <div className="w-[85%] h-auto m-8 p-5 rounded-2xl border-2 -z-155 relative  border-solid border-dark dark:border-light bg-light">
                <ProfilePic />
                <div
                  className="absolute top-0 -right-4 z-[-1] w-[103%] h-[103.5%] rounded-[2rem] bg-dark dark:bg-light/50
          border-2 border-solid border-light "
                />
              </div>
            </div>
            {/* Side numbers  */}
            <div className=" basis-1/6 flex flex-col items-end pr-10 justify-between lg:flex-row lg:items-baseline lg:basis-full lg:order-3">
              <Numbers />
            </div>
          </div>
          <h2 className="font-bold text-8xl mb-24 pt-16 w-full text-center md:text-6xl xs:text-4xl md:mb-16 dark:text-light">
            Skills
          </h2>
          <div className="flex items-center justify-center">
            <div className="w-[90%] flex flex-row  !items-center !justify-between  lg:flex-col lg:w-full">
              <div className="basis-1/2 lg:order-2 lg:hidden ">
                <Skills />
              </div>
              <div className="basis-1/2 lg:order-1 lg:basis-full w-full">
                <ProgressBar />
              </div>
            </div>
          </div>

          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default About;

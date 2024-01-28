import React, { useEffect, useRef } from "react";
import { headerData, aboutData, stat } from "@/components/data";
import AnimatedText from "@/components/animatedText";
import Layout from "@/components/layout";
import Image from "next/image";
//import Me from "../Assets/profile/AiMe.png";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

import Head from "next/head";

import Me from "../Assets/profile/AiMe.png";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return (
    <span
      ref={ref}
      className="inline-block text-5xl font-bold dark:text-light md:text-2xl md:flex-wrap"
    ></span>
  );
};

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
        <Layout className="pt-0 md:pt-16 sm:pt-8 z-0 ">
          <AnimatedText
            text="Passion Fuels Purpose "
            className="mb-12 lg:!text-6xl md:!text-5xl sm:!text-4xl xs:!text-3xl 
            sm:mb-7"
          />
          <div className="flex w-full flex-row lg:flex-col">
            <div className="basis-1/2 flex flex-col items-start justify-center lg:basis-full lg:order-2">
              <h2 className="mb-4  text-2xl underline underline-offset-8 font-bold uppercase text-dark/75 dark:text-light/75 lg:text-xl md:text-base ">
                About Me
              </h2>
              {aboutData.map((data, index) => (
                <p
                  className="font-medium my-4 text-dark dark:text-light md:text-sm"
                  key={index}
                >
                  {data.content}
                </p>
              ))}
            </div>
            <div className=" basis-1/3 h-max relative rounded-2xl flex items-center justify-center border-2 border-solid border-light bg-light lg:basis-full lg:order-1">
              <div
                className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light/50
          border-2 border-solid border-light "
              />
              <Image
                src={Me}
                alt="basbhai"
                className="w-full h-auto rounded-2xl bg-dark"
                priority
                sizes="(max-width:768px) 100vw,
          (max-width:1200px) 50vw,
          33vw"
              />
            </div>
            <div className="basis-1/6 flex relative flex-col items-end justify-between lg:basis-full lg:flex-row lg:items-baseline lg:place-content-evenly lg:order-3">
              {stat.map((data, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col items-center justify-end ${
                    index === 0 ? "pl-0" : ""
                  } ${index === stat.length - 1 ? "pr-0" : "pr-3"}`}
                >
                  <AnimatedNumbers value={data.no} />
                  <h2 className="text-2xl text-right text-dark dark:text-light md:text-sm">
                    {data.desc}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default About;

import Head from "next/head";
import React, { useEffect, useRef } from "react";
import { headerData, aboutData, stat } from "@/components/data";
import AnimatedText from "@/components/animatedText";
import Layout from "@/components/layout";
import Image from "next/image";
import Me from "../Assets/profile/AiMe.png";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skillls and Exp/Skills";
import Experience from "@/components/Skillls and Exp/Experience";
import Education from "@/components/Skillls and Exp/Education";

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
      className="inline-block text-5xl font-bold dark:text-light"
    ></span>
  );
};

const AboutTry = () => {
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
        <Layout className="pt-16 bg-amber-200 w-full">
          <AnimatedText
            text="Passion Fuels Purpose "
            className="mb-12 lg:!text-6xl md:!text-5xl sm:!text-4xl xs:!text-3xl 
            sm:mb-7"
          />
          <div className="grid w-full grid-cols-12 gap-16 sm:gap-8">
            <div className="col-span-6 flex flex-col items-start justify-start lg:col-span-12 lg:order-2">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75 ">
                About Me
              </h2>
              {aboutData.map((data, index) => (
                <p
                  className="font-medium my-4 text-dark dark:text-light"
                  key={index}
                >
                  {data.content}
                </p>
              ))}
            </div>
            <div
              className="col-span-4 relative h-max rounded-2xl border-2 border-soid border-dark
            bg-light  p-5 xl:col-span-6 lg:col-span-12 lg:order-1"
            >
              <div
                className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light/50
              border-2 border-solid border-light 
              "
              />
              <Image
                src={Me}
                alt="Basanta Shrestha"
                className=" w-full h-auto
                rounded-2xl bg-dark"
                priority
                sizes="(max-width:768px) 100vw,
              (max-width:1200px) 50vw,
              33vw"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-12 xl:flex-row  xl:items-baseline xl:place-content-evenly lg:order-3">
              {stat.map((fig, index) => (
                <div
                  key={index}
                  className="flex flex-col items-end justify-center pb-3 xl:col-span-3 xl:items-center xl:basis-1/4"
                >
                  <AnimatedNumbers value={fig.no} />
                  <h2 className="text-xl text-right font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center xl:basis-1/4">
                    {fig.desc}
                  </h2>
                </div>
              ))}
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default AboutTry;

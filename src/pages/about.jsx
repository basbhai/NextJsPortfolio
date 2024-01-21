import AnimatedText from "@/components/animatedText";
import Head from "next/head";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import React, { useRef, useEffect } from "react";
import Layout from "@/components/layout";
import Profile from "../Assets/profile/AiMe.png";
import Image from "next/image";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
// import PhotosPage from "@/components/Photopages";
// import FileList from "@/components/FileNames";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

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

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Basanta | About Page</title>
        <meta
          name="description"
          content=" Basanta Shrestha from Kamana Sewa Bikas Bank"
        />
      </Head>
      <main className="flex w-full flex-col items-center justify-center h-screen dark:bg-dark bg-light dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="Passion Fuels Propose!" className="mb-16" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light">
                About Me
              </h2>
              <p className="font-medium">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nesciunt deserunt, repellendus, similique debitis consequatur,
                praesentium nisi temporibus quod odit fuga optio natus dolorem
                excepturi quibusdam dolor modi veniam minima labore.
              </p>
              <p className="font-medium my-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nesciunt deserunt, repellendus, similique debitis consequatur,
                praesentium nisi temporibus quod odit fuga optio natus dolorem
                excepturi quibusdam dolor modi veniam minima labore.
              </p>
              <p className="font-medium">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nesciunt deserunt, repellendus, similique debitis consequatur,
                praesentium nisi temporibus quod odit fuga optio natus dolorem
                excepturi quibusdam dolor modi veniam minima labore.
              </p>
            </div>
            <div
              className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-light shadow-2xl p-8 dark:bg-dark dark:border-light
            "
            >
              <div
                className="absolute top-0 -right-3 -z-10 
                rounded-[2rem] bg-slate-700 dark:bg-slate-50"
              />
              <Image
                src={Profile}
                alt="Basbhai"
                className="w-full h-auto rounded-3xl bg-dark "
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={5} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/70 dark:text-light">
                  Clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={3} />
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/70  dark:text-light">
                  Projects Completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={1} />
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/70  dark:text-light">
                  Years of Exxperiences
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
          {/* <FileList /> */}
          {/* <PhotosPage /> */}
        </Layout>
      </main>
    </>
  );
};

export default about;

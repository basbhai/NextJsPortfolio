import React, { useRef, useEffect } from "react";
import { skills } from "../data";
import Layout from "../layout";
import { useMotionValue, useSpring, useInView, motion } from "framer-motion";

export const AnimatedNumbers = ({ value }) => {
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
  }, [springValue, value, ref]);

  return <span ref={ref}></span>;
};

const ProgressBar = () => {
  return (
    <div className="flex items-center justify-center p-8 md:p-0">
      <Layout className="!p-8 sm:!p-0 border-2 border-solid rounded-3xl border-dark w-full">
        {skills.map((data, i) => {
          return (
            <div
              key={i}
              className="flex flex-row justify-bottom items-center px-2 pt-5"
            >
              <div className="basis-1/4 font-bold italic text-dark dark:text-light  ">
                {data.name}
              </div>
              <div className="basis-3/4 pl-5 pt-5 ">
                <div className="h-2 bg-dark dark:bg-light  mb-6  overflow-visible">
                  <motion.div
                    className="relative self-center h-2 overflow-visible bg-primary dark:bg-primaryDark align-bottom"
                    id="progressbar"
                    initial={{ width: 0 }}
                    animate={{
                      width: `${data.value}%`,
                    }}
                    transition={{ duration: 2 }}
                  >
                    <div className="absolute top-[-30px] text-primary dark:text-primaryDark right-[8px] text-lg font-bold italic">
                      <AnimatedNumbers value={data.value} />%
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          );
        })}
      </Layout>
    </div>
  );
};

export default ProgressBar;

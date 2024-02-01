import React, { useEffect, useRef } from "react";
import { useInView, useSpring, useMotionValue } from "framer-motion";
import { stat } from "../data";

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

  return (
    <span
      ref={ref}
      className="inline-block text-5xl font-bold dark:text-light md:text-2xl md:flex-wrap"
    ></span>
  );
};

const Numbers = () => {
  return (
    <>
      {stat.map((data, index) => {
        return (
          <div
            key={index}
            className={`flex flex-col items-end lg:items-center py-9 justify-center  ${
              index === 0 ? "pl-0" : ""
            } ${index === stat.length - 1 ? "pr-0 pb-0" : "pr-3 "}`}
          >
            <AnimatedNumbers value={data.no} />
            <h2 className="text-2xl text-right text-dark dark:text-light md:text-sm">
              {data.desc}
            </h2>
          </div>
        );
      })}
    </>
  );
};

export default Numbers;

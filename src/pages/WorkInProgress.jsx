import React from "react";
import AnimatedText from "@/components/animatedText";

function WorkInProgress() {
  return (
    <div className="relative flex w-full h-full">
      <div className="mx-auto my-0 p-4 bg-light text-dark dark:bg-dark dark:text-light rounded-md flex items-center  h-screen">
        <AnimatedText
          text="Comming Soon....."
          className=" capitalize text-8xl md:text-xl"
        />
      </div>
    </div>
  );
}

export default WorkInProgress;

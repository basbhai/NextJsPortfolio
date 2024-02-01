import React from "react";

const layout = ({ children, className = "" }) => {
  return (
    <div
      className={`w-full h-full inline-block z-0 bg-light p-15 lg:pt-20 md:pt-[7rem]  dark:bg-dark ${className} xl:p-24 sm:p-3 lg:p-10`}
    >
      {children}
    </div>
  );
};

export default layout;

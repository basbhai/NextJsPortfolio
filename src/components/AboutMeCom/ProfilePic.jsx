import React from "react";
import Image from "next/image";
import Me from "../../Assets/profile/AiMe.png";

const ProfilePic = () => {
  return (
    <>
      <Image
        src={Me}
        alt="basbhai"
        className="w-full h-auto rounded-2xl bg-dark z-10 hover:scale-2"
        priority
      />
    </>
  );
};

export default ProfilePic;

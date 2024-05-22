import { FooterURLs } from "@/util/urls";
import React from "react";
import Image from "next/legacy/image";
import Socials from "./Socials";
const RightsPart = () => {
  return (
    <div class=" grid h-full grid-cols-1 items-center justify-center gap-y-20 bg-black py-4 md:grid-cols-3">
      
      {/* <div className=" relative mx-12 flex h-[45px] items-center justify-center lg:h-[65px] 2xl:h-[115px]">
        <Image
          src={FooterURLs.logo}
          blurDataURL={FooterURLs.logoBlur}
          alt="logo"
          layout="fill"
          width={30}
        />
      </div> */}
      {/* <Socials /> */}
    </div>
  );
};

export default RightsPart;

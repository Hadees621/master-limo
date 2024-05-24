"use client";
import React from "react";
import Image from "next/legacy/image";
import { FleetBannerURL, homeURL } from "@/util/urls";
import { ourFleetBannerText } from "@/util/para";

const Hero = () => {
  return (
    <>
      <div className="relative h-[200px] w-full md:h-[350px] lg:h-[420px] xl:h-[550px] 2xl:h-[950px]">
        <Image
          src={homeURL.estd}
          blurDataURL={homeURL.estdBlur}
          alt=""
          layout="fill"
          objectFit="cover"
          objectPosition="center bottom"
        />
        <div className="absolute left-0 top-0 hidden h-[20%] w-full bg-gradient-to-b from-black to-transparent lg:block lg:h-[35%] xl:h-[40%] 2xl:h-[45%] "></div>
      </div>

      <div className="z-50 -mt-10 flex w-full flex-col items-center bg-black md:flex-row">
        <div className="flex w-full justify-center md:w-[45%] 1024:flex-[45%] 1440:flex-[38%] 2xl:flex-[40%] 2xl:justify-center">
          <div className="flex flex-col px-12 text-center md:px-8 md:pb-6 1024:px-11 lg:text-left ">
            <h1 className="font-Leaguespartan text-[40px] font-[700] text-white md:text-[47px] 1024:text-[65px] 1440:text-[80px] 2xl:text-[100px]">
              {ourFleetBannerText.title}
            </h1>
            <p className="font-Archivo text-[10px] leading-[12.8px] text-white md:text-[13px] md:leading-[14.5px] 1024:text-[15px] 1024:leading-[17px] lg:pr-12 lg:text-left 1440:text-[21px] 1440:leading-[21px] 2xl:text-[30px] 2xl:leading-[30px]">
              {ourFleetBannerText.textContent}
            </p>
          </div>
        </div>
        <div className="w-full py-5 md:mr-4 md:flex-[60%] 1024:mr-8 1024:flex-[55%] 1440:flex-[62%] 2xl:flex-[60%]">
          <div className="flex flex-col justify-center px-5 md:flex-row">
            <div className="relative h-[177px] w-full md:h-[85px] 1024:h-[110px] 1440:h-[145px] 2xl:h-[200px]">
              <Image
                src={FleetBannerURL.benz}
                blurDataURL={FleetBannerURL.benzblur}
                layout="fill"
                alt="fleet-banner"
              />
            </div>
            <div className=" relative h-[177px] w-full md:h-[85px] 1024:h-[110px] 1440:h-[145px] 2xl:h-[200px]">
              <Image
                src={FleetBannerURL.ford}
                blurDataURL={FleetBannerURL.fordBLur}
                layout="fill"
                alt="fleet-banner"
              />
            </div>
            <div className="  relative h-[177px] w-full md:h-[85px] 1024:h-[110px] 1440:h-[145px] 2xl:h-[200px]">
              <Image
                src={FleetBannerURL.chev}
                blurDataURL={FleetBannerURL.chevBLur}
                layout="fill"
                alt="fleet-banner"
              />
            </div>
          </div>
          <div className="flex w-full flex-col justify-center md:flex-row md:px-12 lg:px-24 2xl:px-56">
            <div className=" relative h-[177px] w-full md:h-[85px] 1024:h-[110px] 1440:h-[145px] 2xl:h-[200px]">
              <Image
                src={FleetBannerURL.caddilac}
                blurDataURL={FleetBannerURL.callilacBlur}
                layout="fill"
                alt="fleet-banner"
              />
            </div>
            <div className=" relative h-[177px] w-full md:h-[85px] 1024:h-[110px] 1440:h-[145px] 2xl:h-[200px]">
              <Image
                src={FleetBannerURL.linc}
                blurDataURL={FleetBannerURL.lincBLur}
                layout="fill"
                alt="fleet-banner"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

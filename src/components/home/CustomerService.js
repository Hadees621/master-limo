/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { homeURL } from "@/util/urls";
import ServiceCard from "./ServiceCard";
import Polygons from "../common/Polygons";
import { archivo300, libre400, montserrat500 } from "@/util/fonts";
import Reservation from "../common/Reservation";

function CustomerService() {
  const LibreBaskerville = libre400;
  const services = [
    {
      topText: "Exceptional customer service",
      src: homeURL.CustomerService,
      blurSrc: homeURL.CustomerServiceBlur,
      bottomText:
        "Masterpiece Limousine is dedicated to providing our clients with the highest level of service, ensuring a smooth an enjoyable transportation experience.",
    },
    {
      topText: "Reliability",
      src: homeURL.Reliability,
      blurSrc: homeURL.ReliabilityBlur,
      bottomText:
        "We are committed to being punctual and dependable, ensuring our clients arrive at their destination on time and with minimal stress.",
    },
    {
      topText: "Safety",
      src: homeURL.Safety,
      blurSrc: homeURL.SafetyBlur,
      bottomText:
        "The safety of our clients is our top priority. We only hire qualified and experienced chauffeurs trained in safe driving practices and knowledgeable about the Southern California region.",
    },
  ];
  return (
    <div className="relative">
      <div className="mb-32 mt-12 flex w-full flex-col items-center justify-center px-10 sm:block sm:whitespace-nowrap smMd:px-16 lg:my-32">
        {services.map((service, idx) => {
          return <ServiceCard key={idx} {...service} />;
        })}
        <Polygons
          active={3}
          classes={`absolute 2lg:right-4 sm:right-5 xxs:right-3 right-1 3xxlg:top-[50%] xl:top-[53%] 2lg:top-[58%] smMd:top-[60%] sm:top-[61%] xs:top-[65%] top-[68%] translate-y-[-50%] z-[2]  flex flex-col`}
        />
      </div>
      {/*  */}
      <div className="top-[200px] -z-10 mt-32 smMd:top-[47px] 2lg:-top-[200px] xl:-top-[280px] xxlg:-top-[338px]">
        <img
          src="/images/service_banner.png"
          alt=""
          srcset=""
          className="h-full w-full object-cover pt-32"
        />
        <div
          className="absolute left-2 w-[90%] px-5 375:bottom-[225px] 425:bottom-[220px] md:bottom-[380px] md:left-6 smMd:w-[560px] lg:bottom-[450px] xl:bottom-[550px] xxlg:w-[813px] 2xl:bottom-[1000px] 2xl:left-20"
          data-aos="fade-up"
        >
          <h1
            className={`text-[25px] text-white xxs:text-[30px] smMd:text-[40px] xxlg:text-[60px] ${LibreBaskerville}`}
          >
            Don&apos;t settle for anything less than the best!
          </h1>
          <p
            className={`text-xs text-white smMd:text-sm xxlg:text-base ${archivo300} mt-3`}
          >
            Elevate your next event with the ultimate experience of luxury,
            safety, and reliability with Masterpiece Limousine. Our exceptional
            customer service and affordable prices are unmatched, making every
            trip unforgettable. Whether it&apos;s a wedding, corporate event, or
            a night out on the town, we&apos;ve got you covered. Don&apos;t wait
            any longer; contact us today and book your luxury transportation!
          </p>

          <div className="top-10 mt-10 w-full justify-center">
            <Reservation title={"RESERVE NOW"} dim={"w-[200px]"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerService;

/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FLEET } from "@/util/para";
import { homeURL } from "@/util/urls";
import * as fonts from "@/util/fonts";
import Image from "next/legacy/image";
import { RightArrow } from "@/assets/icons";

function Fleet() {
  const Archivo = fonts.archivo300;
  const Montserrat = fonts.montserrat400;
  const LeagureSpartan = fonts.leagueSpartan700;

  const slider = [
    { bottomText: "LIMO BUS", topText: "Mercedes Sprinter Limousine" },
    { bottomText: "LIMO", topText: "Luxury Stretch Limousine" },
    { bottomText: "LIMO", topText: "Mercedes Sprinter Executive" },
    { bottomText: "LIMO BUS", topText: "Executive SUV" },
  ];

  const sliderThumbnail = `group relative inline-block transition-all duration-700 ease-out xxlg:h-[600px] h-[400px] w-44 hover:w-52 md:w-52 md:hover:w-80 lg:w-[250px] lg:hover:w-[300px] xl:hover:w-[600px] xl:w-[400px] 2xl:w-[650px] 2xl:hover:w-[750px]`;
  const rowPara = `w-auto text-center xxlg:text-base text-xs leading-[1.1] text-[#e7e2e2] sm:w-[80%] md:w-1/2 ${Archivo}`;
  const rowHeading = `text-[40px] text-white sm:text-[60px]  md:w-1/2 md:text-[80px] ${LeagureSpartan}`;
  const lastRow = `cursor-pointer xxlg:text-base text-xs xxs:tracking-[10px] tracking-[5px] text-white sm:text-sm ${Montserrat}`;

  const Thumbnail = ({ idx, bottomText }) => {
    const utils = `absolute bottom-1 left-2 xxlg:text-base text-sm tracking-[8px] text-white ${Montserrat}`;
    return (
      <>
        <Image
          src={homeURL[`fleet${idx + 1}`]}
          alt=""
          layout="fill"
          objectFit="cover"
          blurDataURL={homeURL[`fleet${idx + 1}Blur`]}
          objectPosition="top"
          className="h-ful w-full object-cover object-top"
        />
        <h1 class={utils}>{bottomText}</h1>
      </>
    );
  };

  return (
    <>
      {/* the row  */}
      <div className="mb-10 flex flex-col items-center px-6 sm:px-10 md:mb-1 md:flex-row">
        <h1 className={rowHeading}>THE FLEET</h1>
        <p className={rowPara}>{FLEET}</p>
      </div>

      {/* the slider  */}
      <div class="no-scrollbar mb-4 w-auto overflow-scroll whitespace-nowrap">
        {slider.map((_, idx) => {
          return (
            <div key={idx} class={sliderThumbnail}>
              <div class="absolute z-[1] h-full w-full bg-gradient-to-b from-blue-400 via-transparent to-transparent "></div>
              <Thumbnail idx={idx} {..._} />
            </div>
          );
        })}
      </div>

      {/* the row */}
      <div class="flex items-center justify-between px-5 xxs:justify-end">
        <h1 className={lastRow}>
          <a href="/ourfleet"> VIEW ENTIRE FLEET</a>
        </h1>
        <RightArrow width={20} height={20} />
      </div>
    </>
  );
}

export default Fleet;

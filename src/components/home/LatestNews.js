/* eslint-disable @next/next/no-img-element */
import React from "react";
import { News } from "@/util";
import { RightArrow } from "@/assets/icons";
import { montserrat400 } from "@/util/fonts";
import { NewsCard } from "@/components/common";
import Link from "next/link";

function LatestNews() {
  const Montserrat = montserrat400;

  const primaryHeading = `mx-2 text-sm uppercase xs:tracking-[10px] tracking-[3px] text-[#a9a8a7] ${Montserrat}`;

  const NavArrows = () => {
    return (
      <div className="flex w-[46px] items-center justify-center">
        <span className="rotate-180">
          <RightArrow width={23} height={25} />
        </span>
        <RightArrow width={23} height={25} />
      </div>
    );
  };

  return (
    <div className="relative h-[450px] px-3 sm:px-14 lg:h-[700px]">
      <div className="flex justify-between lg:pr-52">
        <h1 className={primaryHeading}>Catch up on all the latest news</h1>
        <NavArrows />
      </div>

      <div class="no-scrollbar ml-2 mt-10 overflow-scroll whitespace-nowrap lg:w-[81%]">
        {News.map((_, idx) => {
          return (
            <Link href={`/blog/${_.id}`} key={idx}>
              <NewsCard {..._} idx={idx} width={true} />;
            </Link>
          );
        })}
      </div>
      {/* <div class="no-scrollbar my-10 mb-32 ml-2 overflow-scroll whitespace-nowrap lg:w-[81%]">
        {News.map((_, idx) => {
          return (
            <Link href={`/blog/${_.id}`}>
              <NewsCard key={idx} {..._} idx={idx} width={true} />;
            </Link>
          );
        })}
      </div> */}
    </div>
  );
}

export default LatestNews;

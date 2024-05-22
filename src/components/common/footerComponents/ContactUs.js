import React from "react";
import Socials from "./Socials";
import Image from "next/legacy/image";
import { FooterURLs } from "@/util/urls";

const ContactUs = () => {
  return (
    <div className="flex flex-col gap-0 pr-4 text-center lg:text-start 2xl:text-center">
      <p className="font-Montserrat text-center text-[19px] font-[700] uppercase tracking-[3.6px] text-[#FFFFFF] lg:text-center">
        CONTACT
      </p>
      <p className="font-Archivo justify-center pt-5 text-[14px] font-[300] leading-[20.8px] text-[rgba(255,255,255,0.75)]">
        Address: 1426 Morena Blvd, San Diego, CA 92110
      </p>
      <div className="mt-3 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 1200 1200"
        >
          <path
            fill="rgba(255,255,255,0.75)"
            d="m1183.326 997.842l-169.187 167.83c-24.974 25.612-58.077 34.289-90.316 34.328c-142.571-4.271-277.333-74.304-387.981-146.215C354.22 921.655 187.574 757.82 82.984 559.832C42.87 476.809-4.198 370.878.299 278.209c.401-34.86 9.795-69.073 34.346-91.543L203.831 17.565c35.132-29.883 69.107-19.551 91.589 15.257l136.111 258.102c14.326 30.577 6.108 63.339-15.266 85.188l-62.332 62.3c-3.848 5.271-6.298 11.271-6.36 17.801c23.902 92.522 96.313 177.799 160.281 236.486c63.967 58.688 132.725 138.198 221.977 157.021c11.032 3.077 24.545 4.158 32.438-3.179l72.51-73.743c24.996-18.945 61.086-28.205 87.771-12.714h1.272l245.51 144.943c36.041 22.592 39.799 66.252 13.994 92.815z"
          />
        </svg>
        <p className="font-Archivo relative pl-3 text-[15px] font-[300] leading-[32.8px] tracking-wider text-[rgba(255,255,255,0.75)]">
          (858) 483-5466
        </p>
      </div>
      <div className="mt-2 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
        >
          <path
            fill="rgba(255,255,255,0.75)"
            d="M22 8.608v8.142a3.25 3.25 0 0 1-3.066 3.245L18.75 20H5.25a3.25 3.25 0 0 1-3.245-3.066L2 16.75V8.608l9.652 5.056a.75.75 0 0 0 .696 0zM5.25 4h13.5a3.25 3.25 0 0 1 3.234 2.924L12 12.154l-9.984-5.23a3.25 3.25 0 0 1 3.048-2.919zh13.5z"
          />
        </svg>
        <p className="font-Archivo pl-3 text-[15px] font-[300] leading-[32.8px] text-[rgba(255,255,255,0.75)]">
          Contact Us
        </p>
      </div>
      <div className="hidden lg:block">
        <div className="my-9 grid h-full w-full items-end justify-center gap-1 pr-3 md:justify-end 2xl:justify-start">
          <div className="py-1">
            <Socials />
          </div>
          <p class="font-Montserrat text-center text-[8px] font-semibold uppercase tracking-[1.5px] text-[#FFF] lg:text-[11px] 2xl:text-[19px]">
            © 2001 - 2023 Masterpiece Limousine
          </p>
          <div className="relative hidden h-[45px] w-56 items-center justify-end md:h-[45px] md:w-full lg:block lg:h-[65px] 2xl:h-[115px]">
            <Image
              src={FooterURLs.logo}
              blurDataURL={FooterURLs.logoBlur}
              alt="logo"
              layout="fill"
            />
          </div>
        </div>
      </div>

      <div />
    </div>
  );
};

export default ContactUs;

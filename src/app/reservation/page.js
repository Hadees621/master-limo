/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect } from "react";
import BackgroundBanner from "@/components/reservation/BackgroundBanner";

function Reservation() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://book.mylimobiz.com/v4/widgets/widget-loader.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex w-full items-center justify-center">
      <div className="w-full max-w-[1796px] px-5 py-24 md:px-20 md:py-32 lg:px-12 lg:py-32 xl:px-20 xl:py-40 2xl:py-32">
        <BackgroundBanner />
        <div className="flex w-full justify-center ">
          <a
            className="cursor-pointer"
            href="https://book.mylimobiz.com/v4/masterpiecelimo"
            data-ores-widget="website"
            data-ores-alias="masterpiecelimo"
          >
            Online Reservations
          </a>
          {/* <script
            type="text/javascript"
            src="https://book.mylimobiz.com/v4/widgets/widget-loader.js"
          >
          </script>
          */}
        </div>
      </div>
    </div>
  );
}

export default Reservation;

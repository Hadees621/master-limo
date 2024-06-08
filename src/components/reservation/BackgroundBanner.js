import { image_urls } from "@/util";
import Image from "next/legacy/image";
import React from "react";

function BackgroundBanner() {
  return (
    <Image
      src="https://res.cloudinary.com/ozecloud/image/upload/q_auto:best/v1700973067/f966bb205f8eea68663d865c0868bd02_m4ehqs.webp"
      alt=""
      layout="fill"
      className="absolute left-0 top-0 -z-10 h-full w-full object-cover object-top"
    />
  );
}

export default BackgroundBanner;

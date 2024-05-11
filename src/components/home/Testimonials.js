import { Quotes } from "@/assets/icons";
import React from "react";

const Testimonials = ({ ...test }) => {
  return (
    <div>
      <div
        className="bg mr-3 inline-block h-[300px] w-[400px] flex-none flex-col overflow-hidden whitespace-normal bg-gray-800 bg-opacity-70 p-5 transition-all"
        style={{
          overflowY: "scroll",
          overflowX: "hidden",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <div className="relative flex items-end justify-between">
          <div className="h-14 w-14 overflow-hidden rounded-full bg-white transition-all"></div>
          <div className="h-1 w-80 bg-white transition-all"></div>
          <div className="absolute right-0 mb-3">
            <Quotes width={40} height={40} />
          </div>
        </div>
        <div className="overflow-y-auto">
          <p
            className={`my-5 text-start text-[11px] text-white lg:text-[12px] xxlg:text-lg`}
          >
            {test.text}
          </p>
        </div>
        <div className="flex items-center justify-end">
          <p
            className={`text-[10px] text-[#FAC30F] transition-all xxlg:text-[12px]`}
          >
            {test.name}
          </p>
          <div className="ml-4 h-1 w-40 bg-white transition-all"></div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

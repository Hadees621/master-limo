/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import {
  ButtonsRow,
  StepOneContent,
  StepThreeContent,
  StepTwoContent,
} from "@/components/reservation";
import BackgroundBanner from "@/components/reservation/BackgroundBanner";
import Header from "@/components/reservation/Header";

function Reservation() {
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    // Load the third-party script
    const script = document.createElement("script");
    script.src = "https://book.mylimobiz.com/v4/widgets/widget-loader.js";
    script.async = true;
    document.body.appendChild(script);

    // Clean up the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="relative flex w-full items-center justify-center">
      <div className="mb-32 w-full max-w-[1796px] px-5 pt-52 sm:mb-0 sm:px-10 md:px-16 xl:px-52">
        <BackgroundBanner />
        {/* Embed the reservation widget */}
        <div className="mt-12 mb-20 flex justify-center">
          <a
            href="https://book.mylimobiz.com/v4/masterpiecelimo"
            data-ores-widget="website"
            data-ores-alias="masterpiecelimo"
          >
            Online Reservations
          </a>
        </div>
      </div>
    </div>
  );
}

export default Reservation;

// /* eslint-disable @next/next/no-img-element */

// "use client";
// import {
//   ButtonsRow,
//   StepOneContent,
//   StepThreeContent,
//   StepTwoContent,
// } from "@/components/reservation";
// import BackgroundBanner from "@/components/reservation/BackgroundBanner";
// import Header from "@/components/reservation/Header";
// import React, { useState } from "react";

// function Reservation() {
//   const [activeTab, setActiveTab] = useState(1);

//   return (
//     <div className="relative  flex w-full items-center justify-center">
//       <div className="  mb-32 w-full    max-w-[1796px] px-5 pt-52 sm:mb-0 sm:px-10 md:px-16 xl:px-52">
//         <BackgroundBanner />

//         <ButtonsRow />
//         {/* STEP 1  */}
//         <div className="z-50 mb-5 mt-5 w-full">
//           {/* Header  */}
//           <Header
//             title="STEP 1 - RIDE INFORMATION"
//             activeTab={activeTab}
//             onClick={() =>
//               activeTab === 1 ? setActiveTab(-1) : setActiveTab(1)
//             }
//           />

//           {/* Content  */}
//           <StepOneContent activeTab={activeTab} />
//         </div>

//         {/* STEP 2  */}
//         <div className="mb-5 mt-5 w-full">
//           {/* Header  */}
//           <Header
//             title="STEP 2 - SELECT VEHICLE"
//             activeTab={activeTab}
//             onClick={() =>
//               activeTab === 2 ? setActiveTab(-1) : setActiveTab(2)
//             }
//           />
//           {/* Content  */}
//           <StepTwoContent activeTab={activeTab} />
//         </div>

//         {/* STEP 3  */}
//         <div className="mb-5 mt-5 w-full">
//           {/* Header  */}
//           <Header
//             title="STEP 3 - FINAL DETAILS"
//             activeTab={activeTab}
//             onClick={() =>
//               activeTab === 3 ? setActiveTab(-1) : setActiveTab(3)
//             }
//           />

//           {/* Content  */}
//           <StepThreeContent activeTab={activeTab} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Reservation;

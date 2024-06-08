// "use client";
// /* eslint-disable @next/next/no-img-element */
// import React, { useEffect, useState } from "react";
// import BackgroundBanner from "@/components/reservation/BackgroundBanner";

// function Reservation() {
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true);

//     // Ensure the widget loader script is added and initialized
//     const script = document.createElement("script");
//     script.src = "https://book.mylimobiz.com/v4/widgets/widget-loader.js";
//     script.async = true;
//     script.onload = () => {
//       // Ensure the widget is initialized after the script is loaded
//       if (window.oresWidgetLoader) {
//         window.oresWidgetLoader.init();
//       } else {
//         console.error("Widget loader is not available on window");
//       }
//     };
//     script.onerror = () => {
//       console.error("Error loading the widget script");
//     };
//     document.body.appendChild(script);

//     // Clean up the script when the component is unmounted
//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <div className="relative flex w-full items-center justify-center">
//       <div className="mb-32 w-full max-w-[1796px] px-5 pt-52 sm:mb-0 sm:px-10 md:px-16 xl:px-52">
//         <BackgroundBanner />
//         <div>
//           <a
//             href="https://book.mylimobiz.com/v4/masterpiecelimo"
//             data-ores-widget="quickres"
//             data-ores-alias="masterpiecelimo"
//             data-redirect-url="{redirect_url}"
//           >
//             Online Reservations
//           </a>
//         </div>
//         <script
//           type="text/javascript"
//           src="https://book.mylimobiz.com/v4/widgets/widget-loader.js"
//         ></script>
//       </div>
//     </div>
//   );
// }

// /* eslint-disable @next/next/no-img-element */
// "use client";
// import React from "react";
// import BackgroundBanner from "@/components/reservation/BackgroundBanner";

// function Reservation() {
//   return (
//     <div className="relative flex w-full items-center justify-center">
//       <div className="mb-32 w-full max-w-[1796px] px-5 pt-52 sm:mb-0 sm:px-10 md:px-16 xl:px-52">
//         <BackgroundBanner />
//       </div>
//     </div>
//   );
// }

// export default Reservation;

// /* eslint-disable @next/next/no-img-element */
// "use client";
// import React, { useState, useEffect } from "react";
// import {
//   ButtonsRow,
//   StepOneContent,
//   StepThreeContent,
//   StepTwoContent,
// } from "@/components/reservation";
// import BackgroundBanner from "@/components/reservation/BackgroundBanner";
// import Header from "@/components/reservation/Header";

// function Reservation() {
//   const [activeTab, setActiveTab] = useState(1);

//   useEffect(() => {
//     // Create a script element
//     const script = document.createElement("script");
//     script.src = "https://book.mylimobiz.com/v4/widgets/widget-loader.js";
//     script.async = true;
//     script.onload = () => {
//       // Ensure the widget is initialized after the script is loaded
//       if (window.oresWidgetLoader) {
//         window.oresWidgetLoader.init();
//       }
//     };
//     document.body.appendChild(script);

//     // Clean up the script when the component is unmounted
//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <div className="relative flex w-full items-center justify-center">
//       <div className="mb-32 w-full max-w-[1796px] px-5 pt-52 sm:mb-0 sm:px-10 md:px-16 xl:px-52">
//         <BackgroundBanner />
//         {/* Embed the reservation widget */}
//         <div className="flex justify-center">
//           <a
//             href="https://book.mylimobiz.com/v4/masterpiecelimo"
//             data-ores-widget="website"
//             data-ores-alias="masterpiecelimo"
//           >
//             Online Reservations
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Reservation;

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
      <div className="w-full max-w-[1796px] px-5 py-24 md:py-32 md:px-20 lg:px-12 lg:py-32 xl:px-20 xl:py-40 2xl:py-32">
        <BackgroundBanner />
        <div className="flex w-full justify-center">
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

// // // /* eslint-disable @next/next/no-img-element */

// // // "use client";
// // // import {
// // //   ButtonsRow,
// // //   StepOneContent,
// // //   StepThreeContent,
// // //   StepTwoContent,
// // // } from "@/components/reservation";
// // // import BackgroundBanner from "@/components/reservation/BackgroundBanner";
// // // import Header from "@/components/reservation/Header";
// // // import React, { useState } from "react";

// // // function Reservation() {
// // //   const [activeTab, setActiveTab] = useState(1);

// // //   return (
// // //     <div className="relative  flex w-full items-center justify-center">
// // //       <div className="  mb-32 w-full    max-w-[1796px] px-5 pt-52 sm:mb-0 sm:px-10 md:px-16 xl:px-52">
// // //         <BackgroundBanner />

// // //         <ButtonsRow />
// // //         {/* STEP 1  */}
// // //         <div className="z-50 mb-5 mt-5 w-full">
// // //           {/* Header  */}
// // //           <Header
// // //             title="STEP 1 - RIDE INFORMATION"
// // //             activeTab={activeTab}
// // //             onClick={() =>
// // //               activeTab === 1 ? setActiveTab(-1) : setActiveTab(1)
// // //             }
// // //           />

// // //           {/* Content  */}
// // //           <StepOneContent activeTab={activeTab} />
// // //         </div>

// // //         {/* STEP 2  */}
// // //         <div className="mb-5 mt-5 w-full">
// // //           {/* Header  */}
// // //           <Header
// // //             title="STEP 2 - SELECT VEHICLE"
// // //             activeTab={activeTab}
// // //             onClick={() =>
// // //               activeTab === 2 ? setActiveTab(-1) : setActiveTab(2)
// // //             }
// // //           />
// // //           {/* Content  */}
// // //           <StepTwoContent activeTab={activeTab} />
// // //         </div>

// // //         {/* STEP 3  */}
// // //         <div className="mb-5 mt-5 w-full">
// // //           {/* Header  */}
// // //           <Header
// // //             title="STEP 3 - FINAL DETAILS"
// // //             activeTab={activeTab}
// // //             onClick={() =>
// // //               activeTab === 3 ? setActiveTab(-1) : setActiveTab(3)
// // //             }
// // //           />

// // //           {/* Content  */}
// // //           <StepThreeContent activeTab={activeTab} />
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default Reservation;

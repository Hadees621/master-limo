import NavigateList from "./footerComponents/NavigateList";
import ServiceList from "./footerComponents/ServiceList";
import FleetItems from "./footerComponents/FleetItems";
import AboutUs from "./footerComponents/AboutUs";
import ContactUs from "./footerComponents/ContactUs";
import RightsPart from "./footerComponents/RightsPart";
import Image from "next/legacy/image";
import { FooterURLs } from "@/util/urls";
import Socials from "./footerComponents/Socials";

export default function Footer() {
  return (
    <footer className="bg-[#16181A] pt-6">
      <div className="sm:align-items-center pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="lg:gap-x grid grid-cols-1 gap-y-10 sm:grid-cols-2 md:grid-cols-3 1024:grid-cols-5 lg:col-span-3 2xl:grid-cols-5">
            <AboutUs />

            <ServiceList />

            <FleetItems />

            <NavigateList />

            <ContactUs />

            <div className="grid h-full w-full items-start justify-center gap-6 lg:hidden">
              <Socials />
              <div className="relative hidden h-[45px] w-56 items-center justify-end md:flex md:h-[45px] md:w-full lg:hidden lg:h-[65px] 2xl:h-[115px]">
                <Image
                  src={FooterURLs.logo}
                  blurDataURL={FooterURLs.logoBlur}
                  alt="logo"
                  layout="fill"
                />
              </div>
              <p class="font-Montserrat text-end text-[8px] font-semibold uppercase tracking-[1.5px] text-[#FFF] lg:text-[11px] 2xl:text-[19px]">
                © 2001 - 2023 Masterpiece Limousine
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React from "react";
import { leagueSpartan700, libre400, montserrat400 } from "@/util/fonts";

const ContactForm = () => {
  return (
    <div class="mx-auto px-0 md:px-14 lg:px-36">
      <form className="grid space-y-12 bg-black text-white">
        <div class="relative mb-6 flex flex-col">
          <input
            type="text"
            className="w-full border-b bg-transparent pb-4"
            id="exampleInput90"
            placeholder="Topic"
          />
        </div>
        <div class="relative mb-6 flex flex-col justify-between xs:flex-row">
          <div className="mb-3 flex flex-col xs:mb-0 xs:w-[48%]">
            <input
              type="text"
              className="w-full border-b bg-transparent pb-4"
              id="exampleInput90"
              placeholder="First Name *"
            />
          </div>
          <div className="mb-3 flex flex-col xs:mb-0 xs:w-[48%]">
            <input
              type="text"
              className="w-full border-b bg-transparent pb-4"
              id="exampleInput90"
              placeholder="Last Name *"
            />
          </div>
        </div>
        <div class="relative mb-6 flex flex-col justify-between xs:flex-row">
          <div className="mb-3 flex flex-col xs:mb-0 xs:w-[48%]">
            <input
              type="text"
              className="w-full border-b bg-transparent pb-4"
              id="exampleInput90"
              placeholder="Phone *"
            />
          </div>
          <div className="mb-3 flex flex-col xs:mb-0 xs:w-[48%]">
            <input
              type="text"
              className="w-full border-b bg-transparent pb-4"
              id="exampleInput90"
              placeholder="Email *"
            />
          </div>
        </div>
        <div class="relative mb-6 flex">
          <div className="flex w-full flex-col">
            <div className="flex flex-col">
              <textarea
                name=""
                id=""
                cols="30"
                rows="4"
                className="border-b bg-transparent"
                placeholder="Message"
              ></textarea>
            </div>
          </div>
        </div>
        <button
          type="button"
          data-te-ripple-init
          data-te-ripple-color="light"
          class="hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 mt-10 inline-block w-full rounded bg-[#2189B7] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] lg:mb-0"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

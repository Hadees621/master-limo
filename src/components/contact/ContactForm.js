"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import { SendMail } from "@/services";
import InputField from "./InputField";
import SubmitButton from "./SubmitButton";
import ErrorMessage from "./ErrorMessage";

const ContactForm = () => {
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await SendMail(data);
      push("/");
    } catch (error) {
      alert("Please try again. Unable to proceed your request.");
    }
  };

  return (
    <div class="mx-auto px-0 md:px-14 lg:px-36">
      <form className="grid space-y-12 text-white">
        <div class="relative mb-6 flex flex-col">
          <InputField register={register} name="topic" />
          <ErrorMessage error={errors.topic} />
        </div>

        <div class="relative mb-6 flex flex-col justify-between xs:flex-row">
          <div className="mb-3 flex flex-col xs:mb-0 xs:w-[48%]">
            <InputField register={register} name="firstName" />
            <ErrorMessage error={errors.firstName} />
          </div>
          <div className="mb-3 flex flex-col xs:mb-0 xs:w-[48%]">
            <InputField register={register} name="lastName" />
            <ErrorMessage error={errors.lastName} />
          </div>
        </div>

        <div class="relative mb-6 flex flex-col justify-between xs:flex-row">
          <div className="mb-3 flex flex-col xs:mb-0 xs:w-[48%]">
            <InputField register={register} name="phone" />
            <ErrorMessage error={errors.phone} />
          </div>
          <div className="mb-3 flex flex-col xs:mb-0 xs:w-[48%]">
            <InputField register={register} name="email" />
            <ErrorMessage error={errors.email} />
          </div>
        </div>

        <div class="relative mb-6 flex">
          <div className="flex w-full flex-col">
            <div className="flex flex-col">
              <textarea
                {...register("message")}
                cols="30"
                rows="4"
                className="border-b bg-transparent focus:outline-none"
                placeholder="Message"
              />
            </div>
          </div>
        </div>
        <SubmitButton onClick={handleSubmit(onSubmit)} />
      </form>
    </div>
  );
};

export default ContactForm;

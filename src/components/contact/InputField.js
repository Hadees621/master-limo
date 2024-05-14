import React from "react";

const InputField = ({ name, register }) => {
  const fields = {
    topic: { ...register("topic"), placeholder: "Topic" },

    firstName: {
      ...register("firstName", {
        required: "First name is required.",
        pattern: /^[A-Za-z]+$/i,
        maxLength: 20,
      }),
      placeholder: "First Name *",
    },

    lastName: {
      ...register("lastName", {
        required: "Last name is required.",
        pattern: /^[A-Za-z]+$/i,
        maxLength: 20,
      }),
      placeholder: "Last Name *",
    },

    phone: {
      ...register("phone", {
        required: "Phone number is required.",
        pattern: {
          value: /^[0-9+]+$/,
          message: "Invalid phone number.",
        },
      }),
      placeholder: "Phone Number *",
    },

    email: {
      ...register("email", {
        required: "Email is required.",
        pattern: {
          value: /^\S+@\S+$/i,
          message: "Invalid email address.",
        },
      }),
      placeholder: "Email *",
    },

    message: {
      ...register("message"),
      placeholder: "Message",
    },
  };

  return (
    <input
      {...fields[name]}
      className="w-full border-b bg-transparent pb-4 focus:outline-none"
    />
  );
};

export default InputField;

import React from "react";

const ErrorMessage = ({ error }) => {
  return (
    <div
      className={`transition-opacity duration-300 ${
        error ? "opacity-100" : "opacity-0"
      }`}
    >
      <p className="mt-1 text-sm text-red-500">{error?.message}</p>
    </div>
  );
};

export default ErrorMessage;

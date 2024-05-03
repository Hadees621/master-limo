"use client";

const Button = () => {
  const handleButtonClick = () => {
    window.location.href = "https://book.mylimobiz.com/v4/masterpiecelimo";
  };
  return (
    <div onClick={handleButtonClick}>
      <button
        className={`mt- cursor-pointer bg-crimson px-5 py-3 text-xs text-white outline-none sm:me-5 sm:px-14 sm:text-base xxlg:px-16 xxlg:py-4`}
      >
        RESERVE NOW
      </button>
    </div>
  );
};

export default Button;

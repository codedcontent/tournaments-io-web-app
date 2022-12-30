import React from "react";

const CustomButton = ({ title, handleClick }) => {
  return (
    <div
      className="bg-transparent border-2 border-secondary font-bold text-center rounded-md capitalize lg:px-14 py-2 px-4 cursor-pointer active:scale-95"
      onClick={() => {
        if (typeof handleClick === "function") {
          handleClick();
        }
      }}
    >
      {title}
    </div>
  );
};

// rune scape

export default CustomButton;

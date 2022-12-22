import React from "react";

const CustomButton = ({ title, handleClick }) => {
  return (
    <div className="bg-primary font-light lg:py-3 text-center rounded-md capitalize lg:px-20 py-2 px-4 cursor-pointer active:scale-95" onClick={() => handleClick()}>
      {title}
    </div>
  );
};

// rune scape

export default CustomButton;

import React from "react";

const CustomButton = ({ title, handleClick }) => {
  return (
    <div className="bg-primary font-light py-3 text-center rounded-md capitalize px-20 cursor-pointer active:scale-95" onClick={() => handleClick()}>
      {title}
    </div>
  );
};

// rune scape

export default CustomButton;

import React, { useState } from "react";
import useWindowSize from "../hooks/useWindowSize";
import CustomButton from "./CustomButton";
import MenuIcon from "@mui/icons-material/Menu";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";

const CustomAppBar = () => {
  const { width: screenWidth } = useWindowSize();
  const [navOpen, setNavOpen] = useState(false);

  const handleClick = () => {
    setNavOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setNavOpen(false);
  };

  return (
    <div className="flex justify-between px-4 items-center h-16 max-w-5xl m-auto relative">
      <strong className="text-3xl">
        <span>T</span>
        <span className="text-secondary">.IO</span>
      </strong>

      <div className="hidden md:block">
        <CustomButton title={"Join now"} />
      </div>

      <div className="md:hidden">
        <MenuIcon onClick={handleClick} />

        {navOpen && (
          <ClickAwayListener onClickAway={handleClickAway}>
            <div className="w-full h-24 lg:w-64 absolute right-0 top-full bg-white flex justify-center items-center border-2 t_io_grow">
              <div className="w-max">
                <CustomButton title={"Join now"} />
              </div>
            </div>
          </ClickAwayListener>
        )}
      </div>
    </div>
  );
};

export default CustomAppBar;

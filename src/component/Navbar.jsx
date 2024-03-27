import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="flex justify-between  px-3  items-center">
      <h1 className="text-green-500 font-bold text-xl">HiFresh</h1>
      <Button text="Sign In" />
    </div>
  );
};

export default Navbar;

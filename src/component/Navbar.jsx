import React from "react";
import Button from "./Button";
import Cart from "./Cart";

const Navbar = () => {
  return (
    <div className="flex justify-between  px-2  items-center">
      <h1 className="text-green-500 font-bold text-xl">HiFresh</h1>
      <div className="flex gap-2">
      <Cart />
      <Button text="Sign In" />
  
      </div>
    </div>
  );
};

export default Navbar;

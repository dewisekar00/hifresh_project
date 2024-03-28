import React from "react";
import Button from "./Button";
import { productCarts } from "../services/getDataProduct";
const ModalCart = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }
  const cartItem = productCarts;
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center ">
      <div className="bg-white rounded-lg p-4   w-[350px lg:w-[500px] ">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-green-500">Your Cart</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col gap-4 p-2">
          {cartItem.length === 0 && (
            <p className="text-slate-400  text-center ">
              Cart is empty, lets go shopping!
            </p>
          )}
          {cartItem.length > 0 && (
            <>
              {cartItem.map((product) => (
                <div
                  key={product.id}
                  className="flex shadow-md w-[250px] sm:w-[450px] "
                >
                  <img
                    src={product.image}
                    alt={product.ProductName}
                    className="w-24 h-24 object-cover"
                  />
                  <div className="pt-2 pl-4">
                    <p className="pb-2">{product.ProductName}</p>
                    <p>Rp.{product.price}</p>
                    <p></p>
                  </div>
                </div>
              ))}
                <div className="flex   justify-between items-center mt-8 ">
                <p className="">Total item : {productCarts.length} </p>
                  <Button text="checkout" />
                </div>
             
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalCart;

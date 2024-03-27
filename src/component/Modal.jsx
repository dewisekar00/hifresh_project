import React from "react";
import Button from "./Button";
import getDetailProduct from "../services/getDataProduct";

const Modal = ({ handleClose, show, id }) => {
  const detailProduct = getDetailProduct(id);
  const showHideClassName = show
    ? "fixed inset-0 flex items-center justify-center"
    : "hidden";

  return (
    <div className={showHideClassName}>
      <div className="fixed inset-0 bg-gray-900 opacity-75"></div>
      <div className="bg-white rounded-lg p-4 max-w-sm mx-auto w-80 z-50">
        <button className="absolute top-2 right-8 m-4" onClick={handleClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600 hover:text-gray-800"
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
        <div>
         <div className="h-48 ">
         <img src={detailProduct.image} alt={detailProduct.ProductName} className="object-cover h-full w-full" />
         </div>
          <div className="flex flex-col gap-4 my-4 bg-slate-100 p-4">
            <p className="font-semibold text-xl">{detailProduct.ProductName}</p>
            <div className="flex justify-between">
              <p>Rp.{detailProduct.price}</p>
              <p>Stok : {detailProduct.stock}</p>
            </div>
            <p className="text-slate-500">{detailProduct.description}</p>
          </div>
          <div className="text-end">
            <Button text="add to cart" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

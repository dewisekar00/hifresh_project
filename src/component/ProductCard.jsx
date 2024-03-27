import React, { useState } from "react";
import Modal from "./Modal";
import getDetailProduct from "../services/getDataProduct";

const ProductCard = (props) => {
  const { id, image, productName, price, alt } = props;
  const [showModal, setShowModal] = useState(false);

  const handleDetailProduct = (id) => {
    getDetailProduct(id);
  };
  const handleModal = () => {
    setShowModal(!showModal);
  };

  const handleOnClick = () => {
    handleModal();
    handleDetailProduct(id);
  };

  return (
    <div className="shadow-lg w-40 h-64 rounded-lg cursor-pointer" onClick={handleOnClick}>
      <div className="h-40">
        <img src={image} alt={alt} className="w-full h-full object-cover" />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <p className="font-semibold">{productName}</p>
        <p>Rp.{price}</p>
      </div>
      {showModal && <Modal show={showModal} id={id} handleClose={handleModal}></Modal>}
    </div>
  );
};

export default ProductCard;

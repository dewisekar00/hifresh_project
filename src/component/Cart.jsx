import React, { useState } from "react";
import ModalCart from "./ModalCart";

const Cart = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <div onClick={handleModal} className="cursor-pointer">
        <img src="cart-icon.svg" alt="icon-cart"  />
        {showModal && <ModalCart isOpen={showModal} onClose={handleModal} />}
      </div>
    </>
  );
};

export default Cart;

import React from "react";
import "./modal.css";
import modalpic from "../assets/clothing.png";

function Modal({ showModal, hideModalHandler, productDetails }) {
  if (!showModal) {
    return;
  }
  return (
    <div className="modal">
      <div className="modal-content">
        <h1>Product</h1>
        <img src={productDetails.img} />
        <p>{productDetails.name}</p>
        <p>{`Price:${productDetails.price}`}</p>
        <button className="btn">Buy now</button>
        <button onClick={hideModalHandler} className="cross-btn">
          X
        </button>
      </div>
    </div>
  );
}

export default Modal;

import React, { useState } from "react";
import "./services.css";
import clothing from "../assets/clothing.png";
import clothing2 from "../assets/clothing2.png";
import clothing3 from "../assets/clothing3.png";
import clothing4 from "../assets/clothing4.png";
import Modal from "./modal";
const products = [
  {
    name: "Golden easy sport chair.",
    price: "$2100.00",
    img: clothing,
  },

  {
    name: "Golden easy sport chair.",
    price: "$7100.00",
    img: clothing2,
  },
  {
    name: "Golden easy sport chair.",
    price: "$6100.00",
    img: clothing3,
  },
  {
    name: "Golden easy sport chair.",
    price: "$3100.00",
    img: clothing4,
  },
];

function Services() {
  const [showModal, setShowModal] = useState(false);
  const [productDetails, setProductDetails] = useState({});

  const hideModalHandler = () => setShowModal(false);

  const showModalHandler = () => setShowModal(true);

  return (
    <div className="container services-section">
      <h1>Featured products</h1>
      <div className="box">
        {products.map((item) => (
          <div
            onClick={() => {
              setProductDetails(item);
              showModalHandler();
            }}
            className="box2"
          >
            <img src={item.img} />
            <p>{item.name}</p>
            <p>{item.price}</p>
          </div>
        ))}
      </div>

      <div className="container services-section">
        <h1 className="primary">Best products</h1>
        <div className="box-2">
          {products.map((e) => (
            <div onClick={showModalHandler} className="box2">
              <img src={e.img} />
              <p>{e.name}</p>
              <p>{e.price}</p>
            </div>
          ))}
        </div>
      </div>
      <Modal
        productDetails={productDetails}
        hideModalHandler={hideModalHandler}
        showModal={showModal}
      />
    </div>
  );
}

export default Services;

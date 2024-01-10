import React from "react";
import "./main.css";
import pic from "../assets/hm1-single-1.webp";

function Main() {
  return (
    <div className="main container">
      <div className="main-img">
        <img src={pic} />
      </div>
      <div className="text">
        <i>
          <h3> 30% off</h3>
        </i>
        <h2>Comfort Chair</h2>
        <p>Collect from Daxone & get 30% Discount.</p>
        <button>Shop now</button>
      </div>
    </div>
  );
}

export default Main;

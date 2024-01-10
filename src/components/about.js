import React from "react";
import "./about.css";
import pic from "../assets/banner-1.webp";

function About() {
  return (
    <div className="about-container container">
      <div className="about">
        <img src={pic} />
      </div>
      <div className="about-content">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <h2>Winter Discount Up to 30%</h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <button>Shop now</button>
      </div>
    </div>
  );
}

export default About;

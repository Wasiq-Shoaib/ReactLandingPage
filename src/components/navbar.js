import React from "react";
import logo from "../assets/logo-1.webp";
import "./navbar.css";
import img from "../assets/shopping-cart.png";
import icon from "../assets/search.png";
function Navbar() {
  return (
    <div className="nav container">
      <img src={logo} />

      <ul>
        <li>Home</li>
        <li>Shop</li>
        <li>Mens </li>
        <li>Pages</li>
        <li>Blogg</li>
        <li>Contact</li>
      </ul>

      <div className="shopping">
        <img src={img} />
        <p>2 items</p>
        <img src={icon} />
      </div>
    </div>
  );
}

export default Navbar;

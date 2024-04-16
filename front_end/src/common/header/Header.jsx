import React, { useState } from "react";
import "./Header.scss";
import logo from "../../images/logo.png";
import cart from "../../images/cart.svg";
import { FaUserPlus, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? (
          <FaTimes className="toggle-icons" />
        ) : (
          <FaBars className="toggle-icons" />
        )}
      </div>
      <img src={logo} alt="Logo of sabka bazar" />

      <nav className={isMenuOpen ? "open" : ""}>
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>Order</li>
        </ul>
      </nav>
      <div className="login">
        <img src={cart} alt="Cart Logo" className="cart-logo" />
        <button>
          LOGIN
          <hr className="hr" />
          <FaUserPlus className="icons" />
        </button>
      </div>
    </header>
  );
};

export default Header;

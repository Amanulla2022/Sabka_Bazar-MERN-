import React from "react";
import logo from "../../images/logo.png";
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <img src={logo} alt="Logo of sabka bazar" />
      <p>
        Sabka Bazar Created By Me
        <span>
          <a
            href="https://www.linkedin.com/in/amanulla-mulla-000678232/"
            target="_blank"
          >
            Amanulla Iqbal Mulla
          </a>
        </span>
      </p>
      <div className="social-icons">
        <h4>Social Icons :</h4>
        <a href="#">
          <FaInstagram />
        </a>
        <a href="#">
          <FaTwitter />
        </a>
        <a href="#">
          <FaFacebook />
        </a>
        <a href="https://github.com/Amanulla2022" target="_blank">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/amanulla-mulla-000678232/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import logo from "../../assets/images/logo-kasa.png";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <img src={logo} className="footer-logo" alt="kasa logo" />
      <h4 className="footer-text">© 2023 Kasa. All rights reserved</h4>
    </footer>
  );
}

import React from "react";
import "./navbar.css";
import logo from "../../assets/images/logo-kasa.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <img src={logo} alt="logo Kasa"/>
      <nav className="nav-wrapper">
        <Link to="/">Accueil</Link>
        <Link to="/about">A Propos</Link>
      </nav>
    </header>
  );
}

import "./navbar.css";
import logo from "../../assets/images/logo-kasa.png";
import { Link} from "react-router-dom";

export default function Navbar() {
  const activePage = window.location.pathname;

  return (
    <header>
      <img src={logo} alt="logo Kasa"/>
      <nav className="nav-wrapper">
        <Link to="/" className={`${activePage === "/" ? "activeMenu" : ""}`}>Accueil</Link>
        <Link to="/about" className={`${activePage === "/about" ? "activeMenu" : ""}`}>A Propos</Link>
      </nav>
    </header>
  );
}

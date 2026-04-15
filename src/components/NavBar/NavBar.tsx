import { Link, Outlet } from "react-router-dom";
import "./NavBar.css";
import logo from "../../assets/hero.png";

function NavBar() {
  const user = localStorage.getItem("user");

  return (
    <div className="container">
      <div className="navbar">
        <img src={logo} alt="Logo" className="logo" />

        {user && (
          <div className="nav-links">
            <Link to="/">Inicio</Link>
            <Link to="/Exercici33">Prueba 1</Link>
            <Link to="/Exercici35">Prueba 2</Link>
          </div>
        )}
      </div>

      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default NavBar;

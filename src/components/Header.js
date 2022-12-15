import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar-fixed">
      <nav className="teal">
        <div className="nav-wrapper">
          <a className="brand-logo left" style={{marginLeft: '10px'}}>Forktastic</a>
          <ul className="right hide-on-med-and-down">
            <li>
              <NavLink
                to="/"
                className={(nav) => (nav.isActive ? "nav-active" : "")}
              >
                <b>Accueil</b>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;

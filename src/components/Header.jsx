import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/header.scss";

const Header = () => {
  return (
    <div className="header-links">
      <NavLink
        className={({ isActive }) =>
          isActive ? "nav-link active-route" : "nav-link non-active-route"
        }
        to={`/contact`}
      >
        Contact Us
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "nav-link active-route" : "nav-link non-active-route"
        }
        to={`/clients`}
      >
        Clients
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "nav-link active-route" : "nav-link non-active-route"
        }
        to="/portfolio"
      >
        Portfolio
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "nav-link active-route" : "nav-link non-active-route"
        }
        to={`/services`}
      >
        Services
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "nav-link active-route" : "nav-link non-active-route"
        }
        to={`/aboutus`}
      >
        About Us
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "nav-link active-route" : "nav-link non-active-route"
        }
        to={`/`}
      >
        Home
      </NavLink>
    </div>
  );
};

export default Header;

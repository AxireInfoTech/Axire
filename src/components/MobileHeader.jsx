import React, { useState } from "react";
import "../styles/mobile-header.scss";
import hamburger from "../images/icons/hamburger.png";
import close from "../images/icons/close.png";
import { NavLink } from "react-router-dom";
import logo from "../images/Logo.png";

const MobileHeader = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="mobile-header">
      <img className="mobile-logo" src={logo} alt="AxireLogo" />

      <button
        className="header-button"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        <img src={hamburger} alt="" />
      </button>
      {modalOpen && (
        <div className="header-modal">
          <img className="mobile-logo" src={logo} alt="AxireLogo" />

          <button
            className="modal-close"
            onClick={() => {
              setModalOpen(false);
            }}
          >
            <img src={close} alt="CloseButton" />
          </button>
          <div className="mobile-header-links">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "mobile-nav-link mobile-active-route"
                  : "mobile-nav-link mobile-non-active-route"
              }
              to={`/`}
              onClick={() => {
                setModalOpen(false);
              }}
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "mobile-nav-link mobile-active-route"
                  : "mobile-nav-link mobile-non-active-route"
              }
              to={`/aboutus`}
              onClick={() => {
                setModalOpen(false);
              }}
            >
              About Us
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "mobile-nav-link mobile-active-route"
                  : "mobile-nav-link mobile-non-active-route"
              }
              to={`/services`}
              onClick={() => {
                setModalOpen(false);
              }}
            >
              Services
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "mobile-nav-link mobile-active-route"
                  : "mobile-nav-link mobile-non-active-route"
              }
              to={`/portfolio`}
              onClick={() => {
                setModalOpen(false);
              }}
            >
              Portfolio
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "mobile-nav-link mobile-active-route"
                  : "mobile-nav-link mobile-non-active-route"
              }
              to={`/clients`}
              onClick={() => {
                setModalOpen(false);
              }}
            >
              Clients
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "mobile-nav-link mobile-active-route"
                  : "mobile-nav-link mobile-non-active-route"
              }
              to={`/contact`}
              onClick={() => {
                setModalOpen(false);
              }}
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileHeader;

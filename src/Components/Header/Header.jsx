import "./Header.css";
import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

const Header = ({ show, setShow }) => {
  return (
    <>
      <div className="header">
        <div className="headerswrap">
          <div className="leftHeader">
            <Link className="link" to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="midHeader">
            <ul>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                <li>About</li>
              </NavLink>
              <NavLink
                to="/pricing"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                <li>Pricing</li>
              </NavLink>

              <NavLink
                to="/service"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                <li>Services</li>
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                <li>Contact Us</li>
              </NavLink>

              <Link className="link" to="/login">
                <li>Login</li>
              </Link>
            </ul>
          </div>
          <div className="rightHeader">
            <Link className="link" to="/signup">
              <button className="btn">Try PlaintiffAid </button>
            </Link>
          </div>
          <div className="rightHeader1">
            <Link className="link" to="/signup">
              <button className="btn">Try for free</button>
            </Link>
          </div>

          <div className="burger" onClick={() => setShow(!show)}>
            {show === false ? (
              <HiMenu style={{ direction: "right", duration: "0.5" }} />
            ) : (
              <IoCloseSharp
                style={{
                  color: "#003482ff",
                  fontSize: "30px",
                  direction: "right",
                  duration: "0.5",
                }}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

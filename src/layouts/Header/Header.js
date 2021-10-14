import React from "react";
import "./Header.css";
import logo from "../../assets/img/logo.png";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="container p-sticky fluid">
      <div className="navbar d-flex">
        <div className="img-logo">
          <img src={logo} alt="Logo" width="50px" />
        </div>
        <div className="section d-flex">
          <div className="nav">
            <ul>
              <li>
                <NavLink activeClassName="active" to="/home">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/product">
                  Product
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="info-user d-flex jc-end">
            <div className="cart">
              <img
                src="https://img.icons8.com/ios-filled/50/000000/mine-cart.png"
                width="25px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

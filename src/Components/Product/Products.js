import React from "react";
import "./Products.css";
import { NavLink } from "react-router-dom";

export default function Products(props) {
  return (
    <div className="cards">
      <div className="card-img d-flex jc-start">
        <img src={props.img} alt="product-img" />
      </div>
      <div className="card-info d-flex jc-start">
        <div className="card-title">
          <h2>{props.title}</h2>
        </div>
        <div className="card-description">
          <p>{props.desc}</p>
        </div>
        <div className="card-btn d-flex jc-end">
          <b>{props.price} VND</b>
          <button>Thêm vào giỏ hàng</button>
          <button>
            <NavLink to="/product/:id">Chi tiết...</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
}

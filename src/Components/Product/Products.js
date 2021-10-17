import React from "react";
import "./Products.css";
import { NavLink } from "react-router-dom";

export default function Products(props) {
  const { addCart, data } = props;

  return (
    <div className="cards">
      <div className="card-img d-flex jc-start">
        <img src={data.img} alt="product-img" />
      </div>
      <div className="card-info d-flex jc-start">
        <div className="card-title">
          <h2>{data.title}</h2>
        </div>
        <div className="card-description">
          <p>{data.desc}</p>
        </div>
        <div className="card-btn d-flex jc-end">
          <b>{data.price} VND</b>
          <button
            onClick={() => {
              addCart(data);
            }}
          >
            Thêm vào giỏ hàng
          </button>
          <button>
            <NavLink to="/product/:id">Chi tiết</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
}

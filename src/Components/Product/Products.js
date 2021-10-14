import React from "react";
import "./Products.css";

export default function Products(props) {
  return (
    <div className="cards">
      <div className="card-img d-flex jc-start">
        <img src="" alt="product-img" />
      </div>
      <div className="card-info d-flex jc-start">
        <div className="card-title">
          <h2>{props.title}</h2>
        </div>
        <div className="card-description">
          <p>{props.desc}</p>
        </div>
        <div className="card-btn d-flex jc-end">
          <p>{props.price}</p>
          <button>Add</button>
          <button>Detail</button>
        </div>
      </div>
    </div>
  );
}

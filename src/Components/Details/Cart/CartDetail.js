import React, { Fragment, useEffect, useState } from "react";
import "./CartDetail.css";

export default function CartDetail({ cart }) {
  const [totalItem, setTotalItem] = useState(0);
  useEffect(() => {
    setTotalItem(cart.quantity * cart.price);
  });
  return (
    <Fragment>
      <div className="cart-item d-flex">
        <div className="img-box">
          <img src={cart.img} alt="Images Product" />
        </div>
        <div className="about">
          <div className="title">{cart.title}</div>
          <div className="subtitle">{cart.desc}</div>
        </div>
        <div className="counter">{cart.quantity}x{cart.price} VND </div>
        <div className="price">{totalItem} VND </div>
      </div>
    </Fragment>
  );
}

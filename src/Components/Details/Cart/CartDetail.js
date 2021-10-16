import React from "react";
import "./CartDetail.css";

export default function CartDetail(props) {
  return (
    <div className="cart-items d-flex">
      <img src={props.img} alt="" width="50px" height="50px"s/>
      <h4>{props.name}</h4>
      <h4>{props.price}</h4>
      <h4>{props.qty}</h4>
    </div>
  );
}

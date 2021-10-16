import React from "react";
import CartDetail from "../../Components/Details/Cart/CartDetail";
export default function Cart({cart}) {
  return (
    <div className="d-flex box-cart">
      <div className="carts d-flex">
        <div className="cart-header d-flex">
          <h1>Chi tiết giỏ hàng</h1>
        </div>
        <div className="cart-detail">
          {cart.map((e) => (
            <CartDetail key={e.id} img={e.img} name={e.title} price={e.price} qty={e.quantity}  />
          ))}
        </div>
        <div className="card-action d-flex jc-end">
          <button>Thanh toán</button>
        </div>
      </div>
    </div>
  );
}

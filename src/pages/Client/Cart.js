import React, { useEffect } from "react";
import CartDetail from "../../Components/Details/Cart/CartDetail";
export default function Cart(props) {
  const {carts} = props;
  useEffect(() => {
    document.title = "Giỏ hàng";
  },[])
  console.log(carts)
  return (
    <div className="d-flex box-cart">
      <div className="carts d-flex">
        <div className="cart-header d-flex">
          <h1>Chi tiết giỏ hàng</h1>
        </div>
        <div className="cart-detail fluid">
          {carts.length === 0 ? (
            <div className="d-flex jc-center">
              Không có sản phẩm trong giỏ hàng
            </div>
          ) : (
            carts.map((e) => <CartDetail key={e.id} cart={e} />)
          )}
        </div>
        <div className="cart-action d-flex jc-end">
          <button>Thanh toán</button>
        </div>
      </div>
    </div>
  );
}
 
import Products from "../../Components/Product/Products";
export default function Product(props) {
  const { product, cart, addCart } = props;
  console.log(cart)
  return (
    <div className="container main fluid">
      <div className="d-flex jc-center">
        <h1>Sản phẩm</h1>
      </div>
      <div className="d-flex fluid jc-center">
        <div className="products d-flex flex-wap jc-left">
          {product.map((product) => (
            <Products
              data={product}
              key={product.id}
              cart={cart}
              addCart={addCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

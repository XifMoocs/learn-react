import React from "react";
import Products from "../../Components/Product/Products";
export default function Product() {
  const product_data = [
    {
      id: 1,
      title: "Hello",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam consectetur exercitationem labore culpa quae nemo voluptatem iure, rerum voluptas in reiciendis libero facilis dolores non excepturi eveniet, magnam ducimus veritatis?",
      price: 5000,
    },
    {
      id: 2,
      title: "World",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam consectetur exercitationem labore culpa quae nemo voluptatem iure, rerum voluptas in reiciendis libero facilis dolores non excepturi eveniet, magnam ducimus veritatis?",
      price: 1000,
    },
    {
      id: 3,
      title: "Hello World",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam consectetur exercitationem labore culpa quae nemo voluptatem iure, rerum voluptas in reiciendis libero facilis dolores non excepturi eveniet, magnam ducimus veritatis?",
      price: 500,
    },
    {
      id: 4,
      title: "Hello Earth",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam consectetur exercitationem labore culpa quae nemo voluptatem iure, rerum voluptas in reiciendis libero facilis dolores non excepturi eveniet, magnam ducimus veritatis?",
      price: 100,
    },
  ];

  return (
    <div className="container fluid">
      <div className="d-flex jc-center">
        <h1>Product</h1>
      </div>
      <div className="d-flex jc-start flex-wap">
        {product_data.map((product_data) => (
          <Products
            key={product_data.id}
            title={product_data.title}
            desc={product_data.desc}
            price={product_data.price}
          />
        ))}
      </div>
    </div>
  );
}

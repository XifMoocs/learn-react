import React from "react";
import Products from "../../Components/Product/Products";
export default function Product() {
  const product_data = [
    {
      id: 1,
      title: "Tên sản phẩm",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam consectetur exercitationem labore culpa quae nemo voluptatem iure, rerum voluptas in reiciendis libero facilis dolores non excepturi eveniet, magnam ducimus veritatis?",
      price: 5000,
      img: "https://picsum.photos/200/300?random=1",
    },
    {
      id: 2,
      title: "Tên sản phẩm",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam consectetur exercitationem labore culpa quae nemo voluptatem iure, rerum voluptas in reiciendis libero facilis dolores non excepturi eveniet, magnam ducimus veritatis?",
      price: 1000,
      img: "https://picsum.photos/200/300?random=2",
    },
    {
      id: 3,
      title: "Tên sản phẩm",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam consectetur exercitationem labore culpa quae nemo voluptatem iure, rerum voluptas in reiciendis libero facilis dolores non excepturi eveniet, magnam ducimus veritatis?",
      price: 500,
      img: "https://picsum.photos/200/300?random=3",
    },
    {
      id: 4,
      title: "Tên sản phẩm",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam consectetur exercitationem labore culpa quae nemo voluptatem iure, rerum voluptas in reiciendis libero facilis dolores non excepturi eveniet, magnam ducimus veritatis?",
      price: 100,
      img: "https://picsum.photos/200/300?random=4",
    },
    {
      id: 5,
      title: "Tên sản phẩm",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam consectetur exercitationem labore culpa quae nemo voluptatem iure, rerum voluptas in reiciendis libero facilis dolores non excepturi eveniet, magnam ducimus veritatis?",
      price: 5000,
      img: "https://picsum.photos/200/300?random=5",
    },
    {
      id: 6,
      title: "Tên sản phẩm",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam consectetur exercitationem labore culpa quae nemo voluptatem iure, rerum voluptas in reiciendis libero facilis dolores non excepturi eveniet, magnam ducimus veritatis?",
      price: 1000,
      img: "https://picsum.photos/200/300?random=6",
    },
    {
      id: 7,
      title: "Tên sản phẩm",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam consectetur exercitationem labore culpa quae nemo voluptatem iure, rerum voluptas in reiciendis libero facilis dolores non excepturi eveniet, magnam ducimus veritatis?",
      price: 500,
      img: "https://picsum.photos/200/300?random=7",
    },
    {
      id: 8,
      title: "Tên sản phẩm",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam consectetur exercitationem labore culpa quae nemo voluptatem iure, rerum voluptas in reiciendis libero facilis dolores non excepturi eveniet, magnam ducimus veritatis?",
      price: 100,
      img: "https://picsum.photos/200/300?random=8",
    },
  ];
  return (
    <div className="container main fluid">
      <div className="d-flex jc-center">
        <h1>Sản phẩm</h1>
      </div>
      <div className="d-flex fluid jc-center">
        <div className="products d-flex flex-wap jc-left">
          {product_data.map((product_data) => (
            <Products
              key={product_data.id}
              title={product_data.title}
              desc={product_data.desc}
              price={product_data.price}
              img={product_data.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

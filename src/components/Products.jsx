import React from "react";
import { products } from "./data/ProductData";


const Products = () => {
  return (
    <>
      <div className="product-contant">
        <h1>❤️ Stay fresh, stay healthy, and make every moment delicious with our natural juice collection! 🌿✨</h1>
      </div>
    <div className="products">
      {products.map((item) => (
        <div key={item.id} className="juice-card">
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <h4 className="category">{item.category}</h4>
          <div className="rate">₹{item.rate}</div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Products;
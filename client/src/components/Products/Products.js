import React from "react";
import { useState } from "react";
import ProductModal from "./ProductModal";
import "./Products.scss";

const Products = ({ products }) => {
  const [product, setProduct] = useState("");

  const openModal = product => {
    setProduct(product);
  };

  const closeModal = () => {
    setProduct(false);
  };
  return (
    <div className="products">
      {products.map(product => (
        <div key={product.id} className="product-item">
          <div className="image">
            <a href="/#" onClick={() => openModal(product)}>
              <img src={product.imageUrl} alt={product.name} />
            </a>
          </div>
          <div className="description">
            <p className="name">
              <strong>{product.name}</strong>
            </p>
            <span className="price">${product.price}</span>
          </div>
          <div className="text-center add-to-cart">
            <button className="btn">Add to Cart</button>
          </div>
        </div>
      ))}

      <ProductModal product={product} closeModal={closeModal} />
    </div>
  );
};

export default Products;

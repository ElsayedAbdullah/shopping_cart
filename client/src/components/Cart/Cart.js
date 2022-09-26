import React from "react";
import { useState } from "react";
import Checkout from "../Checkout/Checkout";
import "./Cart.scss";

const Cart = props => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="cart-wrapper">
      <h2>{props.cartItems.length ? <p>There is {props.cartItems.length} products in the cart</p> : "Cart is Empty"}</h2>
      <div className="cart-items">
        {props.cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.imageUrl} alt={item.name} />
            <div className="cart-info">
              <div>
                <h4 className="title">title: {item.name}</h4>
                <p className="qty">qty: {item.qty}</p>
                <p className="price">price: {item.price}</p>
              </div>
              <button className="remove btn btn-danger" onClick={() => props.removeProductFromCart(item)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      {props.cartItems.length > 0 && (
        <div className="cart-footer">
          <div className="total">
            Total:{" "}
            <strong>
              $
              {props.cartItems.reduce((acc, prod) => {
                return acc + prod.price * prod.qty;
              }, 0)}
            </strong>
          </div>
          <button className="see-products btn btn-primary" onClick={() => setShowForm(true)}>
            See Products
          </button>
        </div>
      )}

      {showForm && (
        <Checkout setShowForm={setShowForm}/>
      )}
    </div>
  );
};

export default Cart;

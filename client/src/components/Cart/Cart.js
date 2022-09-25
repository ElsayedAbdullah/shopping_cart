import React from "react";
import "./Cart.scss";

const Cart = props => {
  console.log(props);
  return (
    <div className="cart-wrapper">
      <h2>{props.cartItems.length ? <p>There is {props.cartItems.length} products in the cart</p> : "Cart is Empty" }</h2>
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
              <button className="remove" onClick={() => props.removeProductFromCart(item)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;

import React from "react";
import { useState } from "react";
import Input from "../Input/Input";
import Fade from "react-reveal/Fade"; // Importing Fade  effect
import Zoom from "react-reveal/Zoom"; // Importing Zoom  effect
import "./Checkout.scss";

function Checkout(props) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    const order = {
      name: value.name,
      email: value.email
    };

    console.log(order);
    setValue({
      name: "",
      email: ""
    });
  };

  const handleChange = e => {
    setValue(prevState => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  return (
    <Fade>
      <div className="checkout-form">
        <span className="close-btn" onClick={() => props.setShowForm(false)}>
          &times;
        </span>
        <Zoom>
          <form onSubmit={handleSubmit}>
            <Input label="Name" type="text" name="name" id="name" value={value.name} onChange={handleChange} />
            <Input label="Email" type="email" name="email" id="email" value={value.email} onChange={handleChange} />
            <div className="form-group">
              <button className="btn btn-primary">Submit</button>
            </div>
          </form>
        </Zoom>
      </div>
    </Fade>
  );
}

export default Checkout;

import React from "react";

const Input = (props) => {
  return (
    <div className="form-group">
      <label htmlFor="name">{props.label}</label>
      <input type={props.type} name={props.name} id={props.id} value={props.value} onChange={props.onChange} />
    </div>
  );
};

export default Input;

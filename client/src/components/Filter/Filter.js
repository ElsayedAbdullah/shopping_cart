import React from "react";
import "./Filter.scss";

const Filter = (props) => {
  return (
    <div className="filter-products">
      <h4 className="filter-title">Filter</h4>
      <div className="content">
        <p className="products-num">Number of Products {props.numOfProducts}</p>
        <div className="sizes-filter">
          <label>Sizes</label>
          <select className="select-filter" value={props.size} onChange={props.handleFilterBySize}>
            <option value="ALL">ALL</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </div>
        <div className="order-filter">
          <label>Order</label>
          <select className="select-filter" value={props.sort} onChange={props.handleFilterBySort}>
            <option value="latest">Latest</option>
            <option value="highest">Highest</option>
            <option value="lowest">Lowest</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;

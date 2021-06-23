import React, { Component } from "react";
import "./cartproduct.css";
import { removeFromCart } from "../services/store/actions";

import { connect } from "react-redux";
class CartProduct extends Component {
  state = {};
  render() {
    return (
      <div className="cart-product">
        <img
          src={"/images/products/" + this.props.product.image}
          alt="product here"
        />
        <h6>{this.props.product.title}</h6>
        <label>${this.props.product.price}</label>
        <label>#{this.props.product.quantity}</label>
        <label>${this.getTotal()}</label>
        <button
          onClick={this.handleRemoveEvent}
          className="btn btn-sm btn-danger m-5"
        >
          Remove
        </button>
      </div>
    );
  }
  handleRemoveEvent = () => {
    console.log("removing product", this.props.product.id);
    //dispatch the action
    this.props.removeFromCart(this.props.product.id);
  };
  
  getTotal = () => {
    let total = this.props.product.quantity * this.props.product.price;
    return total.toFixed(2);
  };
}



export default connect(null, { removeFromCart })(CartProduct);

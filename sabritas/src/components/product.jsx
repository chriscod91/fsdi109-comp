import React, { Component } from "react";
import QuantityPicker from "./quantitypicker";
import { connect } from "react-redux";

import "./product.css";
import { addToCart } from './../services/store/actions';

class Product extends Component {
  state = {
    quantity: 1,
  };

  render() {
    return (
      <div className="product m-3">
        <img src={"/images/products/" + this.props.data.image} alt="product here" />
        

        <div className="prices">
        <h6 className="names">{this.props.data.title}</h6>
          <label className="total-value">total: ${this.getTotal()}</label>
          <label className="price-value">
            price: ${this.props.data.price.toFixed(2)}
          </label>
        </div>

        <QuantityPicker
          onQuantityChange={this.handleQuantityChange}
        ></QuantityPicker>

<button onClick={this.handleAddToCart} className="btn btn-sm btn-primary" style={{backgroundColor: "lightgreen"}}>
          <i className="fa fa-cart-plus" aria-hidden="true"></i>
         &nbsp;Add
        </button>

      </div>
    );
  }

  getTotal = () => {
    let total = this.props.data.price * this.state.quantity;
    return total.toFixed(2);
  };

  handleQuantityChange = (qnty) => {
    this.setState({ quantity: qnty});
  };

  handleAddToCart = () => {
     console.log("Dispatching action");
     //dispatch the addToCart action
     //create a copy of data,
     //add the quantity 
     //send the copy as payload
     let copy = {...this.props.data };
     copy.quantity = this.state.quantity;
     this.props.addToCart(copy);
  };
}

/**
 * connect the component to the store (to read/dis  patch actions)
 * receives 2 params:
 *1 - a function that maps what you want to read 
 *2- an object with actions you want to dispatch 
*/

export default connect(null, { addToCart })(Product);
 
           

            

import React, { Component } from "react";
import CartProduct from "./cartproduct";
import "./cart.css";
import { connect } from "react-redux";
import {clearCart} from "../services/store/actions";
class Cart extends Component {
  
  render() {
    return (
      <div className="cart-page">
        <h1>my cart</h1>

        <div className="products">
          {this.props.cart.map((prod) => (
            <CartProduct key={prod.id} product={prod}></CartProduct>
          ))}
        </div>

        <div className="total">
          <button onClick={this.handleClearEvent} className="btn btn-sm btn-warning">Clear</button>
          <hr />
          Your total: ${this.getTotal()}
          <button className="btn btn-primary">Pay now</button>
        </div>
      </div>
    );
  }
  /**
   * To clear the cart:
   * create an action
   * update the reducer, to delete everything when the action is dispatched
   * connect the action to cart component (don't forget the import for the action)
   * handle the click event on the button
   * dispatch the action
   */
   handleClearEvent = () => {
    console.log("clear product");
    //dispatch the action
    this.props.clearCart();
  };

  getTotal = () => {
    //this.props.cart
    //return with 2 decimals
    return 0;
  };
}

const mapStateToProps = (state) => {
  return {
    cart: state,
  };
};
export default connect(mapStateToProps, {clearCart})(Cart);

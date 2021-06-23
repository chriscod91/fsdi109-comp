import React, { Component } from "react"; //<-creATED USING IMRC
import "./navBar.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class NavBar extends Component {
  //<--created using cc
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light ">
        <Link className="navbar-brand" to="/#">
          The Snack Bar
        </Link>
       <div className="logos">
        <img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-msg-emblem-logo-png-12.png" alt="" />
        <img src="https://www.freepnglogos.com/uploads/facebook-logo-16.png" alt="" />
        <img src="https://www.freepnglogos.com/uploads/new-instagram-logo-png-1.png" alt="" />
        <img src="https://www.freepnglogos.com/uploads/snapchat-logo-symbol-png-3.png" alt="" />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/catalog">
                catalog
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About us
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/admin">
                Admin
              </Link>
            </li>
          </ul>

          <div className="d-flex">
            <Link
              className="btn btn-outline-light"
              style={{ backgroundColor: "lightgreen" }}
              to="/cart"
            >
              <i className="fa fa-cart-plus mr-2"></i>
              &nbsp;View cart
              <span className="badge badge-secondary">
                {this.props.cartCount}
              </span>
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}
//return an object mapping a state to props
const mapStateToProps = (state) => {
  return {
    cartCount: state.length, //<- will put the array in this.props.cart
  };
};

export default connect(mapStateToProps, null)(NavBar);

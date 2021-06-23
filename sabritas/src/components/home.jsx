import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./home.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="home-page">
        <div className="jumbotron">
          <h1 className="display-4">
            welcome to <b>The Snack Bar</b>
          </h1>
          <p className="lead">underneath is a link to our fantastic catalog</p>
          <img
            src="https://static.wixstatic.com/media/c1e649_b1d671576a1c4db09da586ba41bfcfbc~mv2.png/v1/fill/w_326,h_326,al_c,q_85,usm_0.66_1.00_0.01/c1e649_b1d671576a1c4db09da586ba41bfcfbc~mv2.webp"
            alt=""
          />
          <img
            src="https://static.wixstatic.com/media/c1e649_a1e32334205342088043003fab17e875~mv2.png/v1/fill/w_199,h_60,al_c,lg_1,q_85/c1e649_a1e32334205342088043003fab17e875~mv2.webp"
            alt=""
          />
          <img
            src="https://static.wixstatic.com/media/c1e649_9349d54ac8874871b65e3e4169bcb9cc~mv2_d_1552_1349_s_2.png/v1/fill/w_424,h_368,al_c,q_85,usm_0.66_1.00_0.01/c1e649_9349d54ac8874871b65e3e4169bcb9cc~mv2_d_1552_1349_s_2.webp"
            alt=""
          />
          <img
            src="https://static.wixstatic.com/media/c1e649_2b7154cab0f34d7c8d1148e3c5b404b8~mv2.png/v1/fill/w_363,h_312,al_c,lg_1,q_85/c1e649_2b7154cab0f34d7c8d1148e3c5b404b8~mv2.webp"
            alt=""
          />
          <img
            src="https://static.wixstatic.com/media/c1e649_0a67ff480bb04e6abcac1a0d595e697a~mv2.png/v1/fill/w_450,h_380,al_c,lg_1,q_85/c1e649_0a67ff480bb04e6abcac1a0d595e697a~mv2.webp"
            alt=""
          />
          <img
            src="https://static.wixstatic.com/media/c1e649_a3cdd930c3264fb5b5aaafcb8776b273~mv2.png/v1/fill/w_642,h_738,al_c,q_90,usm_0.66_1.00_0.01/c1e649_a3cdd930c3264fb5b5aaafcb8776b273~mv2.webp"
            alt=""
          />
          <div className="container">
            <img src="/images/products/product-icon2.jpg" alt="" />
            <p className="title">click here</p>
            <div className="overlay"></div>
            <Link className="btn btn-info btn" to="/catalog" role="button">
              Our Catalog
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

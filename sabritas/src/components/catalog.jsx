import React, { Component } from "react";
import "./catalog.css";
import Product from "./product";
import ProductService from "../services/productService";



class Catalog extends Component {
  state = {
    products: [],
    categories: [],
    selectedCategory: "",
  };

  render() {
    //get data from service
    let prodsToDisplay = this.state.products;

    if (this.state.selectedCategory) {
      prodsToDisplay = prodsToDisplay.filter(
        (prod) => prod.category === this.state.selectedCategory
      );
    }

    return (
      <div className="catalog-page">
        
        <div className="categories">
          <button
            onClick={() => this.selectCategory("")}
            className="btn btn-secondary m-1"
          >
            show all
          </button>

          {this.state.categories.map((cat) => (
            <button
              onClick={() => this.selectCategory(cat)}
              className="btn btn-info m-2"
              key={cat} style={{backgroundColor: "red"}}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="products mt-3">
          {prodsToDisplay.map((prod, index) => (
            <Product key={index} data={prod}></Product>
          ))}
        </div>
      </div>
    );
  }

  selectCategory = (cat) => {
    console.log("user selected a cat.", cat);
    this.setState({ selectedCategory: cat });
  };

  //when the component is mounted ()
  async componentDidMount() {
    
    //good place to load data (fro server)
    let service = new ProductService();
    let data = await service.getCatalog();

    var cats = [];
    for (let i = 0; i < data.length; i++) {
      var category = data[i].category;
      if (!cats.includes(category)) {
        //if the category does not exist inside the solution array
        cats.push(category); // add it
      }
    }
    
    //put data on state
    this.setState({ products: data, categories: cats });
  }
}

export default Catalog;

/*
min info for the product cmp:
-image
-title
-code(sku)
-minimum
-total
*/

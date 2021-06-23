import React, { Component } from "react";

import "./admin.css";
import ProductService from './../services/productService';

class Admin extends Component {
  state = {};
  render() {
    return (
      <div className="admin-page px-4 py-5">
        <button onClick={this.testRead} className="btn btn-info">test data</button>
        <button onClick={this.sendData} className="btn btn-warning mx-3">seed data</button>
        <button onClick={this.clearData} className="btn btn-danger">clear my data</button>
      </div>
    );
  }

  testRead = async () => {
      let service = new ProductService();
      let data = await service.getCatalog(); 
    console.log("test read:", data);
};

sendData = async () => {
    console.log("send data");

    let service = new ProductService();

    await service.seedData();

    console.log("data seeded, read to confirm");
};

clearData = () => {
    console.log("clear data");
};

}


export default Admin;

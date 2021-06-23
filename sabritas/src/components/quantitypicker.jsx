import React, { Component } from "react";
import "./quantitypicker.css";

class QuantityPicker extends Component {
  state = {
    quantity: 1,
  };

  render() {
    return (
      <div className="qntyPicker">
        <button className="btn btn-sm btn-info p-1" style={{backgroundColor: "red"}} onClick={this.decrease}> - </button>

         <label className="qnty m-1">{this.state.quantity}</label>
        
        <button className="btn btn-sm btn-info p-1"  style={{backgroundColor: "red"}}onClick={this.increase}> + </button>
        </div>
    );
  }

  decrease = () => {
    var qnty = this.state.quantity - 1;
    if (qnty > 0){
      this.setState({ quantity: qnty});
      this.props.onQuantityChange(qnty);
    }
  };

  increase = () => {
    let qnty = this.state.quantity + 1;
    this.setState({ quantity: qnty });

    this.props.onQuantityChange(qnty);//valid way of changing the state
  };
}

export default QuantityPicker;
          
        
        
      
       
         
         
         
        
         
        

   
  
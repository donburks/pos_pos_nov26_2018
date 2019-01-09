import React, { Component } from 'react';

class Order extends Component {
  render() {
    const {name, price} = this.props.item;
    return (
      <div>
        {name} - ${price} 
      </div>
    );
  }
}

export default Order;



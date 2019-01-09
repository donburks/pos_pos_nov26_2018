import React, { Component } from 'react';
import Order from '../components/Order';

class OrderContainer extends Component {
  render() {
    return (
      <div className="container">
        <h3>Current Order</h3>
        {this.props.order.map(item => (<Order item={item} />))}
      </div>
    );
  }
}

export default OrderContainer;


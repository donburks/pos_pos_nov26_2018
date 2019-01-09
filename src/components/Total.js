import React, { Component } from 'react';

export default class Total extends Component {
  render() {
    return (
      <div className="container">
        <strong>Total: </strong>${this.props.amount}
        <button onClick={this.props.checkout}>Checkout</button>
      </div>
    );
  }
}

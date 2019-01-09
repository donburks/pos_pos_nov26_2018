import React, { Component } from 'react';

class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.addToOrder = this.addToOrder.bind(this);
  }

  addToOrder() {
    this.props.handler(this.props.item);
  }

  render() {
    const {name, price} = this.props.item;
    return (
      <div>
        <p>
          <strong>{name}</strong> ${price}
          <button onClick={this.addToOrder}>+ Add</button>
        </p>
      </div>
    );
  }
}

export default MenuItem;



import React, { Component } from 'react';
import MenuContainer from './containers/MenuContainer';
import OrderContainer from './containers/OrderContainer';
import Total from './components/Total';
import './pos.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [{name: "Poke Bowl", price: 10}, {name: "Sushi", price: 5}, {name: "Sandwich", price: 7}],
      order: []
    };
    this.addToOrder = this.addToOrder.bind(this);
    this.checkout = this.checkout.bind(this);
  }

  addToOrder(item) {
    this.setState({order: this.state.order.concat(item)});
  }

  checkout() {
    this.setState({order: []});
  }

  render() {
    return (
      <div className="App">
        <MenuContainer menu={this.state.menu} addToOrder={this.addToOrder} />
        <OrderContainer order={this.state.order} />
        <Total amount={this.state.order.reduce((total, item) => item.price + total, 0)} checkout={this.checkout} />
      </div>
    );
  }
}

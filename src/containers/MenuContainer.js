import React, { Component } from 'react';
import MenuItem from '../components/MenuItem';

class MenuContainer extends Component {
  render() {
    return (
      <div className="container">
        <h3>Menu</h3>
        {this.props.menu.map(item => (<MenuItem item={item} handler={this.props.addToOrder} />))}
      </div>
    );
  }
}

export default MenuContainer;


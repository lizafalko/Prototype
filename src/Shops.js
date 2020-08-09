import React, { Component } from 'react';
import ReactDOM from 'react';

export class Shop extends Component {
  render() {
    const {
      shop,
      shopClass
    } = this.props;

    return (
      <div className={shopClass}>
        <p className="card__pretext">
          Магазин: <a href="#" className="card__rating">{shop} Shop</a>
        </p>
      </div>
    );
  }
}

export default Shop;

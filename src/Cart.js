import React, { Component } from 'react';
import ReactDOM from 'react';
import { HOTELS } from './Hotels.js'
import { HotelCard } from './HotelCard';
import { SearchBar } from './SearchBar.js';

export class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayedHotels: HOTELS
    }
  }

  render() {
    const hotelCards = this.state.displayedHotels.sort(function(a, b) { return a.price < b.price }).map(hotel =>
      <HotelCard
        key={hotel.id}
        id={hotel.id}
        name={hotel.name}
        description={hotel.description}
        price={hotel.price}
        rating={hotel.rating}
      />
    );

    return (
      <div className="page">
        <h2 className="page__heading page__heading_cart">Корзина абстракций:</h2>
        <div className="cards">
          {hotelCards}
        </div>
      </div>
    );
  }
}

export default Cart;

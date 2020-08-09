import React, { Component } from 'react';
import ReactDOM from 'react';
import { HOTELS } from './Hotels.js'
import { Shop } from './Shops';

export function Conversion(props)  {
    return (
      <div className="conversion">
        <h2 className="conversion__heading">Возможно вам понравится ...</h2>
        <div className="conversion__wrapper">
          <Shop
            shop="First"
            shopClass="card card_yellow"
          />
          <Shop
            shop="Fifth"
            shopClass="card card_pink"
          />
          <Shop
            shop="Third"
            shopClass="card card_green"
          />
        </div>
      </div>
    )
}

export default Conversion;

import React, { Component } from 'react';
import ReactDOM from 'react';
import { HOTELS } from './Hotels.js'
import { CartCard } from './CartCard';

export function Cart(props)  {
    return (
      <div className="page">
        <h2 className="page__heading page__heading_cart">Корзина абстракций:</h2>
        <div className="cards">
          <CartCard
            id="1223435355"
            name="Header & Footer"
            description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.."
            price="950"
            rating="Убрать из корзины"
          />
          <CartCard
            id="1223435356"
            name="Абстракция цвета"
            description="Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa..."
            price="7000"
            rating="Убрать из корзины"
          />
        </div>
      </div>
    )
}

export default Cart;

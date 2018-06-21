import React, { Component } from 'react';
import ReactDOM from 'react';
import './App.css';
import './Cards.css';

import image1 from './img/1.png';
import image2 from './img/2.png';

export const CARDS = [
  {
    id: 1,
    description: "Сказочное заморское яство",
    name: "Нямушка",
    filling: "с фуа-гра",
    portions: "10 порций",
    bonus: "мышь в подарок",
    weight: "0,5 кг",
    image: image1,
    width: "320",
    height: "480",
    tooltip: "Привет!"
  },
  {
    id: 2,
    description: "Сказочное заморское яство",
    name: "Нямушка",
    filling: "с рыбой",
    portions: "40 порций",
    bonus: "2 мыши в подарок",
    weight: "2 кг",
    image: image2,
    width: "320",
    height: "480",
    tooltip: "Как дела?"
  },
  {
    id: 3,
    description: "Сказочное заморское яство",
    name: "Нямушка",
    filling: "с курой",
    portions: "100 порций",
    bonus: "5 мышей в подарок",
    status: "заказчик доволен",
    weight: "5 кг",
    image: image2,
    width: "320",
    height: "480",
    tooltip: "Привет! <a href='#' onClick={this.toggler}>Ого!</a>"
  }
];

export default CARDS;

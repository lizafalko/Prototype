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
    weight: "0,5",
    part: "кг",
    image: image1,
    tooltip: "Привет!",
    color: "#1698d9"
  },
  {
    id: 2,
    description: "Сказочное заморское яство",
    name: "Нямушка",
    filling: "с рыбой",
    portions: "40 порций",
    bonus: "2 мыши в подарок",
    weight: "2",
    part: "кг",
    image: image2,
    tooltip: "Как дела?",
    color: "#d91667"
  },
  {
    id: 3,
    description: "Сказочное заморское яство",
    name: "Нямушка",
    filling: "с курой",
    portions: "100 порций",
    bonus: "5 мышей в подарок",
    status: "заказчик доволен",
    weight: "5",
    part: "кг",
    image: image2,
    tooltip: "Привет! <a href='#' onClick={this.toggler}>Ого!</a>",
    color: "#d91667"
  }
];

export default CARDS;

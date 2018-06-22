import React, { Component } from 'react';
import { CARDS } from './Cards.js'
import { ProductCard } from './ProductCard';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayedCards: CARDS
    }
  }

  render() {
    const productCards = this.state.displayedCards.map(card =>
      <ProductCard
        key={card.id}
        id={card.id}
        description={card.description}
        name={card.name}
        filling={card.filling}
        portions={card.portions}
        bonus={card.bonus}
        image={card.image}
        weight={card.weight}
        part={card.part}
        status={card.status}
        width={card.width}
        height={card.height}
        tooltip={card.tooltip}
        color={card.color}
        tooltip_color={card.tooltip_color}
      />
    );

    return (
      <div className="page">
        <h1 className="page__heading">Ты сегодня покормил кота?</h1>
        <div className="cards">
          {productCards}
        </div>
      </div>
    );
  }
}

export default App;

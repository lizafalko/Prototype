import React, { Component } from 'react';
import ReactDOM from 'react';
import { CARDS } from './Cards.js'
import './App.css';
import './ProductCard.css'

export class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    }

    this.toggler = this.toggler.bind(this);
  }

  toggler() {
    this.setState({
      ...this.state,
      selected: !this.state.selected
    })
  }

  render() {
    const {
      description,
      name,
      filling,
      portions,
      bonus,
      weight,
      image,
      status,
      width,
      height,
      tooltip
    } = this.props;

    return (
      <article
        className={this.state.selected ? "card card--selected" : "card"}
        style={{backgroundImage: "url(" + image + ")"}}
        onClick={this.toggler}>

        <span className="card__description">{description}</span>
        <h3 className="card__name">{name}</h3>
        <p className="card__filling">{filling}</p>
        <span className="card__portions">{portions}</span>
        <span className="card__bonus">{bonus}</span>
        <span className="card__status">{status}</span>
        <p className="card__weight">{weight}</p>
        <p className="card__tooltip" dangerouslySetInnerHTML={{__html: tooltip}}></p>
      </article>
    );
  }
}

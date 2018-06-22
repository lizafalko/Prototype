import React, { Component } from 'react';
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
      tooltip
    } = this.props;

    return (
      <article
        className={this.state.selected ? "card card--selected" : "card"}
        style={{backgroundImage: "url(" + image + ")"}}
        onClick={this.toggler}>

        <span className="card__description card__text--grey">{description}</span>
        <h4 className="card__name">{name}</h4>
        <h4 className="card__filling">{filling}</h4>
        <div className="card__block">
          <span className="card__portions card__text--grey">{portions}</span>
          <span className="card__bonus card__text--grey">{bonus}</span>
          <span className="card__status card__text--grey">{status}</span>
        </div>
        <p className="card__weight">{weight}</p>
        <p className="card__tooltip" dangerouslySetInnerHTML={{__html: tooltip}}></p>
      </article>
    );
  }
}

import React, { Component } from 'react';
import ReactDOM from 'react';
import { HOTELS } from './Hotels.js'
import { MAX_DESCRIPTION_LENGTH } from './MaxDescriptionLength.js';

export class HotelCard extends Component {
  render() {
    const {
      name,
      description,
      price,
      rating,
    } = this.props;

    return (
      <div className="card">
        <div className="card__content"></div>
        <div>
          <div className="card__block">
            <h3>{name}</h3>
            <a href="#" className="card__rating">{rating}</a>
          </div>
          <p className="card__description">
            {description.length > MAX_DESCRIPTION_LENGTH ? description.substring(0, MAX_DESCRIPTION_LENGTH) + '...' : description}
          </p>
        </div>
        <span className="card__price">{price}</span>
      </div>
    );
  }
}

export default HotelCard;

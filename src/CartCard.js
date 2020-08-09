import React, { Component } from 'react';
import ReactDOM from 'react';
import { HOTELS } from './Hotels.js'
import { MAX_DESCRIPTION_LENGTH } from './MaxDescriptionLength.js';

export class CartCard extends Component {

  state = {
    color: 'LightCoral'
  }

  onChangeColor = e => {
    this.setState({
      color: e.target.value
    })
  }

  render() {
    const {
      name,
      description,
      price,
      rating,
      shop
    } = this.props;

    const styleObj = {
      background: this.state.color
    }

    return (
      <div className="card">
        <div style={styleObj} className="card__content"></div>
        <div>
          <div className="card__block">
            <h3 className="card__name">{name}</h3>
            <a href="#" className="card__rating">{rating}</a>
          </div>
          <p className="card__description">
            {description.length > MAX_DESCRIPTION_LENGTH ? description.substring(0, MAX_DESCRIPTION_LENGTH) + '...' : description}
          </p>
          <input
            className="form__field form__field_color"
            onChange={this.onChangeColor}
            value={this.state.color}
            placeholder="Введите цвет абстракции"
            type="text"
          />
          <p className="card__shop">
            Магазин: <a href="#" className="card__rating">{shop} Shop</a>
          </p>
        </div>
        <span className="card__price">{price}</span>
      </div>
    );
  }
}

export default CartCard;

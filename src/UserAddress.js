import React from 'react';
import { Component } from 'react';

export class UserAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {isButtonOn: true};
    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick() {
    this.setState(state => ({
      isButtonOn: !state.isButtonOn
    }));
  }
  render() {
    return (
      <div className="form form_user">
        <h1>Пункт выдачи заказа:</h1>
        <input className="form__field form__field_input" type="text" name="address1" placeholder="Улица, дом *(станция метро*)" required />
        <input className="form__field form__field_input" type="text" name="marketplace" placeholder="Пункт самовывоза *" />

        <h1>Адрес доставки:</h1>
        <input className="form__field form__field_input" type="text" name="address2" placeholder="Улица, дом *(станция метро*)" />
        <input className="form__field form__field_input" type="text" name="house" placeholder="Корпус, подъезд *" />
        <input className="form__field form__field_input" type="text" name="floor" placeholder="Этаж" />
        <input className="form__field form__field_input" type="text" name="home" placeholder="Кв-ра/Офис" />
        <input className="form__field form__field_input" type="datetime" name="time" placeholder="Время доставки *" />
        <button className="form__field form__field_button" type="submit" onClick={this.buttonClick}>{this.state.isButtonOn ? "Отправить" : "Далее"}</button>
      </div>
    );
  }
}

export default UserAddress;

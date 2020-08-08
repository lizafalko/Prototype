import React from 'react';
import { Component } from 'react';
import Checkbox from './Check';
import RadioButton from './Radio';

export class UserPay extends Component {
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
      <div className="form form_pay">
        <h1>Способ оплаты:</h1>
        <div className="form__choice">
          <RadioButton radioButtonText="Оплатить при получении" />
          <RadioButton radioButtonText="Оплатить картой онлайн" />
        </div>
        <div className="form__pay">
          <span className="form__summ">К оплате: 1 240 ₽</span>
        </div>
        <Checkbox checkboxClass="checkbox checkbox_mobile" />
        <Checkbox checkboxClass="checkbox checkbox_desktop" />
        <button className="form__field form__field_button" type="submit" onClick={this.buttonClick}>{this.state.isButtonOn ? "Отправить" : "К завершению"}</button>
      </div>
    );
  }
}

export default UserPay;

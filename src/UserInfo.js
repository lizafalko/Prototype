import React from 'react';
import { Component } from 'react';

export class UserInfo extends Component {
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
      <div className="form form_info">
        <h1>Личные данные:</h1>
        <input className="form__field form__field_input" type="text" name="name" placeholder="Ваше имя *" required />
        <input className="form__field form__field_input" type="tel" name="phone" placeholder="Номер телефона *" required />
        <input className="form__field form__field_input" type="email" name="mail" placeholder="Электронная почта" required />
        <button className="form__field form__field_button" type="submit" onClick={this.buttonClick}>{this.state.isButtonOn ? "Отправить" : "Далее"}</button>
      </div>
    );
  }
}

export default UserInfo;

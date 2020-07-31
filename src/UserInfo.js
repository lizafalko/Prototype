import React from 'react';
import Checkbox from './Check';

export function UserInfo(props) {
  return (
    <div className="form form_user">
      <h1>Личные данные:</h1>
      <input className="form__field form__field_input" type="text" name="name" placeholder="Ваше имя *" required />
      <input className="form__field form__field_input" type="tel" name="phone" placeholder="Номер телефона *" required />
      <input className="form__field form__field_input" type="email" name="mail" placeholder="Электронная почта" required />
      <button className="form__field form__field_button" type="submit">Далее</button>
    </div>
  );
}

export default UserInfo;

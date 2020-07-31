import React from 'react';
import Checkbox from './Check';
import RadioButton from './Radio';

export function UserPay(props) {
  return (
    <div className="form form_user">
      <h1>Способ оплаты:</h1>
      <input className="form__field form__field_input" type="text" name="comment" placeholder="Комментарий *" />
      <input className="form__field form__field_input" type="text" name="code" placeholder="Код домофона *" />
      <Checkbox checkboxClass="checkbox checkbox_mobile" />
      <button className="form__field form__field_button" type="submit">Далее</button>
      <Checkbox checkboxClass="checkbox checkbox_desktop" />
    </div>
  );
}

export default UserPay;

import React from 'react';
import Checkbox from './Check';
import RadioButton from './Radio';

export function UserPay(props) {
  return (
    <div className="form form_user">
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
      <button className="form__field form__field_button" type="submit">Далее</button>
    </div>
  );
}

export default UserPay;

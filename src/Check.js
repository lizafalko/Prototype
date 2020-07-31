import React from 'react';
import Linkify from 'react-linkify';

export function Checkbox(props) {
  return (
    <label className={props.checkboxClass}>
      <input className="checkbox__input" name="checkbox" type="checkbox" required/>
      <span className="checkbox__checkmark"></span>
      <span className="checkbox__text">
        Я согласен с условиями обработки персональных данных
      </span>
    </label>
  );
}

export default Checkbox;

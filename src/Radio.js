import React from 'react';
import Linkify from 'react-linkify';

export function RadioButton(props) {
  return (
    <label className={props.radioButtonClass}>
      <input className="radio__input" type="radio" />
      <span className="radio__checkmark"></span>
      <span className="radio__text">
        {props.radioButtonText}
      </span>
    </label>
  );
}

export default RadioButton;

import React from 'react';

export function RadioButton(props) {
  return (
    <label className="radio">
      <input className="radio__input" type="radio" name="radio" />
      <span className="radio__checkmark"></span>
      <span className="radio__text">
        {props.radioButtonText}
      </span>
    </label>
  );
}

export default RadioButton;

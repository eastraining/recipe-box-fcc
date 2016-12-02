import React from 'react';
import { render } from 'react-dom';

const Button = ({onClick, value, name}) => (
  <div className="button">
    <input type="button" name={name} value={value} onClick={onClick} />
  </div>
)

export default Button

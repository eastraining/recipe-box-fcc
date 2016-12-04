import React from 'react';
import { render } from 'react-dom';
import Button from '../displays/Button';

// Display
// Takes an object item
// Shows the contents of the item
const Display = ({item, onEditClick, onDelClick}) => (
  <div className="contentbar">
    <div className="contentbar-title">{item.id}</div>
    {item.ingredients.split(',').map((ingredient, index) => 
      <DisplayRow
        key={index}
        text={ingredient} 
      />
    )}
    <div className="form__button-bar">
      <Button name={"editRecipe"} value={"Edit"} onClick={(event) => onEditClick(item.id)} />
      <Button name={"deleteRecipe"} value={"Delete"} onClick={(event) => onDelClick(item.id)} />
    </div>
  </div>
);
// DisplayRow: returns each ingredient as a row of its own
const DisplayRow = ({text}) => (
  <div className="contentbar-row">
    {text}
  </div>
);

export default Display;

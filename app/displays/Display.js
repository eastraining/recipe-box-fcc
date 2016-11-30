import React from 'react';
import { render } from 'react-dom';

// Display
// Takes an object item
// Shows the contents of the item,
// Or asks for a new item to be added if no item is passed
const Display = ({item}) => {
  if (typeof item === "object") {
    return(
      <div className="contentbar">
        <div className="contentbar-title">{item.id}</div>
        {item.ingredients.split(', ').map((ingredient, index) => 
          <DisplayRow
            key={index}
            text={ingredient} 
          />
        )}
      </div>
    )
  }
  return (
    <div className="contentbar">
      <div className="contentbar-title">New Recipe</div>
    </div>
  )
}
// DisplayRow: returns each ingredient as a row of its own
const DisplayRow = ({text}) => (
  <div className="contentbar-row">
    {text}
  </div>
);

export default Display;

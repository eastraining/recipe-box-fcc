import React from 'react';
import { render } from 'react-dom';

// Display
// Takes an object item
// Shows the contents of the item
const Display = ({item}) => (
  <div className="contentbar">
    <div className="contentbar-title">{item.id}</div>
    {item.ingredients.split(',').map((ingredient, index) => 
      <DisplayRow
        key={index}
        text={ingredient} 
      />
    )}
  </div>
);
// DisplayRow: returns each ingredient as a row of its own
const DisplayRow = ({text}) => (
  <div className="contentbar-row">
    {text}
  </div>
);

export default Display;

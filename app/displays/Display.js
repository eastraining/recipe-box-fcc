import React from 'react';
import { render } from 'react-dom';

// Display
// Takes an item as props
// Shows the contents of the item,
// Or asks for a new recipe to be added if no item is passed
function Display(props) {
  if (typeof props.current == "object") {
    return(
      <div className="contentbar">
        <div className="contentbar-title">{props.current.title}</div>
        {props.current.ingredients.map(function(listvalue, index) {
          return <DisplayRow data={listvalue} key={index} />
        })}
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
function DisplayRow(props) {
  return (
    <div className="contentbar-row">
      {props.data}
    </div>
  )
}

export default Display;

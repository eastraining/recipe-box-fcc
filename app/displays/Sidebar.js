import React from 'react';
import { render } from 'react-dom';

// Sidebar: displays existing recipes and allows creation of new recipes
// Takes props from MainContainer to generate the list of existing recipes
function Sidebar(props) {
  var titles = [];
  if (props.recipes != ([] || undefined)) {
    for (var i = 0; i < props.recipes.length; i++) {
      titles.push(props.recipes[i]['title']);
    }
  }

  return(
    <div className="sidebar">
      <RecipeName data={'New Recipe'} onClick={props.onClick} />
      {titles.map(function(listvalue, index){
        return <RecipeName data={listvalue} key={index} index={index} onClick={props.onClick} />
      })}
    </div>
  )
}
// RecipeName: creates each row in the list in Sidebar
function RecipeName(props) {
  return (
    <div className="sidebar-row">
      <div className="sidebar-row__text" id={props.index} onClick={(event) => props.onClick(event)}>{props.data}</div>
      <div className="sidebar-row__divider" />
    </div>
  )
}

export default Sidebar;

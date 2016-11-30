import React from 'react';
import { render } from 'react-dom';

// SidebarList: displays a list of object items in a sidebar
// Takes a list of items, and a callback function for clicking the item
const SidebarList = ({items, onItemClick}) => (
  <div className="sidebar">
    <ListItem text={'Add a new recipe'} />
    {items.map(item => 
      <ListItem 
        key={item.id}
        text={item.id}
        onClick={() => onItemClick(item.id)}
      />
    )}
  </div>
);
// ListItem: creates each row in the list in Sidebar
const ListItem = ({text, onClick}) => (
  <div className="sidebar-row">
    <div className="sidebar-row__text" onClick={onClick}>{text}</div>
    <div className="sidebar-row__divider" />
  </div>
);

export default SidebarList;

import React from 'react';
import { render } from 'react-dom';

// SidebarList: displays a list of object items in a sidebar
// Takes a list of items, and a callback function for clicking the item
const SidebarList = ({items, onItemClick}) => (
  <div className="sidebar">
    {items.map(item => 
      <ListItem 
        key={item.id}
        text={item.id}
        current={item.current}
        onClick={() => onItemClick(item.id)}
      />
    )}
  </div>
);
// ListItem: creates each row in the list in Sidebar
const ListItem = ({text, current, onClick}) => (
  <div className="sidebar-row" onClick={onClick}>
    <div className={"sidebar-row__text" + (current ? " focus" : "")} >{text}</div>
    <div className="sidebar-row__divider" />
  </div>
);

export default SidebarList;

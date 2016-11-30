import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import Display from '../displays/Display';
import Sidebar from '../displays/Sidebar';

// MainContainer
// Collects data from Redux store
// Dispatches data to Sidebar and Display displays
class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    
    // this.handleSidebarClick = this.handleSidebarClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();

  }

  render() {
    return(
      <div className="site-content">
        <Sidebar recipes={this.props.recipes} />
        <Display current={this.props.current} handleChange={this.state.} />
      </div>
    );
  }
}

// mapStatetoProps
// Returns the required State to the connect() function
function mapStatetoProps(state) {
  return state;
}

export default connect(mapStatetoProps)(MainContainer);
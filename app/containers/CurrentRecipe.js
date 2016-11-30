import React, { Component } from 'react';
import { render } from 'react-dom';
import Display from '../displays/Display';
import { connect } from 'react-redux';

class CurrentRecipe extends Component {
  render() {
    const state = this.props;

    return (
      <Display
        item={state.current}
      />
    );
  }
}

export default connect(state => state)(CurrentRecipe);

import React, { Component } from 'react';
import { render } from 'react-dom';
import Display from '../displays/Display';
import { connect } from 'react-redux';

class CurrentRecipe extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('button clicked');
  }

  render() {
    if (current.edit) {
      return (
        <Form
          item={this.state.current}
          onChange={this.handleChange}
          handleSubmit={(event) => this.handleSubmit}
        />
      )
    }

    return (
      <Display
        item={this.state.current}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return state.recipes.filter(obj => obj.current === true)[0];
}

export default connect(mapStateToProps)(CurrentRecipe);

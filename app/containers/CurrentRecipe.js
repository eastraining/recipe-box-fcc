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
    const current = this.props;

    if (current.edit) {
      return (
        <Form
          item={current}
          handleSubmit={(event) => this.handleSubmit}
        />
      )
    }

    return (
      <Display
        item={current}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return state.recipes.filter(obj => obj.current === true)[0];
}

export default connect(mapStateToProps)(CurrentRecipe);

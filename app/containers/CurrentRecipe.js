import React, { Component } from 'react';
import { render } from 'react-dom';
import Display from '../displays/Display';
import Form from '../containers/Form';
import { connect } from 'react-redux';

const CurrentRecipe = (props) => {
  if (props.edit) {
    return (
      <Form />
    )
  }
  return (
    <Display
      item={props}
    />
  );
}

const mapStateToProps = (state) => {
  return state.recipes.filter(obj => obj.current === true)[0];
}

export default connect(mapStateToProps)(CurrentRecipe);

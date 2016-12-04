import React, { Component } from 'react';
import { render } from 'react-dom';
import Display from '../displays/Display';
import Form from '../containers/Form';
import { connect } from 'react-redux';
import actions from '../redux/actions'

const CurrentRecipe = (props) => {
  if (props.edit) {
    return (
      <Form />
    )
  }
  return (
    <Display
      item={props}
      onEditClick={props.handleEditClick}
      onDelClick={props.handleDelClick}
    />
  );
};

const mapStateToProps = (state) => {
  return state.recipes.filter(obj => obj.current === true)[0];
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleEditClick: (state) => {
      dispatch(actions.editRecipe(state));
    },
    handleDelClick: (state) => {
      dispatch(actions.selectItem('0'));
      dispatch(actions.delRecipe(state));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentRecipe);

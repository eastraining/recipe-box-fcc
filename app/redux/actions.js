// Actions
// Contains actions:
// ADD_RECIPE adds an object recipe to the state
// EDIT_RECIPE sets a recipe already in the state to be edited

let actions = {
  addRecipe: (recipe) => {
    return {
      type: 'ADD_RECIPE',
      recipe
    }
  },
  editRecipe: (id) => {
  	return {
  	  type: 'EDIT_RECIPE',
  	  id
  	}
  },
  delRecipe: (id) => {
    return {
      type: 'DEL_RECIPE',
      id
    }
  },
  selectItem: (id) => {
    return {
      type: 'SELECT_ITEM',
      id
    }
  }
}

export default actions;

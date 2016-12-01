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
  editRecipe: (recipe) => {
  	return {
  	  type: 'EDIT_RECIPE',
  	  recipe
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

// Actions
// Contains two actions:
// ADD_RECIPE adds a recipe to the state
// EDIT_RECIPE edits a recipe already in the state

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

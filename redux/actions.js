// Actions
// Contains two actions:
// ADD_RECIPE adds a recipe to the state
// EDIT_RECIPE edits a recipe already in the state

export default actions = {
  function addRecipe(recipe) {
    return {
      type: 'ADD_RECIPE',
      recipe: recipe
    }
  },
  function editRecipe(recipe) {
  	return {
  	  type: 'EDIT_RECIPE',
  	  recipe: recipe
  	}
  }
}

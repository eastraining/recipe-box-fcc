// Reducer
// Accepts 2 actions: ADD_RECIPE and EDIT_RECIPE
// Returns a state with a new recipe,
// and a state with one recipe changed respectively


// function updateRecipes(allRecipes, newRecipe) {
  
// }

const reducer = (state, action) => {
  switch(action) {
  //   case 'SELECT_ITEM':
  //     return Object.assign({}, state, {

  //     });
    // case 'ADD_RECIPE':
    //   return Object.assign({}, state, {
    //     recipes: [{
    //       id: action.recipe.id,
    //       ingredients: action.recipe.ingredients,
    //     }, ...state.recipes]
    //   });
    // case 'EDIT_RECIPE':
    //   return (
    //     Object.assign({}, state, {})
    //   );
    default:
      return state;
  }
}

export default reducer;
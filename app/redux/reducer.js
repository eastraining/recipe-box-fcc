// Reducer
// Accepts 2 actions: ADD_RECIPE and EDIT_RECIPE
// Returns a state with a new recipe,
// and a state with one recipe changed respectively


// function updateRecipes(allRecipes, newRecipe) {
  
// }

const reducer = (state, action) => {
  switch(action.type) {
    case 'SELECT_ITEM':
      return Object.assign({}, state, {recipes: state.recipes.map(recipe => {
        if (recipe.id !== action.id || ((action.id === '0') && (recipe !== state.recipes[0]))) {
          return {
            ...recipe,
            current: false
          }
        }
        return {
          ...recipe,
          current: true
        }
      })});
    case 'ADD_RECIPE':
      return Object.assign({}, state, {
        recipes: [...state.recipes, {
          id: action.recipe.id,
          ingredients: action.recipe.ingredients,
          current: false,
          edit: false
        },]
      });
    case 'EDIT_RECIPE':
      return Object.assign({}, state, {recipes: state.recipes.map(recipe => {
        if (recipe.id !== action.id && recipe !== state.recipes[0]) {
          return {
            ...recipe,
            edit: false
          }
        }
        return {
          ...recipe,
          edit: true
        }
      })});
    case 'DEL_RECIPE':
      return Object.assign({}, state, {recipes: state.recipes.filter(recipe => {
        return recipe.id !== action.id
      })});
    default:
      return state;
  }
}

export default reducer;
// Reducer
// Accepts 2 actions: ADD_RECIPE and EDIT_RECIPE
// Returns a state with a new recipe,
// and a state with one recipe changed respectively

function getID(state) {
  return state.todos.reduce((maxID, todo) => {
    return Math.max(todo.id, maxID);
  }, -1) + 1;
}

// function updateRecipes(allRecipes, newRecipe) {
  
// }

export default function reducer(state, action) {
  switch(action) {
    case 'ADD_RECIPE':
      return Object.assign({}, state, {
        recipes: [{
          title: action.recipe.title,
          ingredients: action.recipe.ingredients,
          id: getID(state)
        }, ...state.recipes]
      });
    // case 'EDIT_RECIPE':
    //   return (
    //     Object.assign({}, state, {})
    //   );
    default:
      return state;
  }
}
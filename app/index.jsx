var React = require('react');
var ReactDOM = require('react-dom');

// default recipe list
const defaultRecipes = [
  {
    title: 'Singapore Fried Noodles',
    ingredients: ['Egg Noodles', 'Eggs', 'Shrimp', 'Green Bean Sprouts', 'Soy Sauce']
  },
  {
    title: 'Bak Kut Teh',
    ingredients: ['Pork Ribs', 'White Pepper', 'Garlic', 'Chinese Herbs', 'Fried Doughsticks']
  },
  {
    title: 'Beef Bourguignon',
    ingredients: ['Beef', 'Red Wine', 'Beef Broth', 'Garlic', 'Onions', 'Mushrooms']
  }
];

// stylistic components
function Main() {
  return (
    <div className="main container">
      <Title text={'My Recipe Book'} />
      <App />
      <Footer />
    </div>
  )
}
function Title(props) {
  return <h1 className="text-center title">{props.text}</h1>;
}
function Footer() {
  return <footer className="text-center footer">Cobbled together by Yu Dong Hee.</footer>;
}

// App starts here
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      current: 'newRecipe',
      recipes: []
    };
  }
  componentDidMount() {
    this.setState({recipes: defaultRecipes});
  }

  render() {
    return(
      <div className="site-content">
        <Sidebar recipes={this.state.recipes} />
        <Display current={this.state.current} />
      </div>
    );
  }
}

// Sidebar: displays existing recipes and allows creation of new recipes
// Takes props from App to generate the list of existing recipes
function Sidebar(props) {
  var titles = [];
  if (props.recipes != ([] || undefined)) {
    console.log(props.recipes);
    for (var i = 0; i < props.recipes.length; i++) {
      titles.push(props.recipes[i]['title']);
    }
  }

  return(
    <div className="sidebar">
      <RecipeName data={'New Recipe'} />
      {titles.map(function(listvalue, index){
          return <RecipeName data={listvalue} key={index} />
      })}
    </div>
  )
}
// RecipeName: creates each row in the list in Sidebar
function RecipeName(props) {
  return (
    <div className="sidebar-row">
      <div className="sidebar-row__text">{props.data}</div>
      <div className="sidebar-row__divider" />
    </div>
  )
}

// Display: shows the currently selected recipe
function Display(props) {
  return (
    <div className="contentbar" />
  )
}

// render App
ReactDOM.render(
  <Main />,
  document.getElementById('app')
);


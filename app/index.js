import React from 'react';
import { render } from 'react-dom';
import configureStore from '../redux/store';
import { Provider , connect } from 'react-redux';

// default recipe list
const defaultRecipes = [
  {
    title: 'Singapore Fried Noodles',
    ingredients: 'Egg Noodles, Eggs, Shrimp, Green Bean Sprouts, Soy Sauce',
    id: 0
  },
  {
    title: 'Bak Kut Teh',
    ingredients: 'Pork Ribs, White Pepper, Garlic, Chinese Herbs, Fried Doughsticks',
    id: 1
  },
  {
    title: 'Beef Bourguignon',
    ingredients: 'Beef, Red Wine, Beef Broth, Garlic, Onions, Mushrooms',
    id: 2
  }
];

// configure and create store
let initialState = {
  current: '',
  recipes: defaultRecipes
}
let store = configureStore(initialState);

// mapStatetoProps
// Returns the required State to the connect() function
function mapStatetoProps(state) {
  console.log('connect is called');
  console.log(state, 'state');
  return state;
}

// stylistic components
const App = () => {
  return (
    <div className="main container">
      <Title text={'My Recipe Book'} />
      <MainContainer />
      <Footer />
    </div>
  )
}
const Title = (props) => {
  return <h1 className="text-center title">{props.text}</h1>;
}
const Footer = () => {
  return <footer className="text-center footer">Cobbled together by Yu Dong Hee.</footer>;
}

// MainContainer starts here
class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    
    // this.handleSidebarClick = this.handleSidebarClick.bind(this);
  }

  // handleSidebarClick(event) {
  //   const target = parseInt(event.target.id || event.srcElement);
  //   const newCurrent = this.state.recipes[target];
  //   this.setState({current: newCurrent});
  // }

  render() {
    console.log(this.props.current, 'current display');
    return(
      <div className="site-content">
        <Sidebar recipes={this.props.recipes} />
        <Display current={this.props.current} />
      </div>
    );
  }
}
// connect MainContainer to store
MainContainer = connect(mapStatetoProps)(MainContainer);

// Sidebar: displays existing recipes and allows creation of new recipes
// Takes props from MainContainer to generate the list of existing recipes
function Sidebar(props) {
  var titles = [];
  if (props.recipes != ([] || undefined)) {
    for (var i = 0; i < props.recipes.length; i++) {
      titles.push(props.recipes[i]['title']);
    }
  }

  return(
    <div className="sidebar">
      <RecipeName data={'New Recipe'} onClick={props.onClick} />
      {titles.map(function(listvalue, index){
        return <RecipeName data={listvalue} key={index} index={index} onClick={props.onClick} />
      })}
    </div>
  )
}
// RecipeName: creates each row in the list in Sidebar
function RecipeName(props) {
  return (
    <div className="sidebar-row">
      <div className="sidebar-row__text" id={props.index} onClick={(event) => props.onClick(event)}>{props.data}</div>
      <div className="sidebar-row__divider" />
    </div>
  )
}

// Display: shows the currently selected recipe
function Display(props) {
  if (typeof props.current == "object") {
    return(
      <div className="contentbar">
        <div className="contentbar-title">{props.current.title}</div>
        {props.current.ingredients.map(function(listvalue, index) {
          return <DisplayRow data={listvalue} key={index} />
        })}
      </div>
    )
  }
  return (
    <div className="contentbar">
      <div className="contentbar-title">New Recipe</div>
    </div>
  )
}
// DisplayRow: returns each ingredient as a row of its own
function DisplayRow(props) {
  return (
    <div className="contentbar-row">
      {props.data}
    </div>
  )
}

// render MainContainer
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

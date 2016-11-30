import React from 'react';
import { render } from 'react-dom';
import RecipeList from '../containers/RecipeList';
import CurrentRecipe from '../containers/CurrentRecipe';

// stylistic components
const App = () => (
  <div className="main container">
    <Title />
    <div className="site-content">
      <RecipeList />
      <CurrentRecipe />
    </div>
    <Footer />
  </div>
);
const Title = () => (
  <h1 className="text-center title">My Recipe Book</h1>
);
const Footer = () => (
  <footer className="text-center footer">Cobbled together by Yu Dong Hee.</footer>
);

export default App;

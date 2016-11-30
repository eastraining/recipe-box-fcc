import React from 'react';
import { render } from 'react-dom';
import MainContainer from '../containers/MainContainer';

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

export default App;

var React = require('react');
var ReactDOM = require('react-dom');

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
  }

  render() {
    return(
      <div className="site-content">
        Under Construction
      </div>
    );
  }
}

// render App
ReactDOM.render(
  <Main />,
  document.getElementById('app')
);
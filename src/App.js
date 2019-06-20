import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route } from 'react-router-dom';

class App extends React.Component{
  render() {
    return (
      <div className="App">
        <Navigation />
        <div className="App-container">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </div>
      </div>
    );
  }
};

export default App;

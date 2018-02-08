import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import BasicExample from './BasicExample';

class App extends Component {
  render() {
    return (
      <div className="App">
		<BasicExample/>
      </div>
    );
  }
}

export default App;

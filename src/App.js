import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="Site">
        <div className="Site-content">
          <Header/>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterBio from './components/character_bio.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <CharacterBio />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterBio from './components/character_bio.js';
import DiceRoll from './components/dice_rolls.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <CharacterBio />
        <DiceRoll />
      </div>
    );
  }
}

export default App;

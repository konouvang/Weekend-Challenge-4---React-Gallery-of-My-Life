import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
        <img src="images/chick.jpg"/>
        <img src="images/duckling.jpg"/>
        <img src="images/kitty.jpg"/>
        <img src="images/puppy.jpg"/>
      </div>
    );
  }
}

export default App;

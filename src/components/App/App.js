import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    newImages: {
    },
    images: [],
  }
  componentDidMount() {
    console.log('componentDidMount works');
    this.getImages();
  }
  getImages() {
    axios({
      method: 'GET',
      url: '/images',
    })
    .then((response) => {
      console.log(response);
      this.setState({
        images: response.data,
      })
    });
  }

  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <p>Gallery goes here</p>
        <galleryItems />

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

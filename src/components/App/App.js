import React, { Component } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
    images: [],
  }
}
  componentDidMount() {
    console.log('componentDidMount works');
    this.getImages();
  }
  getImages() {
    axios.get('/gallery')
    .then((response) => {
      this.setState({
        images : response.data
      });
      console.log(this.state);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  likeImage = (event) => {
    console.log(event.target);
    const imageIndex = event.target.dataset.id;
    const imageId = this.state.images[imageIndex].id;
    this.putLikes(imageId);
  }

  putLikes(imageId) {
    axios.put(`/gallery/like/${imageId}`)
      .then((response) => {
        this.getImages();
      }).catch((err) => {
        console.log(err);
      });
  }
  
  render() {
  
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <GalleryList
          images={this.state.images}
          likeImage={this.likeImage}
        />
      </div>
    )
  }
}

export default App;

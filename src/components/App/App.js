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
      url: '/gallery',
    })
    .then((response) => {
      console.log(response);
      this.setState({
        images: response.data,
      })
    });
  }
  likeImage = (event) => {
    console.log(event.target);
    const imageIndex = event.target.dataset.id;
    const imageId = this.state.images[imageIndex].id;
    axios.put(`/gallery/like/${imageId}`)
      .then((response) => {
        this.getImages();
      }).catch((err) => {
        console.log(err);
      });
  }
  
  showDescription = (event) => {
    console.log(event.target);
    
  }


  render() {
    console.log(this.state.images)
    const htmlImage = this.state.images.map((indvImage, i) => {
      console.log(indvImage);
      return (
        <div id="wrapper">
        <p key={i}>
          <img src={indvImage.path} alt={indvImage.description} data-id={i} onClick={this.showDescription} class="hover"/>
         <br/>
         <p class="text">
         {indvImage.description}
         </p>
         <br/>
         Likes: {indvImage.likes}
         <button data-id={i} onClick={this.likeImage}>Like</button>
        </p>
        </div>
      );
    });
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <p>Gallery goes here</p>
        {htmlImage}
      </div>
    );
  }
}

export default App;

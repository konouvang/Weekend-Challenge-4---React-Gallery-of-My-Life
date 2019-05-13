import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    newImages: {
    },
    images: [],
    isDescriptionVisible: false,
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
    let newDescState = {};
  
      if (this.state.isDescriptionVisible === false) {
        newDescState.isDescriptionVisible = true;
      } else if (this.state.isDescriptionVisible === true) {
        newDescState.isDescriptionVisible = false;
      }
      
      this.setState(newDescState);
    }


  render() {
    let descriptionStyling = 'description';
      
      if (this.state.isDescriptionVisible === true) {
        descriptionStyling = 'description description-show';
      }
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
         <div className={descriptionStyling}>
            DESCRIPTION: {indvImage.description}
          </div>
         
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

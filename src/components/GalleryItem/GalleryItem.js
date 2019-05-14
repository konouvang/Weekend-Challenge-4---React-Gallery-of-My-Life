import React, { Component } from 'react';
import './GalleryItem.css';

class GalleryItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      picture: [],
      isDescriptionVisible: false,
      }

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

    if(this.state.isDescriptionVisible ===true) {
      descriptionStyling = 'description description-show';
    }
    console.log(this.props);
    console.log(this.props.likeImage);

    return (
      <div key={this.props.index}>
      <img src={this.props.path}
        alt={this.props.description}
        data-id={this.props.index} onClick={this.showDescription}
        className="hover"
      />
      <br/>
      <div className="text">
      {this.props.description}
      </div>
      <div className={descriptionStyling}>
      DESCRIPTION: {this.props.description}
      </div>
      <br/>
      Likes: {this.props.likes}
      <button data-id={this.props.id} onClick={this.props.likeImage}>Like</button>
      </div>
    )
  }
}

export default GalleryItem;

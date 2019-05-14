import React, { Component } from 'react';
import './GalleryItem.css';

class GalleryItem extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      pictures: []
    }
   
  render() {
    let descriptionStyling = 'description';
      
      if (this.state.isDescriptionVisible === true) {
        descriptionStyling = 'description description-show';
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
    return (
        <div key={this.props.index}>
          <img src={this.props.indvImage.path} 
            alt={this.props.indvImage.description} 
            data-id={this.props.index} onClick={this.props.showDescription} 
            className="hover"
          />
         <br/>
         <div className="text">
         {this.props.indvImage.description}
         </div>
         <div className={descriptionStyling}>
            DESCRIPTION: {this.props.indvImage.description}
          </div>
         
         <br/>
         Likes: {this.props.indvImage.likes}
         <button data-id={this.props.index} onClick={this.props.likeImage}>Like</button>
        </div>
    );
  }
}

export default GalleryItem;

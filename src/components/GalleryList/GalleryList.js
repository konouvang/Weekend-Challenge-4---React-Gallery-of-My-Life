import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {
  state = {
    isDescriptionVisible: false,
  }
  
  render() {
    const htmlImage = this.props.images.map((indvImage, i) => {
      console.log(indvImage);
    return (
      <GalleryItem 
        key={i} 
        id={indvImage.id} 
        path={indvImage.path} 
        showDescription={indvImage.description}
        likes={indvImage.likes}
        likeImage={this.props.likeImage} 
      />
    );
  });
  return(
    <div>
        {htmlImage}
    </div>
)
}
}

export default GalleryList;

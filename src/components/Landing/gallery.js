import React from 'react';
import styled from 'styled-components';
import ScrollHorizontal from 'react-scroll-horizontal';

const imageStyle = {
  width: "350px",
  objectFit: "cover"
};

const Gallery = (props) => {
  const { images } = props.contentfulProject;

  const galleryImages = images.map((image, pos) => {
    return <img alt={pos} key={pos} src={image.file.url} style={imageStyle} />
  })

  return (
      <ScrollHorizontal reverseScroll = { true }>
        {galleryImages}
      </ScrollHorizontal>
  );
};

export default Gallery;

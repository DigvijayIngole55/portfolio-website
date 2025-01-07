import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';

const Carousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  if (!Array.isArray(images) || images.length === 0) {
    return <div>No images available</div>;
  }

  return (
    <Slider {...settings}>
      {images.map((src, index) => (
        <div key={index}>
          <img
            src={src}
            alt={`Project Image ${index + 1}`}
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>
      ))}
    </Slider>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;

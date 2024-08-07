import React, { useState, useEffect } from "react";
import './ImageSlider.css';

const ImageSlider = () => {
  const importAll = (r) => r.keys().map(r);
  const images = importAll(require.context('../media_library/imageslider', false, /\.(png|jpe?g|svg)$/));

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="container-xxl slider mt-5">
      <div className="slider__images-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div
            key={index}
            className="slider__image"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>
      <div className="slider__controls">
        <button className="slider__control-left" onClick={goToPrevious}>
          &#10094;
        </button>
        <button className="slider__control-right" onClick={goToNext}>
          &#10095;
        </button>
      </div>
      <div className="slider__dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`slider__dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

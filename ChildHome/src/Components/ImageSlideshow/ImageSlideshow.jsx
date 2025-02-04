import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Slideshow.css"; // Make sure to create this CSS file

const ImageSlideshow = () => {
  const images = [
    "/images/slider1.jpg",
    "/images/slider2.png",
    "/images/slider3.png",
  ]; // Replace with your actual image paths
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slideshow-container">
      <button className="nav-button left" onClick={prevSlide}>
        <FaChevronLeft />
      </button>

      <img
        src={images[currentIndex]}
        alt="Slideshow"
        className="slideshow-image"
      />

      <button className="nav-button right" onClick={nextSlide}>
        <FaChevronRight />
      </button>

      <div className="dots-container">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlideshow;

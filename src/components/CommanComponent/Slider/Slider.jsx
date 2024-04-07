/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import "./Slider.css"; // Import your CSS file

const CardSlider = ({ children, autoSlideInterval = 1000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < children.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === children.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, autoSlideInterval);

    return () => clearInterval(intervalId);
  }, [currentIndex, children.length, autoSlideInterval]);

  return (
    <div className="card-slider h-[400px]">
      <div
        className="cards-container "
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => (
          <div className="card" key={index}>
            {child}
          </div>
        ))}
      </div>
      <button className="prev-btn" onClick={handlePrev}>
        Previous
      </button>
      <button className="next-btn" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default CardSlider;

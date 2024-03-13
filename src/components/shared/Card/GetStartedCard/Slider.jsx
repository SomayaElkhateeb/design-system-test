// Muhammed Abdelhakeem

import React, { useEffect, useState } from "react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

const Slider = ({ slides, children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardWidth = 300;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const slider = document.getElementById("slider");
    slider.style.transition = "transform 0.3s ease-in-out";
    slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }, [currentIndex, cardWidth]);

  return (
    <div className="flex flex-col bg-slate-50 p-2 pt-5 w-[900px] overflow-hidden mb-5 ">
      <div className="flex justify-between w-full">
        <h2 className="text-xl font-medium">Get started with dookan</h2>
        <div className="flex space-x-1">
          <button
            className="bg-white border text-white p-3 rounded justify-center"
            onClick={handlePrev}
          >
            <MdNavigateBefore color="#000" size={20} />
          </button>
          <button
            className="bg-white border text-white p-3 rounded justify-center"
            onClick={handleNext}
          >
            <MdNavigateNext color="#000" size={20} />
          </button>
        </div>
      </div>
      <div
        id="slider"
        className="flex space-x-4 transition-transform duration-300 ease-in-out mt-5"
      >
        {slides.map((media, index) => (
          <div key={index}>
            {React.cloneElement(children, {
              ...media,
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;

// Muhammed Abdelhakeem

import React from "react";
import Slider from "./Slider";

const GetStartedCard = () => {
  const slides = [
    {
      image: "https://placehold.co/600x400",
      title: "How to finish steps",
      description: "Description for Card 1.",
    },
    {
      image: "https://placehold.co/600x400",
      title: "How to register domain",
      description: "Description for Card 2.",
    },
    {
      image: "https://placehold.co/600x400",
      title: "SEO in details",
      description: "Description for Card 3.",
    },
    {
      image: "https://placehold.co/600x400",
      title: "How to finish steps",
      description: "Description for Card 4.",
    },
    {
      image: "https://placehold.co/600x400",
      title: "How to finish steps",
      description: "Description for Card 5.",
    },
  ];

  return (
    <Slider slides={slides}>
      <VCard />
    </Slider>
  );
};

export default GetStartedCard;

const VCard = ({ image, title, description }) => {
  return (
    <div className={`bg-white shadow-lg rounded-lg overflow-hidden w-[250px]`}>
      <div className="w-full">
        <img
          className="w-full h-full object-cover object-center"
          src={image}
          alt={title}
        />
      </div>
      <div className="p-4">
        <h2 className="text-md font-semibold mb-2">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

const HCard = ({ image, title, description }) => {
  return (
    <div className={`bg-white shadow-lg rounded-lg overflow-hidden`}>
      <div className="flex w-80 h-32">
        <div className="w-2/4">
          <img
            className="w-full h-full object-cover object-center"
            src={image}
            alt={title}
          />
        </div>
        <div className="full p-4">
          <h2 className="text-md font-semibold mb-2">{title}</h2>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
};

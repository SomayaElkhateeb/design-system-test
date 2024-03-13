
import TourCard from "./TourCard";
import image from "src/assets/illustration/settings.svg"
const DUMMY_DATA = [
  {
    image: image,
    tip: "The first thing to set on your store, so you can let us know more about you",
  },
  // {
  //   image: image,
  //   tip: "Here you'll add you first product to sell to your next potential customers. ",
  //   link: "https://www.google.com/",
  // },
  // {
  //   image: image,
  //   tip: "Seek help, find FAQs, resources, and chat our customer support if needed.",
  // },
  // {
  //   image: image,
  //   tip: "The first thing to set on your store, so you can let us know more about you",
  // },
  // {
  //   image: image,
  //   tip: "Here you'll add you first product to sell to your next potential customers. ",
  //   link: "https://www.google.com/",
  // },
  // {
  //   image: image,
  //   tip: "Seek help, find FAQs, resources, and chat our customer support if needed.",
  // },
];

const TourContainer = () => {
  return (
    <div className="flex">
      {DUMMY_DATA.map((data, idx) => (
        <TourCard
          key={idx}
          data={data}
          stepNumber={idx + 1}
          stepsNumber={DUMMY_DATA.length}
        />
      ))}
    </div>
  );
};

export default TourContainer;

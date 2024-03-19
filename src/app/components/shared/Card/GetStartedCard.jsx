import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const GetStartedCard = ({ size }) => {
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
    <section className="mt-12">
      {size == "mini" && (
        <Splide
          options={{
            focus: 0,
            perPage: 3,
            perMove: 1,
            drag: "free",
            type: "loop",
            width: 1000,
            height: 300,
            gap: "1rem",
            // padding: "8rem",
            // snap: true,
            omitEnd: true,
          }}
          aria-label="My Favorite Images"
        >
          {slides?.map((slide, index) => (
            <SplideSlide key={index}>
              <HCard {...slide} />
            </SplideSlide>
          ))}
        </Splide>
      )}
      {size == "full" && (
        <Splide
          options={{
            focus: 0,
            perPage: 4,
            perMove: 1,
            drag: "free",
            type: "loop",
            width: 1000,
            height: 300,
            gap: "3rem",
            snap: true,
            omitEnd: true,
          }}
          aria-label="My Favorite Images"
        >
          {slides?.map((slide, index) => (
            <SplideSlide key={index}>
              <VCard {...slide} />
            </SplideSlide>
          ))}
        </Splide>
      )}
    </section>
  );
};

export default GetStartedCard;

const VCard = ({ image, title, description }) => {
  return (
    <div className={`bg-white shadow-sm rounded-lg overflow-hidden w-[250px]`}>
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
    <div className={`bg-white shadow-sm rounded-lg overflow-hidden `}>
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

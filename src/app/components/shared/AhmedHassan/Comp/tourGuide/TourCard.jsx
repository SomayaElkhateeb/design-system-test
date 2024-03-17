const TourCard = ({ data, stepNumber, stepsNumber }) => {
  const { image, tip, link } = data;
  const lastTourCard = stepNumber === stepsNumber;
  return (
    <div className="w-[330px] p-3 h-[200px] border-light-2 border rounded-md flex flex-col justify-between">
      <div className="flex justify-between items-start mb-[6px]">
        <div className="w-[83px] h-[83px] grid place-content-center  border-light-2 border rounded-md">
          <img src={image} alt="icon" className="w-14 " />
        </div>
        {!lastTourCard && <button className="text-primary text-sm">End tour</button>}
      </div>
      <p className="paragraph mb-[14px]">
        {tip}
        {link && (
          <a href={link} className="text-primary">
            Learn More
          </a>
        )}
      </p>
      <div className="flex justify-between items-end">
        <p className="subtitle text-sm">
          {stepNumber}/{stepsNumber}
        </p>
        <div className="gap-2 flex">
          {stepNumber > 1 && <button className="btn-ter">Back</button>}
          <button className="btn-pri">
            {lastTourCard ? "Finish" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourCard;

import { ClockIcon } from "src/app/utils/icons";
import { getImageUrl } from "src/app/utils";

// make one component for trial , clamp --> size fonts , responsive
const FreeTrial = ({ freeTrial=true, trialEnded, title="title", description="des" }) => {
  return (
    <div className="px-6 py-[14px] bg-pri-dark rounded-lg text-white">
      <div className="mb-[5px]">
        {freeTrial && (
          <div className="flex items-center gap-1 ">
            <ClockIcon className="fill-white" />
            <p className="paragrph">Ends in 1 day</p>
          </div>
        )}
        {trialEnded && (
          <img src={getImageUrl("padges/premium-light.svg")} alt="premium" />
        )}
      </div>
      <div className="mb-5">
        <h2 className="title text-clamp-title leading-8 text-white mb-0.5 ">
          {title}
        </h2>
        <p className="paragraph text-[16px] leading-6	 text-inactive">
          {description}
        </p>
      </div>
      <div className="flex gap-4">
        <button className="btn-pri">Subscribe now</button>
        <button className="btn-sec border-white text-white hover:bg-light-1/5 active:bg-light-2/5 disabled:bg-inactive/50 disabled:text-white">
          Subscribe now
        </button>
      </div>
    </div>
  );
};

export default FreeTrial;

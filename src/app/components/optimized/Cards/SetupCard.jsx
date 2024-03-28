import { useState } from "react";
import { Button } from "src/app/components/optimized";
import { SuccessIcon } from "src/app/utils/icons";

const SetupCard = (props) => {
  const { title, description, buttonText, Icon, onButtonClick } = props;
  const [isStepDone, setIsStepDone] = useState(false);

  const handleStepCompletion = () => {
    setIsStepDone(true);
    onButtonClick()
  };

  return (
    <div
      className={`flex flex-col justify-between p-3 rounded-xl w-56 ${
        isStepDone ? "bg-brand-gradient" : "bg-white border-2 border-light-2"
      }`}
    >
      <div>
        <div
          className={`size-[42px] rounded-full mb-1 grid place-content-center ${
            isStepDone ? "bg-white/10 grid" : "bg-pri-top-light"
          }`}
        >
          <Icon className={`w-8 h-8 ${isStepDone ? "fill-white" : "fill-primary"}`}/>
        </div>
        <div className="w-full mb-3">
          <h5
            className={`font-semibold mb-1 text-sm ${
              isStepDone ? "text-white" : " text-title"
            }`}
          >
            {title}
          </h5>
          <p
            className={`font-normal text-sm ${
              isStepDone ? "text-white" : "text-title"
            }`}
          >
            {description}
          </p>
        </div>
      </div>
      <div>
        {isStepDone ? (
          <SuccessIcon className="fill-white" />
        ) : (
          <Button
            className="text-sm place-self-start"
            text={buttonText}
            onClick={handleStepCompletion}
            variant="linkBtn"
          />
        )}
      </div>
    </div>
  );
};
export default SetupCard;

SetupCard.defaultProps = {
  title: "Pages",
  description: "Add a refund policy and terms of service",
  buttonText: "Add",
};

//! How To Use

// import { PagesIcon, PaymentIcon, PhoneIcon } from "src/app/utils/icons";

// const ParentComponent = () => {
//   const method = [
//     {
//       title: "Payment",
//       description:
//         "Add payment method for your store, so your customers can pay you online",
//       buttonText: "Activate",
//     },
//     {
//       title: "Pages",
//       description: "Add a refund policy and terms of service",
//       buttonText: "Add",
//     },
//   ];
//   const iconMap = {
//     Payment: PaymentIcon,
//     Contact: PhoneIcon,
//     Pages: PagesIcon,
//   };
//   return (
//     <div className="flex gap-4">
//       {method.map((item, index) => (
//         <MopileSetupCard
//           key={index}
//           Icon={iconMap[item.title]} // Pass the corresponding icon component based on the title
//           {...item}
//         />
//       ))}
//     </div>
//   );
// };
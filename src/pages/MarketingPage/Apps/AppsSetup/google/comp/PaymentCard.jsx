import { Button } from "src/app/components/optimized";

function PaymentCard({ Icon, title, description, buttonText, onButtonClick }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden mr-3 w-80">
      <div className="flex flex-col  space-y-3 px-4 py-5">
        <div className="flex-shrink-0 items-center justify-center flex rounded-full bg-blue-50 size-16">
          {Icon}
        </div>
        <div className="w-full h-32">
          <h5 className="text-lg font-semibold text-gray-800">{title}</h5>
          <p className="text-gray-800 text-lg">{description}</p>
        </div>
        <div>
          <Button
            className="text-lg"
            text={buttonText}
            onClick={onButtonClick}
            variant="linkBtn"
          />
        </div>
      </div>
    </div>
  );
}

export default PaymentCard;

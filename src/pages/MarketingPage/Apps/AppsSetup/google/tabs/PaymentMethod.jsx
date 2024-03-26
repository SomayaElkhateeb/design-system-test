import { MdPayments } from "react-icons/md";
import PaymentCard from "./PaymentCard";
import { PaymentIcon, PagesIcon, PhoneIcon } from "src/app/utils/icons";

const PaymentMethod = ({ data }) => {
  return (
    <div className="flex flex-col justify-between">
      <p>{data.description}</p>

      <div className="flex mt-5">
        {data &&
          data.method?.map((item) => (
            <PaymentCard
              key={item.id}
              Icon={
                item.icon === "PaymentIcon"
                  ? PaymentIcon
                  : item.icon === "PagesIcon"
                  ? PagesIcon
                  : item.icon === "PhoneIcon"
                  ? PhoneIcon
                  : null
              }
              title={item.title}
              description={item.description}
              buttonText={item.buttonText}
              // onButtonClick={item.onButtonClick}
            />
          ))}
      </div>
    </div>
  );
};

export default PaymentMethod;

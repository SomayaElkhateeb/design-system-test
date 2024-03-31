import { useState } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { MdPayments } from "react-icons/md";
import { RiPagesLine } from "react-icons/ri";
import { MultiChoiceChips, PopupProceed } from "src/app/components/optimized";
import PaymentCard from "../comp/PaymentCard";

const PaymentMethod = ({ data }) => {
  const [isConfirm, setIsConfirm] = useState(false);
  const theOptions = ["Business address", "Email address", "Phone number"];
  const [options, setOptions] = useState([]);
  return (
    <>
      <div className="flex flex-col justify-between">
        <p>{data.description}</p>

        <div className="flex mt-5">
          {data &&
            data.method?.map((item) => (
              <PaymentCard
                key={item.title}
                icon={
                  item.icon === "PaymentIcon" ? (
                    <MdPayments size={32} className="text-primary" />
                  ) : item.icon === "PagesIcon" ? (
                    <RiPagesLine size={32} className="text-primary" />
                  ) : item.icon === "PhoneIcon" ? (
                    <FiPhoneCall size={32} className="text-primary" />
                  ) : null
                }
                title={item.title}
                description={item.description}
                buttonText={item.buttonText}
                onButtonClick={
                  item.title === "Contact"
                    ? () => setIsConfirm(true)
                    : item.title === "Pages"
                    ? null
                    : item.title === "Payment"
                    ? null
                    : null
                }
              />
            ))}
        </div>
      </div>
      <PopupProceed
        isOpen={isConfirm}
        title="Contacts"
        subTitle="Confirm you have 2 contact methods on your online store"
        proceedButton="Confirm"
        onClose={() => setIsConfirm(false)}
      >
        <p className="mt-5">
          Google requires your contact information to be visible on your online
          store, before the checkout, so customers can reach you.{" "}
          <span className="text-primary cursor-pointer">View our tutorial</span>{" "}
          on how to do this
        </p>
        <p className="mt-6">Select the 2 contact methods added:</p>

        <MultiChoiceChips options={theOptions} setOptions={setOptions} />
      </PopupProceed>
    </>
  );
};

export default PaymentMethod;

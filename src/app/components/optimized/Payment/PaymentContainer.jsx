import { useState } from "react";
import { Button, CheckBox } from "src/app/components/optimized";
import { DownIcon } from "src/app/utils/icons";
import { ApplePay, CreditDebitCard, StcPay } from "./PaymentMethod";

const lable = (
  <span className="flex">
    I agree to&nbsp;
    <Button
      text="Terms and Conditions"
      variant="linkBtn"
      //  onClick={}
    />
    ,&nbsp;
    <Button
      text="Privacy Policy"
      variant="linkBtn"
      //  onClick={}
    />
    , and&nbsp;
    <Button
      text="Privacy Policy"
      variant="linkBtn"
      //  onClick={}
    />
    .
  </span>
);

const PaymentContainer = ({ onConfirmPurchase }) => {


  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [agreeToTerms, setAgreeToTerms] = useState(false);


  const handlePaymentMethodChange = (method) => {
    setSelectedPaymentMethod(method === selectedPaymentMethod ? null : method);
  };

  const handleTermsCheckbox = () => {
    setAgreeToTerms(!agreeToTerms);
  };

  const isButtonDisabled = !agreeToTerms || !selectedPaymentMethod;



  return (
    <div className="bg-white border border-border-color rounded-lg  px-4 py-6 w-[718px]">
      <h2 className="text-lg font-bold title mb-4">Select payment method</h2>

      <div className="space-y-4 mb-4">

        <PaymentMethodAccordion
          title="Credit/Debit Card"
          isOpen={selectedPaymentMethod === "Credit"}
          onToggle={() => handlePaymentMethodChange("Credit")}
        >
          <CreditDebitCard />
        </PaymentMethodAccordion>


        <PaymentMethodAccordion
          title="Apple Pay"
          isOpen={selectedPaymentMethod === "applePay"}
          onToggle={() => handlePaymentMethodChange("applePay")}
        >
          <ApplePay />
        </PaymentMethodAccordion>



        <PaymentMethodAccordion
          title="Apple Pay"
          isOpen={selectedPaymentMethod === "StcPay"}
          onToggle={() => handlePaymentMethodChange("StcPay")}
        >
          <StcPay />
        </PaymentMethodAccordion>



      </div>

      <CheckBox
        label={lable}
        onChange={handleTermsCheckbox}
        checked={agreeToTerms}
      />

      <div className="mt-4 flex justify-end">
        <Button
          onClick={onConfirmPurchase}
          disabled={isButtonDisabled}
          text="Confirm Purchase (SAR 50)"
        />
      </div>


    </div>
  );
};

export default PaymentContainer;

const PaymentMethodAccordion = ({ title, isOpen, onToggle, children }) => {
  return (
    <div
      className={`border border-border-color rounded mb-4 ${
        isOpen ? "bg-light-1" : "bg-white"
      }`}
    >
      <button
        type="button"
        className="w-full p-4 flex justify-between items-center text-left focus:outline-none"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <h2 className="title">{title}</h2>
        <DownIcon
          className={`transition-all fill-hint duration-300 ${
            isOpen ? "rotate-180" : "bg-white"
          }`}
        />
      </button>
      <div className={`p-4 ${!isOpen && "hidden"}`} aria-hidden={!isOpen}>


        {children}
      </div>
    </div>
  );
};

import {
  Button,
  CheckBox,
  PaymentMethodAccordion,
} from "src/app/components/optimized";
import usePayment from "./usePayment";
import PaymentForm from "./PaymentForm";

const checkboxLable = (
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
      text="Selling policy"
      variant="linkBtn"
      //  onClick={}
    />
    .
  </span>
);
const PaymentContainer = () => {
  // Payment Custom Hook
  const {
    errors,
    paymentData,
    agreeToTerms,
    isButtonDisabled,
    selectedPaymentMethod,
    paymentDataHandler,
    handleTermsCheckbox,
    handlePaymentMethodChange,
  } = usePayment();

  const onConfirmPurchase = (e) => {
    e.preventDefault();
    // if validatation is Ok
    // make the payment logic
    console.log(paymentData);
  };

  // Payment Methods Array
  const paymentMethods = [
    { title: "Credit/Debit Card", name: "credit" },
    { title: "Apple Pay", name: "applePay" },
    { title: "STC Pay", name: "stcPay" },
  ];

  return (
    <form className="bg-white border border-border-color rounded-lg px-4 py-6 w-[718px]">
      <h2 className="text-lg font-bold title mb-4">Select payment method</h2>
      {/* Mapping on Payment Methods */}
      <div className="space-y-4 mb-4">
        {paymentMethods.map((item, index) => (
          <PaymentMethodAccordion
            key={index}
            title={item.title}
            isOpen={selectedPaymentMethod === item.name}
            onToggle={() => handlePaymentMethodChange(item.name)}
          >
            <PaymentForm
              data={paymentData}
              onDataChange={paymentDataHandler}
              errors={errors}
            />
          </PaymentMethodAccordion>
        ))}
      </div>
      {/*Terms and Conditions checkBox*/}
      <CheckBox
        label={checkboxLable}
        onChange={handleTermsCheckbox}
        checked={agreeToTerms}
      />
      {/*Confirm Button*/}
      <div className="mt-4 flex justify-end">
        <Button
          onClick={onConfirmPurchase}
          disabled={isButtonDisabled}
          text="Confirm Purchase (SAR 50)"
          type="submit"
        />
      </div>
    </form>
  );
};

export default PaymentContainer;

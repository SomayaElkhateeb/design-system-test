import { useEffect, useState } from "react";

import { TooltipIcon } from "src/app/utils/icons";
import { InputRow } from "..";
import { getImageUrl } from "src/app/utils";
import usePaymentValidation from "./usePaymentValidation";

export const CreditDebitCard = () => {
  const [creditData, setCreditData] = useState({});

  return <PaymentFrom setData={handleUpdateCreditData} />;
};

export const ApplePay = () => {
  const [applePayData, setApplePayData] = useState({});
  return <PaymentFrom setData={applePayData} />;
};

export const StcPay = () => {
  const [stcPayData, setStcPayData] = useState({});

  return <PaymentFrom setData={setStcPayData} />;
};

const PaymentFrom = ({ setData }) => {
  return (
    <section>
      <div className="grid grid-cols-4 gap-6">
        <div className="col-span-2">
          <InputRow
            label={QuantityLable}
            errors={errors.quantity}
            value={quantity}
            onChange={handleQuantityChange}
          />
        </div>
        <div className="col-span-1">
          <InputRow
            label="Expiry date"
            errors={errors.expiryDate}
            value={expiryDate}
            onChange={handleExpiryDateChange}
          />
        </div>
        <div className="col-span-1">
          <InputRow
            label={CvvLable}
            errors={errors.cvv}
            value={cvv}
            onChange={handleCVVChange}
          />
        </div>
      </div>
    </section>
  );
};

const CvvLable = (
  <span className="flex">
    CVV&nbsp;
    <TooltipIcon className="fill-secondary" />
  </span>
);
const CreditTransactions = () => {
  return (
    <div className="flex gap-1">
      <img src={getImageUrl("companies/mada.svg")} className="w-5 h-4" />
      <img src={getImageUrl("companies/visa.svg")} className="w-5 h-4" />
      <img src={getImageUrl("companies/amex.svg")} className="w-5 h-4" />
      <img src={getImageUrl("companies/masterCard.svg")} className="w-5 h-4" />
    </div>
  );
};
const QuantityLable = (
  <span className="flex justify-between">
    <p>Quantity</p>
    <CreditTransactions />
  </span>
);

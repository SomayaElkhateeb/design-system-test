import { useState } from "react";
import { InputRow } from "src/app/components/optimized";

const OptionsMinimumReq = ({ optionType }) => {
  const [minimumPrice, setMinimumPrice] = useState("");
  const [minimumQuantity, setMinimumQuantity] = useState("");

  console.log("minimumPrice", minimumPrice);
  console.log("minimumQuantity", minimumQuantity);
  return (
    <>
      {optionType === "Minimum price" && (
        <div className="w-[390px]">
          <InputRow
            value={minimumPrice}
            onChange={setMinimumPrice}
            label="Mini purchase price"
          />
        </div>
      )}
      {optionType === "Minimum quantity" && (
        <div className="w-[390px]">
          <InputRow
            value={minimumQuantity}
            onChange={setMinimumQuantity}
            label="Mini purchase quantity"
          />
        </div>
      )}
    </>
  );
};

export default OptionsMinimumReq;

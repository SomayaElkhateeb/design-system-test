import React, { useState } from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

const InputRangeSlider = () => {
  const [range, setRange] = useState({ min: 2, max: 10 });
  return (
    <div className="w-48">
      <InputRange
        maxValue={20}
        minValue={0}
        value={range}
        // classNames="bg-blue-500"
        onChange={(value) => setRange(value)}
      />
    </div>
  );
};

export default InputRangeSlider;

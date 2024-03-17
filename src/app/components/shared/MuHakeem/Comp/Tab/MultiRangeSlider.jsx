import { useState, useEffect } from "react";
import { RangeSlider } from "react-double-range-slider";
import "react-double-range-slider/dist/cjs/index.css";

export default function MultiRangeSlider() {
  const [range, setRange] = useState({});

  useEffect(() => {
    if (range) {
      console.log("Range:", range);
    }
  }, [range]);

  return (
    <div className="mt-5">
      <RangeSlider
        value={{ min: 0, max: 500 }}
        from={1}
        to={500}
        onChange={(e) => {
          setRange({
            min: e.min,
            max: e.max,
            minIndex: e.minIndex,
            maxIndex: e.maxIndex,
          });
        }}
        tooltipPosition="over"
        tooltipVisibility="always"
      />
    </div>
  );
}

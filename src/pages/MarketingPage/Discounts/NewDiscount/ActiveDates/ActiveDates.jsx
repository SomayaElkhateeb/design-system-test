import { useState } from "react";
import { Button, DatePicker, TimePicker } from "src/app/components/optimized";
import { IoIosAddCircle } from "react-icons/io";
import { IoIosClose } from "react-icons/io";

const ActiveDates = () => {
  const [time, setTime] = useState({
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
  });
  console.log(time.startDate);
  const [endDate, setEndDate] = useState(false);

  const handleStartDateChange = (date) => {
    setTime((prevTime) => ({
      ...prevTime,
      startDate: date, // Update startDate when DatePicker value changes
    }));
  };

  return (
    <div className="bg-white w-full border  border-constrained rounded-md p-[18px]">
      <h3 className="text-title font-semibold mb-2">Active dates</h3>
      <div className="flex gap-4 my-[18px]">
        <DatePicker
          label="start date"
          value={time.startDate}
          onChange={handleStartDateChange}
        />
        <TimePicker label="start time" />
      </div>

      {endDate && (
        <div className="flex gap-4 my-[18px]">
          <DatePicker label="end date" />
          <TimePicker label="end time" />
        </div>
      )}

      <div className="w-fit" onClick={() => setEndDate(!endDate)}>
        <Button
          variant="ter"
          text={`${endDate ? "remove end date" : "add end date"}`}
          LeftIcon={endDate ? IoIosClose : IoIosAddCircle}
        />
      </div>
    </div>
  );
};

export default ActiveDates;

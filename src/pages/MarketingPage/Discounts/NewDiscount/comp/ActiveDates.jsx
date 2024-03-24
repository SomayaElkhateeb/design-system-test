import { useState } from "react";
import { Button } from "src/app/components/optimized";
import { IoIosAddCircle } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import { getInitialDate } from "src/app/utils";

const ActiveDates = () => {
  const [endDate, setEndDate] = useState(false);
  return (
    <div className="bg-white w-full border  border-constrained rounded-md p-[18px]">
      <h3 className="text-title font-semibold mb-2">Active dates</h3>
      <div className="flex gap-4 my-[18px]">
        <DateInput />
        <TimeInput />
      </div>

      {endDate && (
        <div className="flex gap-4 my-[18px]">
          <DateInput label="End date" />
          <TimeInput label="End time" />
        </div>
      )}

      <div className="w-fit" onClick={() => setEndDate(!endDate)}>
        <Button
          variant="tertiaryBtn"
          text={`${endDate ? "remove end date" : "add end date"}`}
          LeftIcon={endDate ? IoIosClose : IoIosAddCircle}
        />
      </div>
    </div>
  );
};

export default ActiveDates;

const DateInput = ({ label = "Start date" }) => {
  const [selectedDate, setSelectedDate] = useState(getInitialDate());

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className="flex flex-col">
      <label className="text-pri-dark text-sm">{label}</label>
      <input
        className="border border-constrained px-1 text-hint w-[186px] h-[35px] rounded"
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
      />
    </div>
  );
};

const TimeInput = ({ label = "Start time" }) => {
  const [selectedTime, setSelectedTime] = useState("00:00"); // Set initial value to '00:00'

  // Handler function to update the selected time
  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  return (
    <div className="flex flex-col">
      <label className="text-pri-dark text-sm">{label}</label>
      <input
        className="border border-constrained px-1 text-hint w-[186px] h-[35px] rounded"
        type="time"
        value={selectedTime}
        onChange={handleTimeChange}
      />
    </div>
  );
};

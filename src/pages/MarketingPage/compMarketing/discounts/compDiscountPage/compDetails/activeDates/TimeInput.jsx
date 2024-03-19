import { useState } from 'react';

const TimeInput = () => {
  const [selectedTime, setSelectedTime] = useState('00:00'); // Set initial value to '00:00'

  // Handler function to update the selected time
  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  return (
    <div className="flex items-center">
      <input
        type="time"
        value={selectedTime}
        onChange={handleTimeChange}
      />
    </div>
  );
};

export default TimeInput;

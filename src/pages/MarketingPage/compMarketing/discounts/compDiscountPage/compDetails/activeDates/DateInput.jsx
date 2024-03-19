import { useState } from 'react';

function getInitialDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

const DateInput = ({label= "Start date"}) => {
    const [selectedDate, setSelectedDate] = useState(getInitialDate());

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    return (
        <div className="flex flex-col">
            <label className='text-pri-dark text-sm'>{label}</label>
            <input
            className=''
                type="date"
                value={selectedDate}
                onChange={handleDateChange}
            />
        </div>
    );
};

export default DateInput;

import { HeaderSettings, ToggleSwitch } from "src/app/components/optimized";
import BasicInfo from "./comp/BasicInfo/BasicInfo";
import CustomerSegment from "./comp/CustomerSegment/CustomerSegment";
import MinimumRequirements from "./comp/MinimumRequirements/MinimumRequirements";
import ActiveDates from "./comp/ActiveDates";
import { getInitialDate } from "src/app/utils";
import { useDispatch } from "react-redux";
import { forwardRef, useRef, useState } from "react";
import { insertDiscount } from "src/app/store/slices/marketingSlice/marketingSlice";

const NewDiscount = () => {
  const dispatch = useDispatch();
  const nameRef = useRef(null);
  const discountRef = useRef(null);
  const salsesRef = useRef(null);
  const endDateRef = useRef(null);

  const handleSaveChanges = () => {
    const data = {
      name: nameRef.current.value,
      discount: parseFloat(discountRef.current.value),
      sales: parseFloat(salsesRef.current.value),
      endDate: endDateRef.current.value,
    };

    dispatch(insertDiscount(data));

    // Reset input values
    nameRef.current.value = "";
    discountRef.current.value = "";
    salsesRef.current.value = "";
    endDateRef.current.value = getInitialDate();
  };

  return (
    <div>
      <HeaderSettings
        title="Add discount"
        btn2={{
          text: "save changes",
          onClick: handleSaveChanges,
        }}
      />

      <div className="p-4 flex justify-between gap-7">
        <div className="w-full flex flex-col gap-[18px]">
          <BasicInfo />
          <input type="text" ref={nameRef} placeholder="name" />
          <input type="number" ref={discountRef} placeholder="discount" />
          <DateInput label="End date" ref={endDateRef} />
          <input type="number" ref={salsesRef} placeholder="salse" />

          <CustomerSegment />
          <MinimumRequirements />
          <ActiveDates />
        </div>

        <div className="bg-white w-[277px] h-fit border p-3 border-constrained rounded-md flex flex-col gap-[18px]">
          <h3 className="text-title font-semibold">Quick actions</h3>
          <ToggleSwitch />
        </div>
      </div>
    </div>
  );
};

export default NewDiscount;

const DateInput = forwardRef(({ label = "Start date" }, ref) => {
  const [selectedDate, setSelectedDate] = useState(getInitialDate());

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className="flex flex-col">
      <label className="text-pri-dark text-sm">{label}</label>
      <input
        ref={ref}
        className="border border-constrained px-1 text-hint w-[186px] h-[35px] rounded"
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
      />
    </div>
  );
});

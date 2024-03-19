import { TertiaryBtn } from "src/app/components/shared";
import { DateInput, TimeInput } from "..";
import { AddFillIcon } from "src/app/utils/icons";


const ActiveDates = () => {
  return (

    <div className="bg-white w-full border border-constrained rounded-md p-[18px]">
      <h3 className="text-title font-semibold mb-2">Active dates</h3>
      <DateInput />
      <TimeInput />

      <TertiaryBtn text="add end date" IconLeft={AddFillIcon}/>
    </div>

  );
};

export default ActiveDates;
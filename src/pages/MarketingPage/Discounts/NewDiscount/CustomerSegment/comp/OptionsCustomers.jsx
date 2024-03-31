import { Button, SelectItems } from "src/app/components/optimized";
import { FaChevronRight } from "react-icons/fa";
import useCustomerSegment from "../useCustomerSegment";
import { selectCustomerGroups, selectCustomers } from "./data";

const OptionsCustomers = ({ optionType }) => {
  return (
    <>
      {optionType === "All customers" && <h1>All customers</h1>}
      {optionType === "Specific customer groups" && <SpecificCustomerGroups />}
      {optionType === "Specific customers" && <SpecificCustomers />}
    </>
  );
};

export default OptionsCustomers;

const SpecificCustomerGroups = () => {
  const { showGroups, setShowGroups, hideSelectGroup } = useCustomerSegment();
  console.log("showGroups", showGroups);
  return (
    <div className="mt-[18px] flex flex-col gap-[18px]">
      <div>
        <Button
          variant="sec"
          text="select groups"
          RightIcon={FaChevronRight}
          onClick={setShowGroups}
        />
      </div>

      {showGroups && (
        <SelectItems
          onClose={hideSelectGroup}
          select={selectCustomerGroups}
          title="Select groups"
          varient="groups"
        />
      )}
    </div>
  );
};

const SpecificCustomers = () => {
  const { showCustomers, setShowCustomers, hideSelectCustomers } =
    useCustomerSegment();
  console.log("showCustomers", showCustomers);
  return (
    <div className="mt-[18px] flex flex-col gap-[18px]">
      <div>
        <Button
          variant="sec"
          text="select customers"
          RightIcon={FaChevronRight}
          onClick={setShowCustomers}
        />
      </div>

      {showCustomers && (
        <SelectItems
          onClose={hideSelectCustomers}
          select={selectCustomers}
          title="Select customers"
          varient="customers"
        />
      )}
    </div>
  );
};

import SingleChoiceChips from "src/app/components/optimized/ChoiceChips/SingleChoiceChips";
import useCustomerSegment from "./useCustomerSegment";
import OptionsCustomers from "./comp/OptionsCustomers";
import { customerSegmentOptions } from "./comp/data";

const CustomerSegment = () => {
  const { setCustomerSegment, customerSegment } = useCustomerSegment();
  console.log("customerSegment", customerSegment);
  return (
    <section className="bg-white w-full border border-constrained rounded-md p-[18px]">
      <h3 className="text-title font-semibold mb-2">Customer Segment</h3>
      <SingleChoiceChips
        options={customerSegmentOptions}
        setOption={setCustomerSegment}
      />

      <OptionsCustomers optionType={customerSegment} />
    </section>
  );
};

export default CustomerSegment;

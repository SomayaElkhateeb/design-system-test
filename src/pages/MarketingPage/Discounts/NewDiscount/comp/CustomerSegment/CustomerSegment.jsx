import SelectButtons from "../../../comp/SelectButtons";
import { DiscountCustomerSegment } from "../../../comp/data";

const CustomerSegment = () => {
  return (
    <div className="bg-white w-full border border-constrained rounded-md p-[18px]">
      <h3 className="text-title font-semibold mb-2">Customer segment</h3>
      <SelectButtons data={DiscountCustomerSegment} />
    </div>
  );
};

export default CustomerSegment;

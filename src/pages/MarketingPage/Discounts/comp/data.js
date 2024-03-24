import { nanoid } from "nanoid";
import FixedAmount from "../NewDiscount/comp/BasicInfo/comp/discountType/FixedAmount";
import SpecificCategory from "../NewDiscount/comp/BasicInfo/comp/applyTo/SpecificCategory";
import BuyAndGet from "../NewDiscount/comp/BasicInfo/comp/applyTo/BuyAndGet";
import SpecificPercentage from "../NewDiscount/comp/BasicInfo/comp/applyTo/SpecificPercentage";
import SelectGroup from "../NewDiscount/comp/CustomerSegment/comp/SelectGroup";
import SelectCustomers from "../NewDiscount/comp/CustomerSegment/comp/SelectCustomers";
import MinimumPrice from "../NewDiscount/comp/MinimumRequirements/comp/MinimumPrice";
import MinimumQuantity from "../NewDiscount/comp/MinimumRequirements/comp/MinimumQuantity";

// Discount Type
export const discountType = [
  { id: nanoid(), value: 0, textBtn: "Percentage", component: null },
  { id: nanoid(), value: 1, textBtn: "Fixed amount", component: FixedAmount },
  { id: nanoid(), value: 2, textBtn: "Free shipping", component: null },
];

// Apply
export const applyTo = [
  { id: nanoid(), textBtn: "All products", component: null },
  { id: nanoid(), textBtn: "Specific category", component: SpecificCategory },
  { id: nanoid(), textBtn: "Specific products", component: null },
  { id: nanoid(), textBtn: "Buy x get y", component: BuyAndGet },
];

// Apply Customer Gets
export const customerGets = [
  { id: nanoid(), textBtn: "Free", component: null },
  { id: nanoid(), textBtn: "50% offer", component: null },
  {
    id: nanoid(),
    textBtn: "Specific percentage",
    component: SpecificPercentage,
  },
];

// Discount Customer Segment
export const DiscountCustomerSegment = [
  { id: nanoid(), textBtn: "All customers", component: null },
  { id: nanoid(), textBtn: "Specific customer groups", component: SelectGroup },
  { id: nanoid(), textBtn: "Specific customers", component: SelectCustomers },
];

// Discount Minimun Requirements
export const DiscountMinimunRequirements = [
  { id: nanoid(), textBtn: "Minimum price", component: MinimumPrice },
  { id: nanoid(), textBtn: "Minimum quantity", component: MinimumQuantity },
];

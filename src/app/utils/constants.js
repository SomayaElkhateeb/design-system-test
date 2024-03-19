import { nanoid } from "nanoid";
import { getImageUrl } from ".";

// IMPORT ICONS FROM icons.jsx
import {
  DashboardIcon,
  ProductsIcon,
  OrdersIcon,
  CustomersIcon,
  AnalyticsIcon,
  ReviewsIcon,
  PagesIcon,
  AdsIcon,
  AppsIcon,
  ServicesIcon,
  SettingsIcon,
  StoresIcon,
  CopyIcon,
  ExportIcon,
  RemoveIcon,
  ShippingIcon,
} from "./icons";

// IMPORT COMPONENT FROM MARKETING PAGE
// import { SelectCustomers, SelectGroup, MinimumPrice, MinimumQuantity, FixedAmount } from "src/pages/MarketingPage/compMarketing/discounts/compDiscountPage";

import SelectCustomers from "src/pages/MarketingPage/compMarketing/discounts/compDiscountPage/compDetails/customerSegment/SelectCustomers";
import SelectGroup from "src/pages/MarketingPage/compMarketing/discounts/compDiscountPage/compDetails/customerSegment/SelectGroup";
import MinimumPrice from "src/pages/MarketingPage/compMarketing/discounts/compDiscountPage/compDetails/minimumRequirements/MinimumPrice";
import MinimumQuantity from "src/pages/MarketingPage/compMarketing/discounts/compDiscountPage/compDetails/minimumRequirements/MinimumQuantity";
import FixedAmount from "src/pages/MarketingPage/compMarketing/discounts/compDiscountPage/compDetails/basicInfo/discountType/FixedAmount";
import SpecificCategory from "src/pages/MarketingPage/compMarketing/discounts/compDiscountPage/compDetails/basicInfo/applyTo/SpecificCategory";
import BuyAndGet from "src/pages/MarketingPage/compMarketing/discounts/compDiscountPage/compDetails/basicInfo/applyTo/BuyAndGet";
import SpecificPercentage from "src/pages/MarketingPage/compMarketing/discounts/compDiscountPage/compDetails/basicInfo/applyTo/SpecificPercentage";
//  SIDEBAR
export const sidebarLinks = [
  { id: nanoid(), path: "/", name: "Home", Icon: DashboardIcon },
  { id: nanoid(), path: "products", name: "Products", Icon: ProductsIcon },
  { id: nanoid(), path: "orders", name: "Orders", Icon: OrdersIcon },
  { id: nanoid(), path: "customers", name: "Customers", Icon: CustomersIcon, },
  { id: nanoid(), path: "analytics", name: "Analytics", Icon: AnalyticsIcon },
  { id: nanoid(), path: "reviews", name: "Reviews", Icon: ReviewsIcon },
  { id: nanoid(), path: "pages", name: "Pages", Icon: PagesIcon },
  { id: nanoid(), path: "marketing", name: "Marketing", Icon: AdsIcon },
  { id: nanoid(), path: "apps", name: "Apps", Icon: AppsIcon },
  { id: nanoid(), path: "services", name: "Services", Icon: ServicesIcon },
  { id: nanoid(), path: "settings", name: "Settings", Icon: SettingsIcon },
  { id: nanoid(), path: "store", name: "Store", Icon: StoresIcon },
];

// Icons Social media
export const socialLinks = [
  { id: nanoid(), img: getImageUrl("social/facebook.svg"), url: "/" },
  { id: nanoid(), img: getImageUrl("social/google.svg"), url: "/" },
  { id: nanoid(), img: getImageUrl("social/gmail.svg"), url: "/" },
  { id: nanoid(), img: getImageUrl("social/tiktok.svg"), url: "/" },
];

// 1. Sorting
export const sortMenus = [
  { id: nanoid(), text: 'Name A to Z' },
  { id: nanoid(), text: 'Name Z to A' },
  { id: nanoid(), text: 'SKU Ascending' },
  { id: nanoid(), text: 'SKU Descending' },
  { id: nanoid(), text: 'Price Low in first' },
  { id: nanoid(), text: 'Price High in first' },
  { id: nanoid(), text: 'Date Added' },
  { id: nanoid(), text: 'Date modified' },
]

// 2. Control Products Menus
export const controlProductsMenus = [
  { id: nanoid(), Icon: CopyIcon, text: 'Copy product link' },
  { id: nanoid(), Icon: AnalyticsIcon, text: 'Product report' },
  { id: nanoid(), Icon: OrdersIcon, text: 'Product orders' },
  { id: nanoid(), Icon: ExportIcon, text: 'Export product orders XLS' },
  { id: nanoid(), Icon: RemoveIcon, text: 'Delete product' },
]

// 3. Product Status
export const productStatus = [
  {
    id: nanoid(),
    Icon: ShippingIcon,
    text: 'Simple Product',
    description: 'You don’t need advanced options to fill',
    detailed: true,

  },
  {
    id: nanoid(),
    Icon: ShippingIcon,
    text: 'Configurable product',
    description: 'You need all options available',
    detailed: false,
  },
  {
    id: nanoid(),
    Icon: ShippingIcon,
    text: 'Virtual Product',
    description: 'Services, ebooks, Downloadable',
    detailed: true,
  },
  {
    id: nanoid(),
    Icon: ShippingIcon,
    text: 'Food',
    description: 'Food & Drinks have special way shipping',
    detailed: false,
  },
  {
    id: nanoid(),
    Icon: ShippingIcon,
    text: 'Bundle',
    description: 'Collection of related products',
    detailed: false,
  },
]

// 1. CheckBox
export const check = [
  { id: nanoid(), text: 'Place your text' },
  { id: nanoid(), text: 'Place your text' },
  { id: nanoid(), text: 'Place your text' },
  { id: nanoid(), text: 'Place your text' },
  { id: nanoid(), text: 'Place your text' },
]

//           DATA DISCOUNT














// Discount Basic Info
export const DiscountBasicInfo = [

  {
    id: nanoid(),
    title: "Discount Type",
    btns: [
      { id: nanoid(), textBtn: "Percentage", component: null },
      { id: nanoid(), textBtn: "Fixed amount", component: FixedAmount },
      { id: nanoid(), textBtn: "Free shipping", component: null },
    ]
  },
  {
    id: nanoid(),
    title: "Apply to",
    btns: [
      {id: nanoid(), textBtn: "All products"},
      {id: nanoid(), textBtn: "Specific category"},
      {id: nanoid(), textBtn: "Specific products"},
      {id: nanoid(), textBtn: "Buy x get y"},
    ]
  }

]








{
  name: 'somaya',
  discountType: 'fexid',


}
















// Discount Type
export const discountType = [
  { id: nanoid(),value: 0 , textBtn: "Percentage", component: null },
  { id: nanoid(),value: 1 , textBtn: "Fixed amount", component: FixedAmount },
  { id: nanoid(),value: 2 , textBtn: "Free shipping", component: null },
]

// Apply
export const applyTo = [
  { id: nanoid(), textBtn: "All products", component: null },
  { id: nanoid(), textBtn: "Specific category", component: SpecificCategory },
  { id: nanoid(), textBtn: "Specific products", component: null },
  { id: nanoid(), textBtn: "Buy x get y", component: BuyAndGet },
]

// Apply Customer Gets
export const customerGets = [
  { id: nanoid(), textBtn: "Free", component: null },
  { id: nanoid(), textBtn: "50% offer", component: null },
  { id: nanoid(), textBtn: "Specific percentage", component: SpecificPercentage },
]

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
]
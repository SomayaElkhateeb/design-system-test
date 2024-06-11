// ORDER PAGE
// Details Comps
export { default as OrderNo } from './Orders/OrderDetails/OrderNo';
export { default as OrderItems } from './Orders/OrderDetails/OrderItems';
export { default as CustomerNote } from './Orders/OrderDetails/CustomerNote';
export { default as OrderHistory } from './Orders/OrderDetails/OrderHistory';
export { default as Checkout } from './Orders/OrderDetails/Checkout';
export { default as CustomerForm } from './Orders/OrderDetails/Forms/CustomerForm';
export { default as AddressForm } from './Orders/OrderDetails/Forms/AddressForm';
export { default as CheckoutDetailsForm } from './Orders/OrderDetails/Forms/CheckoutDetailsForm';
export { default as OrderStatus } from './Orders/OrderDetails/Forms/OrderStatus';
export { default as CustomerNoteForm } from './Orders/OrderDetails/Forms/CustomerNoteForm';
export { default as OrderItemForm } from './Orders/OrderDetails/Forms/OrderItemForm';
export { default as RowOrderItems } from './Orders/OrderDetails/Comp/RowOrderItems';
export { default as ProductItem } from './Orders/OrderDetails/Comp/ProductItem';
export { default as OrderItemContain } from './Orders/OrderDetails/Comp/OrderItemContain';

// ADD ORDER
export { default as Customer } from './Orders/AddOrder/Customer';
export { default as Products } from './Orders/AddOrder/Products';
export { default as Address } from './Orders/AddOrder/Address';
export { OrderAddress } from './Orders/AddOrder/OrderAddress';
export { default as AddCheckout } from './Orders/AddOrder/AddCheckout';

// MARKETING PAGE
// Discount and Coupon page
export { default as TopSectionDiscountAndCoupons } from './discount/TopSectionDiscountAndCoupons';
export { default as DiscountsTable } from './discount/Table/DiscountsTable';
export { default as ActiveDates } from './discount/Comp/ActiveDates';
export { default as MinimumRequirements } from './discount/Comp/MinimumRequirements';
export { default as CustomerSegment } from './discount/Comp/CustomerSegment/CustomerSegment';
export { default as SpecificGroups } from './discount/Selectors/SpecificGroups';
export { default as SpecificCustomers } from './discount/Selectors/SpecificCustomers';
export { default as DiscountTypesOptions } from './discount/Comp/DiscountTypesOptions';

// REVIEWS PAGE
export { ProductReviews } from './ReviewsPage/ProductReviews';
export { AsksAndQueries } from './ReviewsPage/AsksAndQueries';
export { StoreReviews } from './ReviewsPage/StoreReviews';
export { AppReviews } from './ReviewsPage/AppReviews';
export { ReviewsCard } from './ReviewsPage/_comp/ReviewsCard';

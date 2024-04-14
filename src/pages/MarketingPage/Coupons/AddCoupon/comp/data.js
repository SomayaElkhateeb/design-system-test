// coupon
const headerData = [
	{ id: 1, name: 'coupon name' },
	{ id: 2, type: 'discount' },
	{ id: 3, date: 'ends at' },
	{ id: 4, active: 'active?' },
	{ id: 5, sales: 'sales' },
	{ id: 6, used: 'used' },
	{ id: 7, actions: 'actions' },
];

// add new coupon
const applyToOptions = ['All products', 'Specific category', 'Specific products'].map((option) => option);

const discountTypesOptions = ['Percentage', 'Fixed amount', 'Free shipping'].map((option) => option);

const customerGetsOptions = ['Free', '50% offer', 'Specify percentage'].map((option) => option);

const customerSegmentOptions = ['All customers', 'Specific customer groups', 'Specific customers'].map(
	(option) => option,
);

const minimumRequirementsOptions = ['Minimum price', 'Minimum quantity'].map((option) => option);

export {
	headerData,
	applyToOptions,
	discountTypesOptions,
	customerGetsOptions,
	customerSegmentOptions,
	minimumRequirementsOptions,
};

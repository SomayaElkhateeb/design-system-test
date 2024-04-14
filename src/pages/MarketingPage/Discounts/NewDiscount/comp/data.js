const applyToOptions = ['All products', 'Specific category', 'Specific products', 'Buy x get y'].map(
	(option) => option,
);

const discountTypesOptions = ['Percentage', 'Fixed amount', 'Free shipping'].map((option) => option);

const customerGetsOptions = ['Free', '50% offer', 'Specify percentage'].map((option) => option);

const customerSegmentOptions = ['All customers', 'Specific customer groups', 'Specific customers'].map(
	(option) => option,
);
const minimumRequirementsOptions = ['Minimum price', 'Minimum quantity'].map((option) => option);

const headerData = [
	{ id: 1, name: 'discount name' },
	{ id: 2, type: 'discount' },
	{ id: 3, date: 'ends at' },
	{ id: 4, active: 'active?' },
	{ id: 5, sales: 'sales' },
	{ id: 6, actions: 'actions' },
];
export {
	applyToOptions,
	discountTypesOptions,
	customerGetsOptions,
	customerSegmentOptions,
	minimumRequirementsOptions,
	headerData,
};

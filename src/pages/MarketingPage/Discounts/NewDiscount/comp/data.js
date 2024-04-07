const applyToOptions = ['All products', 'Specific category', 'Specific products', 'Buy x get y'].map(
	(option) => option,
);

const discountTypesOptions = ['Percentage', 'Fixed amount', 'Free shipping'].map((option) => option);

const customerGetsOptions = ['Free', '50% offer', 'Specify percentage'].map((option) => option);

const customerSegmentOptions = ['All customers', 'Specific customer groups', 'Specific customers'].map(
	(option) => option,
);

const minimumRequirementsOptions = ['Minimum price', 'Minimum quantity'].map((option) => option);
const selectCustomerGroups = [
	{
		id: 1,
		count: 54,
		title: 'Brooklyn Simmons',
		subTitle: 'This group is high niche',
	},
	{
		id: 2,
		count: 35,
		title: 'Top clients',
		subTitle: 'This group is high niche',
	},
	{
		id: 3,
		count: 50,
		title: 'Loyal clients',
		subTitle: 'This group is high niche',
	},
];
const selectCustomers = [
	{
		id: 1,
		fName: 'walied',
		lName: 'sayed',
		subTitle: 'nathan.roberts@example.com',
		img: 'https://www.pexels.com/photo/duckling-on-black-soil-during-daytime-162140/',
	},
	{
		id: 2,
		fName: 'ahmed',
		lName: 'ramy',
		subTitle: 'nathan.roberts@example.com',
		img: 'https://www.pexels.com/photo/duckling-on-black-soil-during-daytime-162140/',
	},
	{
		id: 3,
		fName: 'salma',
		lName: 'sayed',
		subTitle: 'nathan.roberts@example.com',
		img: 'https://www.pexels.com/photo/duckling-on-black-soil-during-daytime-162140/',
	},
	{
		id: 4,
		fName: 'salma',
		lName: '',
		subTitle: 'nathan.roberts@example.com',
		img: 'https://www.pexels.com/photo/duckling-on-black-soil-during-daytime-162140/',
	},
];

const selectProducts = [
	{
		id: 1,
		img: 'https://www.pexels.com/photo/duckling-on-black-soil-during-daytime-162140/',
		title: 'Bathroom products',
		subTitle: 'Blankets',
	},
	{
		id: 2,
		img: 'https://www.pexels.com/photo/duckling-on-black-soil-during-daytime-162140/',
		title: 'Baby & children',
		subTitle: 'Blankets',
	},
	{
		id: 3,
		img: 'https://www.pexels.com/photo/duckling-on-black-soil-during-daytime-162140',
		title: 'Bathroom products',
		subTitle: 'Blankets',
	},
];

const selectCategories = [
	{
		id: 1,
		img: 'https://www.pexels.com/photo/duckling-on-black-soil-during-daytime-162140',
		title: 'Jumpsuits & Rompers',
		subTitle: 'Lorem Ipsum is simply dummy text of',
	},
	{
		id: 2,
		img: 'https://www.pexels.com/photo/duckling-on-black-soil-during-daytime-162140',
		title: 'Shoes',
		subTitle: 'Lorem Ipsum is simply dummy text of',
	},
	{
		id: 3,
		img: 'https://www.pexels.com/photo/duckling-on-black-soil-during-daytime-162140/',
		title: 'Jumpsuits & Rompers',
		subTitle: 'Lorem Ipsum is simply dummy text of',
	},
	{
		id: 4,
		img: 'https://www.pexels.com/photo/duckling-on-black-soil-during-daytime-162140/',
		title: 'Dinnerware & Tableware',
		subTitle: 'Lorem Ipsum is simply dummy text of',
	},
];

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
	selectProducts,
	selectCategories,
	customerSegmentOptions,
	selectCustomerGroups,
	selectCustomers,
	minimumRequirementsOptions,
	headerData,
};

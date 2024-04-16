// import { useTranslation } from 'react-i18next';

// const { t } = useTranslation();
// const applyToOptions = [t('All products'), t('Specific category'), t('Specific products'), t('Buy x get y')];

// const discountTypesOptions = [t('Percentage'), t('Fixed amount'), t('Free shipping')];

// const customerGetsOptions = [t('Free'), t('50% offer'), t('Specify percentage')];

// const customerSegmentOptions = [t('All customers'), t('Specific customer groups'), t('Specific customers')];

// const minimumRequirementsOptions = [t('Minimum price'), t('Minimum quantity')];
// const headerData = [
// 	{ id: 1, name: t('discount name') },
// 	{ id: 2, type: t('discount') },
// 	{ id: 3, date: t('ends at') },
// 	{ id: 4, active: t('active?') },
// 	{ id: 5, sales: t('sales') },
// 	{ id: 6, actions: t('actions') },
// ];

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

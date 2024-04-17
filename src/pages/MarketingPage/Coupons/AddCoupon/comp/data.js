// import { useTranslation } from 'react-i18next';

// const { t } = useTranslation();
// // coupon
// const headerData = [
// 	{ id: 1, name: t('coupon name') },
// 	{ id: 2, type: t('discount') },
// 	{ id: 3, date: t('ends at') },
// 	{ id: 4, active: t('active?') },
// 	{ id: 5, sales: t('sales') },
// 	{ id: 6, used: t('used') },
// 	{ id: 7, actions: t('actions') },
// ];

// // add new coupon
// const applyToOptions = [t('All products'), t('Specific category'), t('Specific products')].map((option) => option);

// const discountTypesOptions = [t('Percentage'), t('Fixed amount'), t('Free shipping')].map((option) => option);

// const customerGetsOptions = [t('Free'), t('50% offer'), t('Specify percentage')].map((option) => option);

// const customerSegmentOptions = [t('All customers'), t('Specific customer groups'), t('Specific customers')].map(
// 	(option) => option,
// );

// const minimumRequirementsOptions = [t('Minimum price'), t('Minimum quantity')].map((option) => option);

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

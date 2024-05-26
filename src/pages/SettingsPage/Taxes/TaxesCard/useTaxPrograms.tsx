import { useTranslation } from 'react-i18next';
import { useForm } from 'src/app/utils/hooks/form';
import { z } from 'zod';

export interface Rate {
	category: string;
	condition: string;
	deliveryTime: string;
}

interface TabData {
	label: string;
	value: string;
	rates: Rate[];
}
export interface addRateTypes {
	rateNameAr: string;
	rateNameEn: string;
	rateType: string;
	percentage: number;
	fixedAmount: number;
}
export default function useTaxPrograms() {
	const { t } = useTranslation();

	const tabsData: TabData[] = [
		{
			label: 'General',
			value: '1',
			rates: [
				{ category: t('VAT'), condition: '20%', deliveryTime: '' },
				{ category: t('Standard'), condition: '20 SAR', deliveryTime: '' },
			],
		},
		{
			label: 'Saudi Arabia',
			value: '2',
			rates: [
				{
					category: t('Standard (Free)'),
					condition: 'Order: SAR 0 to SAR 30',
					deliveryTime: '2 to 4 business days',
				},
				{
					category: t('Standard (SAR 20)'),
					condition: 'Order: SAR 30 and up',
					deliveryTime: '2 to 4 business days',
				},
			],
		},
		{
			label: 'Gulf & Egypt',
			value: '3',
			rates: [
				{
					category: t('Standard (Free)'),
					condition: 'Order: SAR 0 to SAR 50',
					deliveryTime: '3 to 5 business days',
				},
				{
					category: t('Standard (SAR 25)'),
					condition: 'Order: SAR 50 and up',
					deliveryTime: '3 to 5 business days',
				},
			],
		},
		{
			label: 'Europe & US',
			value: '4',
			rates: [
				{
					category: t('Standard (Free)'),
					condition: 'Order: $0 to $40',
					deliveryTime: '5 to 7 business days',
				},
				{
					category: t('Standard ($30)'),
					condition: 'Order: $40 and up',
					deliveryTime: '5 to 7 business days',
				},
			],
		},
	];
	const handleSubmit = (values: addRateTypes) => {
		console.log(values);
	};

	const addRateSchema = () => {
		return {
			rateNameAr: z.string().min(1),
			rateNameEn: z.string().min(1),
			rateType: z.string().min(1),
			percentage: z.coerce.number().min(1),
			fixedAmount: z.coerce.number().min(1),
		};
	};

	const handelDefaultValue = () => {
		return {
			rateNameAr: '',
			rateNameEn: '',
			rateType: 'Percentage',
			percentage: 0,
			fixedAmount: 0,
		};
	};

	const { formStore, onSubmit } = useForm({
		schema: addRateSchema(),
		handleSubmit: handleSubmit,
		defaultValues: handelDefaultValue(),
	});

	return { tabsData, formStore, onSubmit };
}
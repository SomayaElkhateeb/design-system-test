import { z } from 'zod';
import { useState } from 'react';
import { Dayjs } from 'dayjs';
import { useTranslation } from 'react-i18next';
import { UseFormReturn } from 'react-hook-form';

import { useForm } from 'src/app/utils/hooks/form';
import { selectItemsInterface } from 'src/app/components/page/AddCustomer/GeneralInfoCustomerForm';

export interface CampaignFormProps {
	formStore: UseFormReturn<CampaignInputsTypes>;
}
export interface ActiveDates {
	startActivation: { startDate: Date; startTime: string };
	endActivation: { endDate: Date; endTime: string };
}
export interface CampaignInputsTypes {
	targetSimilarPeople: string;
	specificInterests: string[];
	campaignName: string;
	activityName: string;
	adText: string;
	budget: number;
	activeDates: ActiveDates;
	details: string;
	selectedInterests?: selectItemsInterface[];
	products: selectItemsInterface[];
}
type DateTimeType = 'startDate' | 'startTime' | 'endDate' | 'endTime';

const ActiveDatesValues = {
	startActivation: { startDate: new Date(), startTime: '00:00' },
	endActivation: { endDate: new Date(), endTime: '00:00' },
};

const activeDatesSchema = z.object({
	startActivation: z.object({
		startDate: z.date({ required_error: 'Start date is required' }),
		startTime: z
			.string()
			.regex(/^([01]\d|2[0-3]):([0-5]\d)$/, { message: 'Invalid start time format' }),
	}),
	endActivation: z.object({
		endDate: z.date({ required_error: 'End date is required' }),
		endTime: z
			.string()
			.regex(/^([01]\d|2[0-3]):([0-5]\d)$/, { message: 'Invalid end time format' }),
	}),
});
// time picker in HH:MM format

export default function useCampaign(target: string) {
	const { t } = useTranslation();

	const newCampaignSchema = {
		budget: z.coerce.number().positive().min(1),
		campaignName: z.string().min(1, { message: 'Campaign name is required' }),
		activityName: z.string().min(1, { message: 'Activity name is required' }),
		targetSimilarPeople: z
			.string()
			.min(1, { message: 'Target similar people selection is required' }),
		adText: z.string().min(1, { message: 'Ad text is required' }),
		activeDates: activeDatesSchema,
		details: z.optional(z.string().min(1, { message: 'Ad text is required' })).or(z.literal('')),
		specificInterests:
			target === 'having specific interests'
				? z.array(
						z.object({
							id: z.string().min(1),
							name: z.string().min(1),
						}),
				  )
				: z
						.optional(
							z.array(
								z.object({
									id: z.string().min(1),
									name: z.string().min(1),
								}),
							),
						)
						.or(z.literal('')),
		products: z.array(
			z.object({
				id: z.string().min(1),
				name: z.string().min(1),
			}),
		),
	};

	const handelDefaultValue = () => {
		return {
			targetSimilarPeople: t('having specific interests'),
			specificInterests: [],
			campaignName: '',
			activityName: '',
			adText: '',
			products: [],
			details: '',
			budget: 0,
			activeDates: ActiveDatesValues,
		};
	};
	const [activeDates, setActiveDates] = useState<ActiveDates>(ActiveDatesValues);
	const [endDateEnabled, setEndDateEnabled] = useState(false);

	const handleSubmit = (values: CampaignInputsTypes) => {
		console.log(values);
	};
	const { formStore, onSubmit } = useForm({
		schema: newCampaignSchema,
		handleSubmit: handleSubmit,
		defaultValues: handelDefaultValue(),
	});

	const handleDateTimeChange = (type: DateTimeType, value: Dayjs | null) => {
		if (value) {
			const updatedDates = { ...activeDates };
			if (type === 'startDate') {
				updatedDates.startActivation.startDate = value.toDate();
			} else if (type === 'startTime') {
				updatedDates.startActivation.startTime = value.format('HH:mm');
			} else if (type === 'endDate') {
				updatedDates.endActivation.endDate = value.toDate();
			} else if (type === 'endTime') {
				updatedDates.endActivation.endTime = value.format('HH:mm');
			}
			setActiveDates(updatedDates);
			formStore.setValue('activeDates', updatedDates);
		}
	};
	return {
		formStore,
		onSubmit,
		activeDates,
		endDateEnabled,
		setEndDateEnabled,
		handleDateTimeChange,
	};
}

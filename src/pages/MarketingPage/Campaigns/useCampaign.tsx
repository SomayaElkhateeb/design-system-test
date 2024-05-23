import { z } from 'zod';
import { useTranslation } from 'react-i18next';
import { UseFormReturn } from 'react-hook-form';

import { useForm } from 'src/app/utils/hooks/form';

export interface CampaignFormProps {
	formStore: UseFormReturn<CampaignInputsTypes>;
}
export interface CampaignInputsTypes {
	targetSimilarPeople: string;
	specificInterests: string[];
	campaignName: string;
	activityName: string;
	startTime: string;
	startDate: Date;
	endTime: string;
	adText: string;
	budget: number;
	endDate: Date;
}

export default function useCustomization() {
	const { t } = useTranslation();
	const newCampaignSchema = {
		startTime: z
			.string()
			.regex(/^([01]\d|2[0-3]):([0-5]\d)$/, { message: 'Invalid start time format' }), // time picker in HH:MM format
		endTime: z
			.string()
			.regex(/^([01]\d|2[0-3]):([0-5]\d)$/, { message: 'Invalid end time format' }), // time picker in HH:MM format
		budget: z.number().positive({ message: 'Budget must be a positive number' }),
		campaignName: z.string().min(1, { message: 'Campaign name is required' }),
		activityName: z.string().min(1, { message: 'Activity name is required' }),
		targetSimilarPeople: z
			.string()
			.min(1, { message: 'Target similar people selection is required' }),
		startDate: z.date({ required_error: 'Start date is required' }),
		adText: z.string().min(1, { message: 'Ad text is required' }),
		endDate: z.date({ required_error: 'End date is required' }),
		specificInterests: z.array(z.string()).nonempty(),

		// targetSimilarPeople: z.enum(["option1", "option2", "option3"], { message: "Target similar people selection is required" }), // replace options with actual values
	};
	const handelDefaultValue = () => {
		return {
			targetSimilarPeople: t('having specific interests'),
			specificInterests: [],
			startDate: new Date(),
			endDate: new Date(),
			startTime: '00:00',
			campaignName: '',
			activityName: '',
			endTime: '00:00',
			adText: '',
			budget: 0,
		};
	};
	const handleSubmit = (values: CampaignInputsTypes) => {
		console.log(values);
	};
	const { formStore, onSubmit } = useForm({
		schema: newCampaignSchema,
		handleSubmit: handleSubmit,
		defaultValues: handelDefaultValue(),
	});

	return { formStore, onSubmit };
}

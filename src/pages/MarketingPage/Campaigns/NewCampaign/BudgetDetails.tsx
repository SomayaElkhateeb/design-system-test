import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Input } from 'src/app/components/ui/input';
import FormField from 'src/app/components/ui/form/field';
import { AddBgIcon, DeleteExitIcon } from 'src/app/utils/icons';
import { Button, DatePicker, TimePicker } from 'src/app/components/optimized';

import { CampaignFormProps } from '../useCampaign';

export default function BudgetDetails({ formStore }: CampaignFormProps) {
	const { t } = useTranslation();
	//!----------------------------------------------------------
	// todo:  didn't finish yet.
	// todo:  Linking DatePicker and TimePicker to the formStore.
	//!----------------------------------------------------------
	const [endDate, setEndDate] = useState(false);
	const [valueDate, setValueDate] = useState(/** @type {(import("dayjs").Dayjs | null)} */ null);

	const handleEndDateChange = (newValue) => {
		setValueDate(newValue);
	};

	return (
		<div className='global-cards grid grid-cols-2'>
			<h2 className='title text-lg col-span-2'>{t('Budget & Active dates')}</h2>
			<FormField
				formStore={formStore}
				name='budget'
				label={t('Budget & Active dates')}
				render={(field) => <Input {...field} />}
			/>
			<div className='flex col-span-2 gap-4'>
				<DatePicker label={t('start date')} />
				<TimePicker label={t('start time')} />
			</div>
			{endDate && (
				<div className='flex col-span-2 gap-4'>
					<DatePicker
						label={t('end date')}
						value={valueDate}
						handleOnChange={handleEndDateChange}
					/>
					<TimePicker label={t('end time')} />
				</div>
			)}
			<Button
				variant='tertiary'
				LeftIcon={endDate ? DeleteExitIcon : AddBgIcon}
				onClick={() => {
					setEndDate(!endDate);
				}}
				className='col-span-2'
			>
				{endDate ? t('remove end date') : t('add end date')}
			</Button>
		</div>
	);
}

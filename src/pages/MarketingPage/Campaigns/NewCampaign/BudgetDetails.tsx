import { useTranslation } from 'react-i18next';
import dayjs from 'dayjs';

import { Input } from 'src/app/components/ui/input';
import FormField from 'src/app/components/ui/form/field';
import { AddBgIcon, DeleteExitIcon } from 'src/app/utils/icons';
import { Button, DatePicker, TimePicker } from 'src/app/components/optimized';

import useCampaign, { CampaignFormProps } from '../useCampaign';


export default function BudgetDetails({ formStore }: CampaignFormProps) {
	const { t } = useTranslation();
	const { activeDates, endDateEnabled, setEndDateEnabled, handleDateTimeChange } =
		useCampaign();
	return (
		<div className='global-cards grid grid-cols-2'>
			<h2 className='title text-lg col-span-2'>{t('Budget & Active dates')}</h2>
			<FormField
				formStore={formStore}
				name='budget'
				label={t('Budget')}
				render={(field) => <Input {...field} />}
			/>
			<div className='flex col-span-2 gap-4'>
				<DatePicker
					value={dayjs(activeDates.startActivation.startDate)}
					label={t('Start Date')}
					handleOnChange={(date) => handleDateTimeChange('startDate', date)}
				/>
				<TimePicker
					value={dayjs(activeDates.startActivation.startTime, 'HH:mm')}
					label={t('Start Time')}
					handleOnChange={(time) => handleDateTimeChange('startTime', time)}
				/>
			</div>
			{endDateEnabled && (
				<div className='flex col-span-2 gap-4'>
					<DatePicker
						value={dayjs(activeDates.endActivation.endDate)}
						label={t('End Date')}
						handleOnChange={(date) => handleDateTimeChange('endDate', date)}
					/>
					<TimePicker
						value={dayjs(activeDates.endActivation.endTime, 'HH:mm')}
						label={t('End Time')}
						handleOnChange={(time) => handleDateTimeChange('endTime', time)}
					/>
				</div>
			)}
			<Button
				variant='tertiary'
				LeftIcon={endDateEnabled ? DeleteExitIcon : AddBgIcon}
				onClick={() => setEndDateEnabled(!endDateEnabled)}
				className='col-span-2'
			>
				{endDateEnabled ? t('Remove End Date') : t('Add End Date')}
			</Button>
		</div>
	);
}

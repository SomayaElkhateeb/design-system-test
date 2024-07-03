import { useEffect, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';

import { AddBgIcon, DeleteExitIcon } from 'src/app/utils/icons';
import { Button, CheckBox } from 'src/app/components/optimized';
import SingleChoiceChips from 'src/app/components/optimized/ChoiceChips/SingleChoiceChips';
import TimePickerMui from 'src/app/components/optimized/Pickers/TimePicker';

import FormField from 'src/app/components/ui/form/field';
import { BranchInfoProps, WeekSchedule, FixedDay, initialDayInfo } from './_hook/useAddBranchForm';

export default function BranchAppointments({ formStore }: BranchInfoProps) {
	const [activeDay, setActiveDay] = useState<FixedDay['day']>('Sun');
	const [dailySchedule, setDailySchedule] = useState<WeekSchedule>(initialDayInfo);
	const [showAdditionalHours, setShowAdditionalHours] = useState<boolean>(false);

	useEffect(() => {
		formStore.setValue('branchTimeSchedule', dailySchedule);
		const activeDaySchedule = dailySchedule[activeDay];
		if (activeDaySchedule.isClosed) {
			activeDaySchedule.officialHours.open = '';
			activeDaySchedule.officialHours.close = '';
			activeDaySchedule.additionalHours.open = '';
			activeDaySchedule.additionalHours.close = '';
			formStore.setValue('branchTimeSchedule', dailySchedule);
		}
	}, [dailySchedule, activeDay, formStore]);

	const handleSetActiveDay = (day: string) => {
		setActiveDay(day as FixedDay['day']);
	};

	const handleHoursChange = (
		value: Dayjs | null,
		type: 'open' | 'close',
		hourType: 'officialHours' | 'additionalHours',
	) => {
		setDailySchedule((prevSchedule) => ({
			...prevSchedule,
			[activeDay]: {
				...prevSchedule[activeDay],
				[hourType]: {
					...prevSchedule[activeDay][hourType],
					[type]: value ? value.format('HH:mm') : '',
				},
			},
		}));
	};

	const handleClosedToggle = () => {
		setDailySchedule((prevSchedule) => ({
			...prevSchedule,
			[activeDay]: {
				...prevSchedule[activeDay],
				isClosed: !prevSchedule[activeDay].isClosed,
			},
		}));
	};

	return (
		<div className='grid gap-4 w-full cardDetails-sharedClass p-5'>
			<h2 className='title text-lg'>Opening hours</h2>
			<section>
				<SingleChoiceChips
					options={Object.keys(initialDayInfo)}
					setSelected={handleSetActiveDay}
					selected={activeDay}
				/>
			</section>
			<FormField
				formStore={formStore}
				name='branchTimeSchedule'
				render={() => (
					<section className='flex items-center gap-4'>
						{!dailySchedule[activeDay].isClosed && (
							<div className='grid gap-4'>
								<div className='flex gap-4 items-center'>
									<TimePickerMui
										label='Opens at'
										value={
											dailySchedule[activeDay].officialHours.open
												? dayjs(dailySchedule[activeDay].officialHours.open, 'HH:mm')
												: null
										}
										handleOnChange={(e) => handleHoursChange(e, 'open', 'officialHours')}
									/>
									<TimePickerMui
										label='Closes at'
										value={
											dailySchedule[activeDay].officialHours.close
												? dayjs(dailySchedule[activeDay].officialHours.close, 'HH:mm')
												: null
										}
										handleOnChange={(e) => handleHoursChange(e, 'close', 'officialHours')}
									/>
									<div className='mt-9'>
										<CheckBox
											checked={dailySchedule[activeDay].isClosed}
											handleOnChange={handleClosedToggle}
											label='Closed'
										/>
									</div>
								</div>

								{showAdditionalHours && (
									<div className='flex gap-4'>
										<TimePickerMui
											label='Opens at'
											value={
												dailySchedule[activeDay].additionalHours.open
													? dayjs(dailySchedule[activeDay].additionalHours.open, 'HH:mm')
													: null
											}
											handleOnChange={(e) => handleHoursChange(e, 'open', 'additionalHours')}
										/>
										<TimePickerMui
											label='Closes at'
											value={
												dailySchedule[activeDay].additionalHours.close
													? dayjs(dailySchedule[activeDay].additionalHours.close, 'HH:mm')
													: null
											}
											handleOnChange={(e) => handleHoursChange(e, 'close', 'additionalHours')}
										/>
									</div>
								)}
							</div>
						)}
					</section>
				)}
			/>

			{dailySchedule[activeDay].isClosed && (
				<CheckBox
					checked={dailySchedule[activeDay].isClosed}
					handleOnChange={handleClosedToggle}
					label='Closed'
				/>
			)}
			<Button
				variant='tertiary'
				LeftIcon={showAdditionalHours ? DeleteExitIcon : AddBgIcon}
				text={showAdditionalHours ? 'Delete Hours' : 'Add More Hours'}
				onClick={() => setShowAdditionalHours(!showAdditionalHours)}
			/>
		</div>
	);
}
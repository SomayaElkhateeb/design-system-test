import { useEffect, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';

import { AddBgIcon, DeleteExitIcon } from 'src/app/utils/icons';
import { Button, CheckBox } from 'src/app/components/optimized';
import SingleChoiceChips from 'src/app/components/optimized/ChoiceChips/SingleChoiceChips';
import TimePickerMui from 'src/app/components/optimized/Pickers/TimePicker';
import { BranchSettingsInterface, WeekSchedule } from './AddBranch';
import { UseFormReturn } from 'react-hook-form';
import FormField from 'src/app/components/ui/form/field';

export interface OpenHours {
	open: string;
	close: string;
}

export interface DayInfo {
	openHours: OpenHours;
	isClosed: boolean;
}

export const initialDayInfo: WeekSchedule = {
	Sun: { openHours: { open: '', close: '' }, isClosed: false },
	Mon: { openHours: { open: '', close: '' }, isClosed: false },
	Tue: { openHours: { open: '', close: '' }, isClosed: false },
	Wed: { openHours: { open: '', close: '' }, isClosed: false },
	Thu: { openHours: { open: '', close: '' }, isClosed: false },
	Fri: { openHours: { open: '', close: '' }, isClosed: false },
	Sat: { openHours: { open: '', close: '' }, isClosed: false },
};

interface BranchInfoProps {
	formStore: UseFormReturn<BranchSettingsInterface>;
}
export interface fixedDay {
	day: 'Sun' | 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat';
}
export default function BranchAppointments({ formStore }: BranchInfoProps) {
	const [activeDay, setActiveDay] = useState<fixedDay['day']>('Sun');
	const [dayInfo, setDayInfo] = useState<WeekSchedule>(initialDayInfo);
	const [toggle, setToggle] = useState<boolean>(false);

	useEffect(() => {
		formStore.setValue('branchTimeSchedual', dayInfo);

		if (dayInfo[activeDay].isClosed) {
			dayInfo[activeDay].openHours.open = '';
			dayInfo[activeDay].openHours.close = '';

			formStore.setValue('branchTimeSchedual', dayInfo);
		}
	}, [dayInfo]);

	const handleDayClick = (day: fixedDay['day'] | any) => {
		setActiveDay(day);
	};

	const handleHoursChange = (value: Dayjs | null, type: 'open' | 'close') => {
		setDayInfo((prevDayInfo) => ({
			...prevDayInfo,
			[activeDay]: {
				...prevDayInfo[activeDay],
				openHours: {
					...prevDayInfo[activeDay].openHours,
					[type]: value ? value.format('HH:mm') : '',
				},
			},
		}));
	};
	const handleClosedToggle = () => {
		setDayInfo((prevDayInfo) => ({
			...prevDayInfo,
			[activeDay]: {
				...prevDayInfo[activeDay],
				isClosed: !prevDayInfo[activeDay].isClosed,
			},
		}));
	};

	const renderDayButtons = () => {
		return (
			<SingleChoiceChips
				options={Object.keys(initialDayInfo)}
				setSelected={handleDayClick}
				selected={activeDay}
			/>
		);
	};

	return (
		<div className='grid gap-4 w-full cardDetails-sharedClass p-5'>
			<h2 className='title text-lg '>Opening hours</h2>
			<section>{renderDayButtons()}</section>
			<FormField
				formStore={formStore}
				name='branchTimeSchedual'
				render={(field) => (
					<section className='flex items-center gap-4'>
						{!dayInfo[activeDay].isClosed && (
							<div className='grid gap-4'>
								<div className='flex gap-4 items-center'>
									<TimePickerMui
										label={'Opens at'}
										value={
											dayInfo[activeDay].openHours.open
												? dayjs(dayInfo[activeDay].openHours.open, 'HH:mm')
												: null
										}
										handleOnChange={(e) => handleHoursChange(e, 'open')}
									/>
									<TimePickerMui
										label={'Closes at'}
										value={
											dayInfo[activeDay].openHours.close
												? dayjs(dayInfo[activeDay].openHours.close, 'HH:mm')
												: null
										}
										handleOnChange={(e) => handleHoursChange(e, 'close')}
									/>
									<div className='mt-9'>
										<CheckBox
											checked={dayInfo[activeDay].isClosed}
											handleOnChange={handleClosedToggle}
											label='Closed'
										/>
									</div>
								</div>

								{toggle && (
									<div className='flex gap-4'>
										<TimePickerMui
											label={'Opens at'}
											value={
												dayInfo[activeDay].openHours.open
													? dayjs(dayInfo[activeDay].openHours.open, 'HH:mm')
													: null
											}
											handleOnChange={(e) => handleHoursChange(e, 'open')}
										/>
										<TimePickerMui
											label={'Closes at'}
											value={
												dayInfo[activeDay].openHours.close
													? dayjs(dayInfo[activeDay].openHours.close, 'HH:mm')
													: null
											}
											handleOnChange={(e) => handleHoursChange(e, 'close')}
										/>
									</div>
								)}
							</div>
						)}
					</section>
				)}
			/>

			{dayInfo[activeDay].isClosed && (
				<CheckBox
					checked={dayInfo[activeDay].isClosed}
					handleOnChange={handleClosedToggle}
					label='Closed'
				/>
			)}
			<Button
				variant='tertiary'
				LeftIcon={toggle ? DeleteExitIcon : AddBgIcon}
				text={toggle ? 'Delete Hours' : 'Add More Hours'}
				onClick={() => setToggle(!toggle)}
			/>
		</div>
	);
}
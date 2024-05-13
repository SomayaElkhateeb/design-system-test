import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';

import { AddBgIcon, DeleteExitIcon } from 'src/app/utils/icons';
import { Button, CheckBox, TimePicker } from 'src/app/components/optimized';
import SingleChoiceChips from 'src/app/components/optimized/ChoiceChips/SingleChoiceChips';

interface OpenHours {
	opens: string;
	closes: string;
}

interface DayInfo {
	openHours: OpenHours;
	isClosed: boolean;
}

const initialDayInfo: { [key: string]: DayInfo } = {
	Sun: { openHours: { opens: '', closes: '' }, isClosed: false },
	Mon: { openHours: { opens: '', closes: '' }, isClosed: false },
	Tue: { openHours: { opens: '', closes: '' }, isClosed: false },
	Wed: { openHours: { opens: '', closes: '' }, isClosed: false },
	Thu: { openHours: { opens: '', closes: '' }, isClosed: false },
	Fri: { openHours: { opens: '', closes: '' }, isClosed: false },
	Sat: { openHours: { opens: '', closes: '' }, isClosed: false },
};

export default function BranchAppointments() {
	const [activeDay, setActiveDay] = useState<string>('Sun');
	const [dayInfo, setDayInfo] = useState<{ [key: string]: DayInfo }>(initialDayInfo);
	const [toggle, setToggle] = useState<boolean>(false);
	

	const handleDayClick = (day: string) => {
		setActiveDay(day);
	};

	// const handleHoursChange = (e: ChangeEvent<HTMLInputElement>, type: 'opens' | 'closes') => {
	// 	const { value } = e.target;
	// 	setDayInfo((prevDayInfo) => ({
	// 		...prevDayInfo,
	// 		[activeDay]: {
	// 			...prevDayInfo[activeDay],
	// 			openHours: {
	// 				...prevDayInfo[activeDay].openHours,
	// 				[type]: value,
	// 			},
	// 		},
	// 	}));
	// };
	const handleHoursChange = (value: Dayjs | null, type: 'opens' | 'closes') => {
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
		<div className='grid gap-4 col-span-2 p-4 bg-white rounded-lg border border-borders-lines'>
			<h2 className='title text-lg mb-2'>Opening hours</h2>
			<section>{renderDayButtons()}</section>

			<section className='flex items-center gap-4'>
				{!dayInfo[activeDay].isClosed && (
					<div className='grid gap-4'>
						<div className='flex gap-4'>
							<TimePicker
								label={'Opens at'}
								value={
									dayInfo[activeDay].openHours.opens
										? dayjs(dayInfo[activeDay].openHours.opens)
										: null
								}
								handleOnChange={(e) => handleHoursChange(e, 'opens')}
							/>
							<TimePicker
								label={'Closes at'}
								value={
									dayInfo[activeDay].openHours.closes
										? dayjs(dayInfo[activeDay].openHours.closes)
										: null
								}
								handleOnChange={(e) => handleHoursChange(e, 'closes')}
							/>
						</div>

						{toggle && (
							<div className='flex gap-4'>
								<TimePicker
									label={'Opens at'}
									value={
										dayInfo[activeDay].openHours.opens
											? dayjs(dayInfo[activeDay].openHours.opens)
											: null
									}
									handleOnChange={(e) => handleHoursChange(e, 'opens')}
								/>
								<TimePicker
									label={'Closes at'}
									value={
										dayInfo[activeDay].openHours.closes
											? dayjs(dayInfo[activeDay].openHours.closes)
											: null
									}
									handleOnChange={(e) => handleHoursChange(e, 'closes')}
								/>
							</div>
						)}
					</div>
				)}
			</section>
			<CheckBox
				checked={dayInfo[activeDay].isClosed}
				handleOnChange={handleClosedToggle}
				label='Closed'
			/>
			<Button
				variant='tertiary'
				LeftIcon={toggle ? DeleteExitIcon : AddBgIcon}
				text={toggle ? 'Delete Hours' : 'Add More Hours'}
				onClick={() => setToggle(!toggle)}
			/>
		</div>
	);
}

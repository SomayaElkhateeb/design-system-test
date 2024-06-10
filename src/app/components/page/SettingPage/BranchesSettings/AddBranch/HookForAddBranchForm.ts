import { UseFormReturn } from 'react-hook-form';
import { z } from 'zod';
import { AddAddressSchema, handelAddresseDefaultValue, orderAddressInterface } from '../../../Orders/AddOrder/Comp/HookAddress';

export interface OpenHours {
	open: string;
	close: string;
}

export interface DayInfo {
	openHours: OpenHours;
	isClosed: boolean;
}

export interface WeekSchedule {
	Mon: DayInfo;
	Tue: DayInfo;
	Wed: DayInfo;
	Thu: DayInfo;
	Fri: DayInfo;
	Sat: DayInfo;
	Sun: DayInfo;
}
export interface BranchSettingsInterface extends orderAddressInterface {
	branchType: string;
	branchNameEn: string;
	branchNameAr: string;
	branchTimeSchedual: WeekSchedule;
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

export interface BranchInfoProps {
	formStore: UseFormReturn<BranchSettingsInterface>;
}
export interface fixedDay {
	day: 'Sun' | 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat';
}
// ////////////////////////
export default function useCustomHookAddBranchForm(sendGift?: boolean,selectedOption?: string) {
	const RequiredAddresseData = z.string().min(1);

	const DayInfoSchema = z.object({
		openHours: z.object({
			open: z.string(),
			close: z.string(),
		}),
		isClosed: z.boolean(),
	});

	const branchSettingsSchema = {
		branchType: RequiredAddresseData,
		branchNameEn: RequiredAddresseData,
		branchNameAr: RequiredAddresseData,
		branchTimeSchedual: z.object({
			Mon: DayInfoSchema,
			Tue: DayInfoSchema,
			Wed: DayInfoSchema,
			Thu: DayInfoSchema,
			Fri: DayInfoSchema,
			Sat: DayInfoSchema,
			Sun: DayInfoSchema,
		}),
		...AddAddressSchema(sendGift, selectedOption)
	};

	const handelDefaultValue = () => {
		return {
			branchType: 'Warehouse',
			branchNameAr: '',
			branchNameEn: '',
			branchTimeSchedual: initialDayInfo,
			...handelAddresseDefaultValue(),
		};
	};
	return {
		branchSettingsSchema,
		handelDefaultValue,
	};
}

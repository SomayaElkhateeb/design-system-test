import { UseFormReturn } from "react-hook-form";
import { z } from "zod";


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
export interface BranchSettingsInterface {
    branchType: string;
    branchNameEn: string;
    branchNameAr: string;
    countryName?: string;
    cityName?: string;
    area?: string;
    street?: string;
    building: string;
    landmark?: string;
    branchPhoneNumber: string;
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
export default function useCustomHookAddBranchForm(selectedOption: string) {
    const RequiredAddresseData = z.string().min(1);
	const handel_RequiredAddresseData = () => {
		return selectedOption !== 'Add manually'
			? z.optional(RequiredAddresseData).or(z.literal(''))
			: RequiredAddresseData;
	};

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
		countryName: handel_RequiredAddresseData(),
		cityName: handel_RequiredAddresseData(),
		area: handel_RequiredAddresseData(),
		street: handel_RequiredAddresseData(),
		building: RequiredAddresseData,
		landmark: handel_RequiredAddresseData(),
		branchPhoneNumber: z.string().min(7),
		branchTimeSchedual: z.object({
			Mon: DayInfoSchema,
			Tue: DayInfoSchema,
			Wed: DayInfoSchema,
			Thu: DayInfoSchema,
			Fri: DayInfoSchema,
			Sat: DayInfoSchema,
			Sun: DayInfoSchema,
		}),
	};
	
	const handelDefaultValue = () => {
		return {
			branchType: 'Warehouse',
			branchNameAr: '',
			branchNameEn: '',
			countryName: '',
			cityName: '',
			area: '',
			street: '',
			building: '',
			landmark: '',
			branchPhoneNumber: '',
			branchTimeSchedual: initialDayInfo,
		};
	};
    return {
        branchSettingsSchema,
        handelDefaultValue
    }
}
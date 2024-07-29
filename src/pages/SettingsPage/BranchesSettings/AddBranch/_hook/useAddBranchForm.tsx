import { z } from 'zod';
import { UseFormReturn } from 'react-hook-form';
import { AddAddressInterface,createAddressSchema,getDefaultValues } from 'src/pages/OrdersPage/AddOrder/Comp/AddOrderAddresse/_hook/useOrderAddress';


export interface TimeRange {
	open: string;
	close: string;
}

export interface DailyHours {
	officialHours: TimeRange;
	additionalHours: TimeRange;
	isClosed: boolean;
}

export interface WeekSchedule {
	Mon: DailyHours;
	Tue: DailyHours;
	Wed: DailyHours;
	Thu: DailyHours;
	Fri: DailyHours;
	Sat: DailyHours;
	Sun: DailyHours;
}

export interface BranchSettingsInterface extends AddAddressInterface {
	branchType: string;
	branchNameEn: string;
	branchNameAr: string;
	branchTimeSchedule: WeekSchedule;
}

const createEmptyDayInfo = (): DailyHours => ({
	officialHours: { open: '', close: '' },
	additionalHours: { open: '', close: '' },
	isClosed: false,
});

export const initialDayInfo: WeekSchedule = {
	Mon: createEmptyDayInfo(),
	Tue: createEmptyDayInfo(),
	Wed: createEmptyDayInfo(),
	Thu: createEmptyDayInfo(),
	Fri: createEmptyDayInfo(),
	Sat: createEmptyDayInfo(),
	Sun: createEmptyDayInfo(),
};

export interface BranchInfoProps {
	formStore: UseFormReturn<BranchSettingsInterface>;
}

export interface FixedDay {
	day: 'Sun' | 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat';
}

export default function useAddBranchForm(sendGift?: boolean, selectedOption?: string) {
	const requiredAddressData = z.string().min(1);

	const DayInfoSchema = z.object({
		officialHours: z.object({
			open: z.string(),
			close: z.string(),
		}),
		additionalHours: z.object({
			open: z.string(),
			close: z.string(),
		}),
		isClosed: z.boolean(),
	});

	const branchSettingsSchema = {
		branchType: requiredAddressData,
		branchNameEn: requiredAddressData,
		branchNameAr: requiredAddressData,
		branchTimeSchedule: z.object({
			Mon: DayInfoSchema,
			Tue: DayInfoSchema,
			Wed: DayInfoSchema,
			Thu: DayInfoSchema,
			Fri: DayInfoSchema,
			Sat: DayInfoSchema,
			Sun: DayInfoSchema,
		}),
		...createAddressSchema(sendGift, selectedOption),
	};
	const handelDefaultValue = () => {
		return {
			branchType: 'Warehouse',
			branchNameAr: '',
			branchNameEn: '',
			branchTimeSchedule: initialDayInfo,
			...getDefaultValues(),
		};
	};
	return {
		branchSettingsSchema,
		handelDefaultValue,
	};
}

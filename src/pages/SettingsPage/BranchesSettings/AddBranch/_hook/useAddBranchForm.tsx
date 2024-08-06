import { z } from 'zod';
import { UseFormReturn } from 'react-hook-form';

export interface BranchesType {
	en: {
		name: string;
		address: string;
		street: string;
		area?: string;
		city?: string;
		state?: string;
		country?: string;
		building?: string;
		landmark?: string;
	};
	ar: {
		name: string;
		address: string;
		street: string;
		area?: string;
		city?: string;
		state?: string;
		country?: string;
		building?: string;
		landmark?: string;
	};
	main_branch?: number | undefined; // action
	type?: string;
	code?: string;
	pick_up?: number | undefined; // action
	phone?: string;
	latitude?: string;
	longitude?: string;
	work_time: number;
	show_in_footer?: number | undefined; // action
	opening_days?: WeekSchedule; // Required if type is warehouse
}

const createEmptyDayInfo = (): DailyHours => ({
	officialHours: { open: '', close: '' },
	additionalHours: { open: '', close: '' },
	// isClosed: false,
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

export interface TimeRange {
	open: string;
	close: string;
}

export interface DailyHours {
	officialHours: TimeRange;
	additionalHours?: TimeRange;
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

export interface BranchInfoProps {
	formStore: UseFormReturn<BranchesType>;
}

export default function useAddBranchForm() {
	const zodString = z.string().min(1).optional();

	const DayInfoSchema = z.object({
		officialHours: z.object({
			open: z.string(),
			close: z.string(),
		}),
		additionalHours: z.object({
			open: z.string(),
			close: z.string(),
		}).optional(),
	});

	const branchSettingsSchema = z.object({
		en: z.object({
			name: z.string().min(1),
			address: z.string().min(1),
			street: z.string().min(1),
			area: zodString,
			city: zodString,
			state: zodString,
			country: zodString,
			building: zodString,
			landmark: zodString,
		}),
		ar: z.object({
			name: z.string().min(1),
			address: z.string().min(1),
			street: z.string().min(1),
			area: zodString,
			city: zodString,
			state: zodString,
			country: zodString,
			building: zodString,
			landmark: zodString,
		}),
		main_branch: z.coerce.number().min(0).max(1),
		type: z.string(),
		code: zodString,
		pick_up: z.coerce.number().min(0).max(1),
		phone: zodString,
		latitude: zodString,
		longitude: zodString,
		work_time: z.coerce.number().positive().min(1),
		show_in_footer: z.coerce.number().min(0).max(1),
		opening_days: z.object({
			Mon: DayInfoSchema,
			Tue: DayInfoSchema,
			Wed: DayInfoSchema,
			Thu: DayInfoSchema,
			Fri: DayInfoSchema,
			Sat: DayInfoSchema,
			Sun: DayInfoSchema,
		}).optional(),
	}).refine((data) => {
		if (data.type === 'warehouse') {
			return data.opening_days !== undefined;
		}
		return true;
	}, {
		path: ["opening_days"]
	});

	const handelDefaultValue = (): BranchesType => {
		return {
			en: {
				name: '',
				address: '',
				street: '',
				area: '',
				city: '',
				state: '',
				country: '',
				building: '',
				landmark: '',
			},
			ar: {
				name: '',
				address: '',
				street: '',
				area: '',
				city: '',
				state: '',
				country: '',
				building: '',
				landmark: '',
			},
			main_branch: 0,
			type: 'warehouse',
			code: '',
			pick_up: 0,
			phone: '',
			latitude: '',
			longitude: '',
			work_time: 0,
			show_in_footer: 0,
			opening_days: initialDayInfo,
		};
	};

	return {
		branchSettingsSchema,
		handelDefaultValue,
	};
}


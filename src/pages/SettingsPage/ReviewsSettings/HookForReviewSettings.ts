import { z } from "zod";


export interface reviewInterface {
	name_en: string;
	name_ar: string;
	email: string;
	enable: boolean;
	day: number;
}

export default function useCustomHookReviewSettings() {

    const handelDefaultValue = () => {
		return {
			name_en: '',
			name_ar: '',
			storeIndustry: '',
			email: '',
			enable: false,
			day: 0,
		};
	};
	// //////////////////////////////////////////
    const ReviewSchema = {
		name_en: z.string().min(5).max(100),
		name_ar: z.string().min(5).max(100),
		enable: z.boolean().default(false),
		day: z.coerce.number().positive().min(1),
		email: z.string().min(1).email(),
	};
    return {
        ReviewSchema,
        handelDefaultValue
    }
}
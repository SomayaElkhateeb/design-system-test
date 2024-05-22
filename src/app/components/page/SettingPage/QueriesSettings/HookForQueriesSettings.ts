import { z } from "zod";


export interface queriesInterface {
	describtion_en: string;
	describtion_ar: string;

	enable: boolean;
}


export default function useCustomHookQueriesSettings() {

	const handelDefaultValue = () => {
		return {
			describtion_en: '',
			describtion_ar: '',

			enable: false,
		};
	};
	// //////////////////////////////////////////
	const QueriesSchema = {
		describtion_en: z.string().min(5).max(100),
		describtion_ar: z.string().min(5).max(100),
		enable: z.boolean().default(false),
	};
	return {
		QueriesSchema,
		handelDefaultValue
	}
}
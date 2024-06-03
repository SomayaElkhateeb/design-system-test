import { z } from 'zod';
export interface IAccordion {
	search: string;
	checked: boolean;
	color: string;
	size: string;
}
export default function useCustomHookAccordion() {
	const handelDefaultValue = () => {
		return {
			search: '',
			checked: false,
			color: 'Red',
			size: 'L',
		};
	};

	const accordionSchema = () => {
		const stringValidation = z.string().min(1);

		return {
			search: stringValidation,
			color: stringValidation,
			size: stringValidation,
			checked: z.boolean().default(false),
		};
	};

	return {
		handelDefaultValue,
		accordionSchema,
	};
}

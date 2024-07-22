import { z } from 'zod';

export interface addStuffInterface {
	name: string;
	storeIndustry: string;
	email: string;
	storePermissions: string[];
}

export default function useCustomHookAddStuff() {
	const handelDefaultValue = () => {
		return {
			name: '',
			storeIndustry: '',
			email: '',
			storePermissions: [],
		};
	};

	// schema
	const stuffSchema = {
		name: z.string().min(5, { message: 'Full name is required' }),
		storeIndustry: z.string().min(1, { message: 'Store Industry is required' }),
		email: z.string().min(1, { message: 'Stuff email is required' }).email(),
		storePermissions: z.array(z.string()).min(1),
	};

	return {
		handelDefaultValue,
		stuffSchema,
	};
}

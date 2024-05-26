import { z } from 'zod';

export interface addressFormInterface {
	sendGift: boolean;
	name: string;
	country: string;
	city: string;
	district: string;
	street: string;
	building: string;
	landmark: string;
	phone: string;
}

export default function useCustomAddressForm() {
	const handelDefaultValue = () => {
		return {
			sendGift: false,
			name: '',
			country: '',
			city: '',
			district: '',
			street: '',
			building: '',
			landmark: '',
			phone: '',
		};
	};

	const addressSchema = {
		sendGift: z.boolean().default(false),
		name: z.string().min(5, { message: 'Full name is required' }),
		country: z.string().min(5, { message: 'Country is required' }),
		city: z.string().min(5, { message: 'City is required' }),
		district: z.string().min(5, { message: 'District is required' }),
		street: z.string().min(5, { message: 'Street is required' }),
		building: z.string().min(5, { message: 'Building is required' }),
		landmark: z.string().min(5, { message: 'Landmark is required' }),
		phone: z.string().min(7, { message: 'Phone is required' }),
	};

	return {
		handelDefaultValue,
		addressSchema,
	};
}

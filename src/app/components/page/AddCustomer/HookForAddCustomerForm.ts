import { UseFormReturn } from 'react-hook-form';
import { z } from 'zod';
import {
	handelAddresseDefaultValue,
	AddAddressSchema,
	addAddressInterface,
} from './../Orders/AddOrder/Comp/HookAddress';
import { selectItemsInterface } from './GeneralInfoCustomerForm';

export interface AddCustomerPageInterface extends addAddressInterface {
	humanType: string;
	fullName: string;
	email: string;
	Phone: string;
	groupMeta?: selectItemsInterface[];
	emailSubescribe: boolean;
}
export interface CustomersProps {
	formStore: UseFormReturn<AddCustomerPageInterface>;
}

export default function useCustomHookAddCustomerForm(sendGift?: boolean, selectedOption?: string) {
	const RequiredAddresseData = z.string().min(1);
	const AddCustomerPageSchema = {
		humanType: RequiredAddresseData,

		fullName: RequiredAddresseData,
		email: z.string().min(1).email(),
		Phone: RequiredAddresseData,
		groupMeta: z
			.array(
				z.object({
					id: z.string().min(1),
					name: z.string().min(1),
				}),
			)
			.min(1),

		emailSubescribe: z.boolean(),
		...AddAddressSchema(sendGift, selectedOption),
	};

	const handelDefaultValue = () => {
		return {
			humanType: 'Male',
			fullName: '',
			email: '',
			Phone: '',
			groupMeta: [],
			emailSubescribe: false,
			...handelAddresseDefaultValue(),
		};
	};
	return {
		handelDefaultValue,
		AddCustomerPageSchema,
	};
}

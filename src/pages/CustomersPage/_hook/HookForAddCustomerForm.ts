import { UseFormReturn } from 'react-hook-form';
import { z } from 'zod';
import { selectItemsInterface } from 'src/pages/CustomersPage/tabs/AllCustomers/_comp/GeneralInfoCustomerForm';
import {
	createAddressSchema,
	AddAddressInterface,
	getDefaultValues,
} from 'src/app/components/page/Orders/AddOrder/Comp/useOrderAddress';

export interface AddCustomerPageInterface extends AddAddressInterface {
	gender: string;
	fullName: string;
	email: string;
	Phone: string;
	groupMeta?: selectItemsInterface[];
	emailSubescribe: boolean;
}


export default function useCustomHookAddCustomerForm(
	sendGift?: boolean,
	selectedOption?: string,
	isName?: boolean,
) {
	const RequiredAddresseData = z.string().min(1);
	const AddCustomerPageSchema = {
		gender: RequiredAddresseData,

		first_Name: RequiredAddresseData,
		last_Name: RequiredAddresseData,
		email: z.string().min(1).email(),
		phone: RequiredAddresseData,
		groupMeta: z
			.array(
				z.object({
					id: z.string().min(1),
					name: z.string().min(1),
				}),
			)
			.min(1),

		emailSubescribe: z.boolean(),
		...createAddressSchema(sendGift, selectedOption, isName),
	};

	const handelDefaultValue = () => {
		return {
			gender: 'Male',
			first_Name: '',
			last_Name: '',
			email: '',
			phone: '',
			groupMeta: [],
			emailSubescribe: false,
			...getDefaultValues(),
		};
	};
	return {
		handelDefaultValue,
		AddCustomerPageSchema,
	};
}

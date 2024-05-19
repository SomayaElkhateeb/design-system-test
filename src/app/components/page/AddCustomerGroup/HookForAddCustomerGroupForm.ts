import { z } from "zod";
import { selectItemsInterface } from "../AddCustomer/GeneralInfoCustomerForm";



export interface addCustomerGroupInterface {
	groupName: string;
	description: string;
	active: boolean;
	Customers: selectItemsInterface[];
}
// ////////////////////////
export default function useCustomHookAddCustomerGroupForm() {

    // ////////////////////////
    const handelDefaultValue = () => {
		return {
			groupName: '',
			description: '',
			active: false,
			Customers: [],
		};
	};
    // //////////////////////
   
	const generalInfoSchema = {
		Customers: z.array(
			z.object({
				id: z.string().min(1),
				name: z.string().min(1),
			}),
		),
		groupName: z.string().min(1),
		description: z.string().min(1),
		active: z.boolean(),
	};
    return {
        generalInfoSchema,
        handelDefaultValue
    }
}
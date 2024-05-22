import { z } from "zod";
import { selectItemsInterface } from "./GeneralInfoCustomerForm";


export interface addCustomerInterface {
	humanType: string;
	fullName: string;
	email: string;
	groupMeta: selectItemsInterface[];
	PhoneNumber: string;
	fullNameAddresse: string;
	countryName: string;
	cityName: string;
	area: string;
	street: string;
	building: string;
	landmark: string;
	addressePhoneNumber: string;
	emailSubescribe: boolean;
}
// ////////////////////////
export default function useCustomHookAddCustomerForm() {

    // ////////////////////////
    const handelDefaultValue = () => {
        return {
            humanType: 'Male',
            fullName: '',
            email: '',
            PhoneNumber: '',
            groupMeta: [],
            fullNameAddresse: '',
            countryName: '',
            cityName: '',
            area: '',
            street: '',
            building: '',
            landmark: '',
            addressePhoneNumber: '',
            emailSubescribe: false,
        };
    };
    // //////////////////////
    const RequiredAddresseData = z.string().min(1);

    const generalInfoSchema = {
        humanType: RequiredAddresseData,
        fullName: RequiredAddresseData,
        email: z.string().min(1).email(),
        PhoneNumber: z.string().min(7),

        groupMeta: z.array(
            z.object({
                id: z.string().min(1),
                name: z.string().min(1),
            }),
        ),
        fullNameAddresse: RequiredAddresseData,
        countryName: RequiredAddresseData,
        cityName: RequiredAddresseData,
        area: RequiredAddresseData,
        street: RequiredAddresseData,
        building: RequiredAddresseData,
        landmark: RequiredAddresseData,
        addressePhoneNumber: z.string().min(7),
        emailSubescribe: z.boolean(),
    };
    return {
        generalInfoSchema,
        handelDefaultValue
    }
}
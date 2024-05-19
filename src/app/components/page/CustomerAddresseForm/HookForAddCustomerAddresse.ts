import { z } from "zod";




export interface AddaddresseInterface {
    countryName?: string;
    cityName?: string;
    area?: string;
    street?: string;
    building: string;
    landmark?: string;
    PhoneNumber: string;
    giftName?: string;
}
// ////////////////////////
export default function useCustomHookAddCustomerAddresseForm(sendGift: boolean, selectedOption: string) {

    // ////////////////////////
    const handelDefaultValue = () => {
        return {
            countryName: '',
            cityName: '',
            area: '',
            street: '',
            building: '',
            landmark: '',
            PhoneNumber: '',
            giftName: '',
        };
    };
    // //////////////////////

    const RequiredAddresseData = z.string().min(1);
    const handel_RequiredAddresseData = () => {
        return selectedOption !== 'Add manually'
            ? z.optional(RequiredAddresseData).or(z.literal(''))
            : RequiredAddresseData;
    };
    const handel_Gift_Input = () => {
        return !sendGift ? z.optional(RequiredAddresseData).or(z.literal('')) : RequiredAddresseData;
    };
    const AddCustomerAdddrsseSchema = {
        branchNameAr: RequiredAddresseData,
        countryName: handel_RequiredAddresseData(),
        cityName: handel_RequiredAddresseData(),
        area: handel_RequiredAddresseData(),
        street: handel_RequiredAddresseData(),
        building: RequiredAddresseData,
        landmark: handel_RequiredAddresseData(),
        PhoneNumber: z.string().min(7),
        giftName: handel_Gift_Input(),
    };
    return {
        AddCustomerAdddrsseSchema,
        handelDefaultValue
    }
}
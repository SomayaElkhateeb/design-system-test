import { z } from "zod";
import { adminSchema } from "./AdminSchema";


export interface generalSettingsInterface {
    storeName: string;
    storeEmail: string;
    storeIndustry: string;
    storeContactPhone: string;
    facebook: string;
    instagram: string;
    twitter: string;
    youtube: string;
    defaultTime: string;
    defaultCurrency: string;
    defaultLength: string;
    defaultWeight: string;
    defaultCountry?: string
    image: File;
    icon: File;
    NationalID: string;
    CommercialRegistrationNo?: string;
    CommercialRegistrationImage?: File;
    NationalIDImage?: File;
}



// ////////////////////////
export default function useCustomHookGeneralForm(state: string) {

    // ////////////////////////////////////
    const handel_Required_image = (national?: boolean) => {
        const Required_image = z.instanceof(File);
        return state !== 'Business' && !national ? z.optional(Required_image) : Required_image;
    };
    // ///////////////////////////
    const handel_CommercialRegistrationNo = () => {
        const CommercialRegistrationNo_required = z
            .string()
            .min(5, { message: 'Commercial Registration No  is required' });
        return state !== 'Business'
            ? z.optional(CommercialRegistrationNo_required).or(z.literal(''))
            : CommercialRegistrationNo_required;
    };
    // ////////////////////////
    const handelDefaultValue = () => {
        return {
            storeName: '',
            storeEmail: '',
            storeIndustry: '',
            storeContactPhone: '',
            facebook: '',
            instagram: '',
            twitter: '',
            youtube: '',
            defaultTime: '',
            defaultCurrency: '',
            defaultLength: '',
            defaultWeight: '',
            defaultCountry: '',
            image: undefined,
            icon: undefined,
            NationalID: '',
            CommercialRegistrationNo: '',
            CommercialRegistrationImage: undefined,
            NationalIDImage: undefined,
        };
    };
    // //////////////////////
    const generalSettingsSchema = {
        storeName: z.string().min(3, { message: 'Store name is required' }),
        storeEmail: z.string().min(1, { message: 'Store email is required' }).email(),
        storeIndustry: z.string().min(1, { message: 'Store Industry is required' }),
        storeContactPhone: z.string().min(7, { message: 'Store contact phone is required' }),
        ...adminSchema,
        facebook: z
            .string()
            .url()
            .refine((value) => /^https?:\/\/(www\.)?facebook\.com\/[a-zA-Z0-9._]+$/.test(value), {
                message: 'Invalid Facebook URL',
            }),
        instagram: z
            .string()
            .url()
            .refine((value) => /^https?:\/\/(www\.)?instagram\.com\/[a-zA-Z0-9._]+$/.test(value), {
                message: 'Invalid Instagram URL',
            }),
        twitter: z
            .string()
            .url()
            .refine((value) => /^https?:\/\/(www\.)?twitter\.com\/[a-zA-Z0-9._]+$/.test(value), {
                message: 'Invalid Twitter URL',
            }),
        youtube: z
            .string()
            .url()
            .refine((value) => /^https?:\/\/(www\.)?youtube\.com\/[a-zA-Z0-9._]+$/.test(value), {
                message: 'Invalid YouTube URL',
            }),
        image: z.instanceof(File),
        icon: z.instanceof(File),
        CommercialRegistrationImage: handel_Required_image(),
        CommercialRegistrationNo: handel_CommercialRegistrationNo(),
        NationalID: z.string().min(5, { message: 'National ID  is required' }),
        NationalIDImage: handel_Required_image(true),
    };
    return {
        generalSettingsSchema,
        handelDefaultValue
    }
}
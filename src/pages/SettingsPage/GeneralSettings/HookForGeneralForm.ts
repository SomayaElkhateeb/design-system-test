import { z } from "zod";
import { adminSchema } from "./AdminSchema";


export interface generalSettingsInterface {
    general: {
        settings: {
            store: {
                name: string;
                email: string;
                industry: string;
                phone: string;
            },
            media: {
                logo: File;
                icon: File;
            },
            social: {
                links: {
                    facebook: string;
                    instagram: string;
                    twitter: string;
                    youtube: string;
                }
            },
            legal: {
                type: string;
                national_id: string;
                national_image: File;
                commercial_no: string;
                commercial_image: File;
            }
        },
    },
    someke: {
        key: string;
    }
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
            name: '',
            email: '',
            industry: '',
            phone: '',
            facebook: '',
            instagram: '',
            twitter: '',
            youtube: '',
            logo: undefined,
            icon: undefined,

            // defaultTime: '',
            // defaultCurrency: '',
            // defaultLength: '',
            // defaultWeight: '',
            // defaultCountry: '',
            type:'',
            national_id: '',
            national_image: undefined,
            commercial_no: '',
            commercial_image: undefined,
        };
    };
    // //////////////////////
    const generalSettingsSchema = z.object({
        general: z.object({
            settings: z.object({
                store: z.object({
                    name: z.string().min(3, { message: 'Store name is required' }),
                    email: z.string().min(1, { message: 'Store email is required' }).email(),
                    industry: z.string().min(1, { message: 'Store Industry is required' }),
                    phone: z.string().min(7, { message: 'Store contact phone is required' }),
                }),
                media: z.object({
                    logo: handel_Required_image(), 
                    icon: handel_Required_image(), 
                }),
                social: z.object({
                    links: z.object({
                        facebook: z.string().url({ message: 'Invalid Facebook URL' }),
                        instagram: z.string().url({ message: 'Invalid Instagram URL' }),
                        twitter: z.string().url({ message: 'Invalid Twitter URL' }),
                        youtube: z.string().url({ message: 'Invalid YouTube URL' }),
                    })
                }),
                legal: z.object({
                    type: z.string().min(7, { message: 'Legal type is required' }),
                    national_id: z.string().min(5, { message: 'National ID is required' }),
                    national_image: handel_Required_image(true), 
                    commercial_no: handel_CommercialRegistrationNo(),
                    commercial_image: handel_Required_image(), 
                })
            }),
        }),
        someke: z.object({
            key: z.string(),
        })
    });

    return {
        generalSettingsSchema,
        handelDefaultValue
    };
}
import { z } from 'zod';

export interface addAttributeInterface {
    code: string;
    type: string; // select
    admin_name: string;
    en: {
        name: string;
    };
    ar: {
        name: string;
    };
    swatch_type: string; // dropdown
    'default-null-option': boolean; // on or off

    // options
    options: {
        option_1: {
            admin_name: string;
            en: {
                label: string;
            }
            ar: {
                label: string;
            }
            sort_order: number; // 1 or 0
            swatch_value: string;
        }
    }

    is_required: number;
    is_unique: number;
    validation: number;
    value_per_locale: number;
    value_per_channel: number;
    
}
const stringZod = z.string().min(1);

export const AddAttributeSchema = {
    code: stringZod,
    attributeType: stringZod,
    swatchType: stringZod,
    default: z.coerce.number().min(0).max(1),

    adminNameAr: stringZod,
    adminNameEn: stringZod,
    swatchTypeOpt: stringZod.optional(),
    order: z.coerce.number().min(0).max(1),
    store: z.coerce.number().min(0).max(1),
}

export default function useCustomHookAddAttribute() {
    const handelDefaultValue = () => {
        return {
            code: '',
            attributeType: '',
            swatchType: '',
            default: 0,

            adminNameAr: '',
            adminNameEn: '',
            swatchTypeOpt: '',
            order: 0,
            store: 0,
        };
    };

    return {
        AddAttributeSchema,
        handelDefaultValue,
    };
}

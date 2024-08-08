import { z } from 'zod';

export interface addAttributeInterface {
    code: string;
    attributeType: string;
    adminNameAr: string;
    adminNameEn: string;
    swatchType: string;
    default: number;

    swatchTypeOpt?: string;
    order?: number;
    store: number;
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

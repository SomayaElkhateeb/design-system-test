import { z } from 'zod';

// Define the interface for the attribute
export interface IAddAttributeFamilies {
    code: string;
    name: string;
    attribute_groups: {
        name: string;
        position: number;
        is_user_defined: number; // 0 | 1
        custom_attributes: string; // []
    }
}

// Zod schema for validation
const stringZod = z.string().min(1);

export const AttributeFamilySchema = {
    code: stringZod,
    name: stringZod,
    attribute_groups: {
        name: stringZod,
        position: z.coerce.number().min(0),
        is_user_defined: z.coerce.number().min(0).max(1), // 0 | 1
        custom_attributes: stringZod, // []
    }
};

export default function useCustomHookAttributeFamily() {
    const handelDefaultValue = (): IAddAttributeFamilies => {
        return {
            code: '',
            name: '',
            attribute_groups: {
                name: '',
                position: 0,
                is_user_defined: 0, // 0 | 1
                custom_attributes: '', // []
            }
        };
    };

    return {
        AttributeFamilySchema,
        handelDefaultValue,
    };
}

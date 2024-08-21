import { z } from 'zod';
import { addAttributeInterface, AddAttributeSchema } from '../../Attributes/_hook/HookAddAttributes';

// Define the interface for the attribute family
export interface IAddAttributeFamilies {
    code: string;
    name: string;
    attribute_groups?: {
        name: string;
        position: number;
        is_user_defined: number; 
        custom_attributes: addAttributeInterface[]; 
    }[];
}

// Define schema for attribute group
const AttributeGroupSchema = z.object({
    name: z.string().min(1),
    position: z.number().min(0), // Use z.number() instead of z.coerce.number()
    is_user_defined: z.number().min(0).max(1), // Ensure is_user_defined is 0 or 1
    custom_attributes: z.array(AddAttributeSchema), // Ensure AddAttributeSchema is correct
});

// Define schema for the attribute family
export const AttributeFamilySchema = z.object({
    code: z.string().min(1),
    name: z.string().min(1),
    attribute_groups: z.array(AttributeGroupSchema).optional(), // Optional array of attribute groups
});

export default function useCustomHookAttributeFamily() {
    const handleDefaultValue = (): IAddAttributeFamilies => {
        return {
            code: '',
            name: '',
            attribute_groups: [{
                name: '',
                position: 0,
                is_user_defined: 0,
                custom_attributes: [], 
            }]
        };
    };

    return {
        AttributeFamilySchema,
        handleDefaultValue,
    };
}

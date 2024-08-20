import { z } from 'zod';

const isNotPastDate = (value: string | null | undefined) => {
    if (!value) return true;

    const today = new Date();
    const inputDate = new Date(value);

    today.setHours(0, 0, 0, 0);
    inputDate.setHours(0, 0, 0, 0);

    return inputDate >= today;
};

// Define the CustomersFilter interface
export interface CustomersFilter {
    date_from?: string;
    date_to?: string;
    country_id?: string; 
    city_id?: string; 
    gender?: string; 
    customer_group_id?: string; 
    per_page?: number;
    email?: string; 
}

export const CustomersFilterSchema = z.object({
    date_from: z
        .string()
        .regex(/^\d{4}-\d{2}-\d{2}$/, 'Date must be in YYYY-MM-DD format')
        // .refine(isNotPastDate, 'Date cannot be in the past')
        .nullable()
        .optional(),
    date_to: z
        .string()
        .regex(/^\d{4}-\d{2}-\d{2}$/, 'Date must be in YYYY-MM-DD format')
        .nullable()
        .optional(),
    country_id: z.string().min(1).optional(),
    city_id: z.string().min(1).optional(),
    gender: z.string().min(1).optional(),
    customer_group_id: z.string().min(1).optional(),
    per_page: z.coerce.number().min(1).optional(),
    email: z.string().min(1).optional(),
});

export default function useCustomersFilter() {
    const handelDefaultValue = () => {
        return {
            date_from: '',
            date_to: '',
            country_id: '',
            city_id: '',
            gender: '',
            customer_group_id: '',
            per_page: 0,
            email:'',
        };
    };

    return {
        handelDefaultValue,
        CustomersFilterSchema,
    };
}

import { InferredZodSchema } from 'src/app/utils/hooks/form';
import { z } from 'zod';

const stringZod = z.string().min(1);
const numberZod = z.coerce.number().positive();

const AddMerchantPaymentMethodSchema = {
    payment_method_id: numberZod,
    account_number: numberZod.optional(),
    account_name: numberZod.optional(),
    bank_name: stringZod,
    iban: stringZod,
    price_more_than: numberZod,
    items_more_than: numberZod,
    apply_with: stringZod,
    active: numberZod,
    main_method: numberZod,
    show_in_footer: numberZod,
    additional_data: stringZod,
    specificProducts: z.array(z.object({
        id: stringZod,
        name: stringZod,
    })).optional(),
    specificCustomers: z.array(z.object({
        id: stringZod,
        name: stringZod,
    })).optional(),
};


export type AddMerchantPaymentMethodSchemaValues = InferredZodSchema<typeof AddMerchantPaymentMethodSchema>;

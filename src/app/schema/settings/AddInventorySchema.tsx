import { InferredZodSchema } from 'src/app/utils/hooks/form';
import { z } from 'zod';


const stringZod = z.string().min(1);

export const AddInventorySchema = {
    code: stringZod,
    name: stringZod,
    description: stringZod.optional(),
    contact_name: stringZod,
    contact_email: stringZod.email(),
    contact_number: stringZod,
    contact_fax: stringZod.optional(),
    country: stringZod,
    state: stringZod,
    city: stringZod,
    street: stringZod,
    postcode: stringZod,
    priority: stringZod, // todo
    latitude: stringZod, // todo -90 : 90
    longitude: stringZod, // todo -180 : 180
    status: stringZod,
    branch_id: stringZod,
};
export type AddInventorySchemaValues = InferredZodSchema<typeof AddInventorySchema>;

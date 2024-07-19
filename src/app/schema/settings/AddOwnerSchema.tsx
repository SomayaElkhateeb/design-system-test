import { InferredZodSchema } from 'src/app/utils/hooks/form';
import { z } from 'zod';

const stringZod = z.string().min(1);

export const AddOwnerSchema = {
	name: stringZod,
    email: stringZod.email(),
    password: stringZod.optional(),
    password_confirmation: stringZod.optional(),
	role_id:stringZod.optional(),
    status: z.number(),
};
export type AddUserSchemaValues = InferredZodSchema<typeof AddOwnerSchema>;

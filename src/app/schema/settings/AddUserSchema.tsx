import { InferredZodSchema } from 'src/app/utils/hooks/form';
import { z } from 'zod';

const stringZod = z.string().min(1);

export const AddUserSchema ={
    name: stringZod,
    email: stringZod.email(),
    password: z.string().min(6).optional(),
    password_confirmation: z.string().min(6).optional(),
    role_id: stringZod.optional(),
    status: z.number(),
}


export type AddUserSchemaValues = InferredZodSchema<typeof AddUserSchema>;
// export type AddUserSchemaValues = z.infer<typeof AddUserSchema>;

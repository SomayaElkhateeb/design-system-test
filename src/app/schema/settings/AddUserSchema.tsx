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
    // status: z.string().transform((data) => Number(data)),
}
// ).superRefine((data, ctx) => {
//     if (data.password !== data.password_confirmation) {
//         ctx.addIssue({
//             code: z.ZodIssueCode.custom,
//             message: "Passwords don't match",
//             path: ['password_confirmation'],
//         });
//     }
// });

export type AddUserSchemaValues = InferredZodSchema<typeof AddUserSchema>;
// export type AddUserSchemaValues = z.infer<typeof AddUserSchema>;

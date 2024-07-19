import { InferredZodSchema } from 'src/app/utils/hooks/form';
import { z } from 'zod';

const stringZod = z.string().min(1);

export const AddRoleSchema = {
	name: stringZod,
    description: stringZod,
    permission_type: z.array(z.array(z.string())).min(1)
};
export type AddRoleSchemaValues = InferredZodSchema<typeof AddRoleSchema>;

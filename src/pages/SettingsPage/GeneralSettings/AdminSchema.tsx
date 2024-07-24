import { z } from 'zod';

const stringValidation = z.string().min(1);
export const adminSchema = {
	defaultTime: stringValidation,
	defaultCurrency: stringValidation,
	defaultLength: stringValidation,
	defaultWeight: stringValidation,
	defaultCountry: z.optional(stringValidation).or(z.literal('')),
};

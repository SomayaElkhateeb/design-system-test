import { object, string } from 'zod';

// Define interface for your data
interface DiscountData {
	discountName: string;
	// Add more fields if needed
}

// Define your Zod schema
const discountSchema = object({
	discountName: string().min(3, 'Discount name must be at least 3 characters long'),
	// Add more fields for validation if needed
});

// Use the interface to type your schema
const validatedData: DiscountData = discountSchema.parse({
	discountName: 'Your Discount Name', // Replace with actual data
	// Add values for other fields if needed
});

// Export discountName
export const discountName: string = validatedData.discountName;

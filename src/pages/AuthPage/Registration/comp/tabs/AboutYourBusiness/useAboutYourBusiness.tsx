import { z } from 'zod';
import { useForm } from 'src/app/utils/hooks/form';

export interface AboutYourBusinessInterface {
	storeName: string;
	storeLink: string;
	industry: string;
	agreementTerms: boolean;
}
const aboutYourBusinessSchema = {
	storeName: z.string().min(3, 'Store name is required'),
	storeLink: z.string().min(3, 'Store link is required'),
	industry: z.string().min(3, 'Industry is required'),
	agreementTerms: z.boolean().refine((val) => val, 'You must agree to the terms and conditions'),
};
const handleDefaultValue = (): AboutYourBusinessInterface => ({
	storeName: '',
	storeLink: '',
	industry: '',
	agreementTerms: false,
});

export const industryOptions = [
	{ value: 'fashion', label: 'Fashion' },
	{ value: 'electronics', label: 'Electronics' },
	{ value: 'groceries', label: 'Groceries' },
];

export default function useAboutYourBusiness() {
	const handleSubmit = (values: AboutYourBusinessInterface) => {
		console.log(values);
	};

	const { formStore, onSubmit } = useForm({
		schema: aboutYourBusinessSchema,
		handleSubmit: handleSubmit,
		defaultValues: handleDefaultValue(),
	});

	return { formStore, onSubmit };
}

import { z } from 'zod';
import { useForm } from 'src/app/utils/hooks/form';
import { useTranslation } from 'react-i18next';
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



export default function useAboutYourBusiness() {
	const { t } = useTranslation();
	const handleSubmit = (values: AboutYourBusinessInterface) => {
		console.log(values);
	};
	const industryOptions = [
		{ value: 'fashion', label: t('Fashion') },
		{ value: 'electronics', label: t('Electronics') },
		{ value: 'groceries', label: t('Groceries') },
	];
	const { formStore, onSubmit } = useForm({
		schema: aboutYourBusinessSchema,
		handleSubmit: handleSubmit,
		defaultValues: handleDefaultValue(),
	});

	return { formStore, onSubmit, industryOptions };
}


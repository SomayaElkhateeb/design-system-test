import { useTranslation } from 'react-i18next';
import { z } from 'zod';

export interface IAddRate {
	rateNameEn: string;
	rateNameAr: string;
	shippingSpeed: string;
	supportedCities?: string;
	shippingPrice: number;
	weight: number;
	minimumPrice: number;
	maximumPrice: number;
}

export default function useCustomHookAddRate() {
	const { t } = useTranslation();
	const handelDefaultValue = () => {
		return {
			rateNameEn: '',
			rateNameAr: '',
			shippingSpeed: '',
			supportedCities: '',
			shippingPrice: 0,
			weight: 0,
			minimumPrice: 0,
			maximumPrice: 0,
		};
	};

	const rateSchema = {
		rateNameEn: z.string().min(3, { message: t('Rate is required') }),
		rateNameAr: z.string().min(3, { message: t('Rate is required') }),
		shippingSpeed: z.string(),
		supportedCities: z.string().optional(),
		shippingPrice: z.coerce.number().min(0),
		weight: z.coerce.number().min(0),
		minimumPrice: z.coerce.number().min(0),
		maximumPrice: z.coerce.number().min(0),
	};

	return {
		handelDefaultValue,
		rateSchema,
	};
}

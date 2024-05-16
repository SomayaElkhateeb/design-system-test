import { useTranslation } from 'react-i18next';
import { z } from 'zod';
import { useForm } from 'src/app/utils/hooks/form';
import { Form } from 'src/app/components/ui/form';

import TextFields from './TextFields';
import { Button } from 'src/app/components/optimized';

import AppliesBasedOn from '../Rate/AppliesBasedOn';

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

export default function AddRate({ saudi, onClose }: { saudi?: boolean; onClose: () => void }) {
	const { t } = useTranslation();

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
	const handleSubmit = (values: IAddRate) => {
		console.log(values);
	};

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
	const { formStore, onSubmit } = useForm({
		schema: rateSchema,
		handleSubmit: handleSubmit,
		defaultValues: handelDefaultValue(),
	});

	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit}>
				<div className='fixed inset-0 z-50 items-center justify-center flex'>
					{/* Overlay */}
					<div className='fixed inset-0 bg-black opacity-50' onClick={onClose}></div>
					<div className='lg:w-[50%] md:w-[80%] relative cardDetails-sharedClass p-5 '>
						<h2 className='text-title font-semibold pb-5'>{t('Add rate')}</h2>
						<TextFields formStore={formStore} saudi={saudi} />
						<AppliesBasedOn formStore={formStore} />

						<div className='flex items-center justify-end pt-5 gap-5'>
							<Button variant='tertiary' onClick={onClose}>
								{t('cancel')}
							</Button>
							<Button variant='primary' onClick={onSubmit}>
								{t('add')}
							</Button>
						</div>
					</div>
				</div>
			</form>
		</Form>
	);
}

import { useEffect, useState } from 'react';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { HeaderSettings, ToggleSwitch } from 'src/app/components/optimized';

import BasicInfo from './BasicInfo/BasicInfo';
import ActiveDates from '../../../../app/components/page/discount/Comp/ActiveDates';
import MinimumRequirements from 'src/app/components/page/discount/Comp/MinimumRequirements';
import CustomerSegment from 'src/app/components/page/discount/Comp/CustomerSegment/CustomerSegment';

import { postDiscounts } from 'src/app/store/slices/marketing/discounts/discountsAsyncThunks';
import { InferredZodSchema, useForm } from 'src/app/utils/hooks/form';
import { UseFormReturn } from 'react-hook-form';
import { Form } from 'src/app/components/ui/form';
import { ErrorMessage } from '@hookform/error-message';
import { Switch } from 'src/app/components/ui/switch';
import AddDiscAndCoupLoading from 'src/app/components/page/SchimmerLoading/AddDiscAndCoupLoading';

const schema = {
	name: z.string().min(3).max(60),
	fixedAmount: z.coerce.number().min(0),
	minimumPrice: z.coerce.number().min(0),
	MiniPrice: z.coerce.number().min(0),
	MiniQuantity: z.coerce.number().min(0),
	percentage: z.coerce.number().min(0).max(100).optional(),
	percentageGets: z.coerce.number().min(0).max(100).optional(),
	endDate: z.date().nullable().optional(),
};

type FormValues = InferredZodSchema<typeof schema>;
export type DiscountFormStore = UseFormReturn<FormValues>;

const NewDiscount = () => {
	const [showLoading, setShowLoading] = useState(true);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { t } = useTranslation();
	const [state, setState] = useState();

	const { formStore, onSubmit, errors } = useForm({
		criteriaMode: 'all',
		schema,
		defaultValues: {
			name: '',
			fixedAmount: 0,
			minimumPrice: 0,
			MiniPrice: 0,
			MiniQuantity: 0,
			percentage: 0,
			percentageGets: 0,
			endDate: '',
		},
		handleSubmit(validatedData) {
			console.log('validatedData discount', validatedData);
		},
	});
	const handleSaveChanges = () => {
		// try {
		// 	basicInfoSchema.parse(state);
		// const data = {
		// name: discountName,
		// value: fixedAmount,
		// date: endDate,
		// sales: minimumPrice,
		// };
		// dispatch(postDiscounts(data));
		// setState(initialValues);
		// navigate('/marketing/discounts');
		// } catch (error) {
		// 	console.error('Validation error:', error.errors);
		// 	setValidationErrors({
		// 		discountName: error.errors.find((err) => err.path[0] === 'discountName')?.message,
		// 		fixedAmount: error.errors.find((err) => err.path[0] === 'fixedAmount')?.message,
		// 	});
		// }
	};
	// loading new discount page
	useEffect(() => {
		const timer = setTimeout(() => {
			setShowLoading(false);
		}, 3000);

		return () => clearTimeout(timer); // Clear the timer on component unmount
	}, []);
	return (

		<>
			{showLoading ? (
				<AddDiscAndCoupLoading />
			) : (
				<div>
					<Form {...formStore} onSubmit={onSubmit}>
						<HeaderSettings
							variant='settingTwoBtns'
							to={-1}
							title={t('Add Discount')}
							btn1={{ text: t('Discard'), onClick: () => {} }}
							btn2={{ text: t('Save Changes'), onClick: handleSaveChanges }}
						/>
						<div className='p-4 flex justify-between gap-7'>
							<div className='w-full flex flex-col gap-[18px]'>
								<BasicInfo formStore={formStore} errors={errors} />
								<CustomerSegment />
								<MinimumRequirements formStore={formStore} />
								<ActiveDates setState={setState} />
							</div>
							<div className='bg-white w-[17rem] h-fit border p-3 border-constrained rounded-md flex flex-col gap-[1rem]'>
								<h3 className='text-title font-semibold'>{t('Quick actions')}</h3>
								<Switch checked />
							</div>
						</div>
					</Form>

				</div>
			)}
		</>
	);
};
export default NewDiscount;

import { useState } from 'react';
import { HeaderSettings, ToggleSwitch } from 'src/app/components/optimized';
import BasicInfo from './BasicInfo/BasicInfo';
import MinimumRequirements from '../../../../app/components/page/discount/Comp/MinimumRequirements';
import Limits from './Limits/Limits';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postCoupons } from 'src/app/store/slices/marketing/coupons/couponsAsyncThunks';
import { useTranslation } from 'react-i18next';
import ActiveDates from 'src/app/components/page/discount/Comp/ActiveDates';
import CustomerSegment from 'src/app/components/page/discount/Comp/CustomerSegment/CustomerSegment';
import { z } from 'zod';
import { InferredZodSchema, useForm } from 'src/app/utils/hooks/form';
import { UseFormReturn } from 'react-hook-form';
import { Form } from 'src/app/components/ui/form';

const schema = {
	name: z.string().min(3).max(60),
	fixedAmount: z.number().min(0),
	minimumPrice: z.number().min(0),
	MiniPrice: z.number().min(0),
	MiniQuantity: z.number().min(0),
	usage: z.number().min(0),
	percentage: z.number().min(0).max(100),
	endDate: z.date().nullable().optional(),
};

type FormValues = InferredZodSchema<typeof schema>;
export type DiscountFormStore = UseFormReturn<FormValues>;

const AddCoupon = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [state, setState] = useState();

	const { formStore, onSubmit } = useForm({
		schema,
		defaultValues: {},
		handleSubmit(validatedData) {
			console.log('validatedData coupon', validatedData);
		},
	});

	const handleSaveChanges = () => {
		// const data = {
		// 	name: discountName,
		// 	value: fixedAmount,
		// 	date: endDate,
		// 	used: used,
		// 	sales: minimumPrice,
		// };
		dispatch(postCoupons(data));
		navigate('/marketing/coupons');
	};

	return (
		<div>
			<HeaderSettings
				variant='settingTwoBtns'
				title={t('Add coupon')}
				btn1={{ text: t('Discard'), onClick: () => {} }}
				btn2={{
					text: t('Save Changes'),
					onClick: handleSaveChanges,
				}}
			/>
			<Form {...formStore}>
				<div className='p-4 flex justify-between gap-[1rem]'>
					<div className='w-full flex flex-col gap-[1rem]'>
						<BasicInfo formStore={formStore} />
						<CustomerSegment />
						<MinimumRequirements formStore={formStore} />
						<Limits formStore={formStore} />
						<ActiveDates setState={setState} />
					</div>
					<div className='bg-white w-[15rem] h-fit border p-3 border-constrained rounded-md flex flex-col gap-[1rem]'>
						<h3 className='text-title font-semibold'>{t('Quick actions')}</h3>
						<ToggleSwitch />
					</div>
				</div>
			</Form>
		</div>
	);
};

export default AddCoupon;

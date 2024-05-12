import { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'src/app/utils/hooks/form';
import { Form } from 'src/app/components/ui/form';
import { HeaderSettings } from 'src/app/components/optimized';
import BasicInfo from './BasicInfo/BasicInfo';

import Limits from './Limits/Limits';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postCoupons } from 'src/app/store/slices/marketing/coupons/couponsAsyncThunks';
import { useTranslation } from 'react-i18next';
import CustomerSegment from 'src/app/components/page/discount/Comp/CustomerSegment/CustomerSegment';
import QuickActions from 'src/app/components/optimized/UiKits/QuickActions';
import { newDiscountInterface } from '../../Discounts/NewDiscount/NewDiscount';
import ActiveDates from 'src/app/components/page/discount/Comp/ActiveDates';
import MinimumRequirements from 'src/app/components/page/discount/Comp/MinimumRequirements';

export interface newCouponInterface extends newDiscountInterface {
	usage: number;
}

const couponSchema = {
	name: z.string().min(3).max(60),
	percentage: z.coerce.number().min(0).max(100),
	value: z.coerce.number().min(0),
	sales: z.coerce.number().min(0),
	miniQuantity: z.coerce.number().min(0),
	usage: z.coerce.number().min(0),
	endDate: z.date().nullable().optional(),
};

const AddCoupon = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [state, setState] = useState();

	const handelDefaultValue = () => {
		return {
			name: '',
			percentage: 0,
			value: 0,
			sales: 0,
			miniQuantity: 0,
			usage: 0,
			endDate: null,
		};
	};

	const handleSaveChanges = async () => {
		try {
			const formData = formStore.getValues();
			await dispatch(postCoupons(formData));

			navigate('/marketing/coupons');
		} catch (error) {
			console.error('Error while saving changes:', error);
		}
	};

	const handleSubmit: (validatedData: newCouponInterface) => void = (
		values: newCouponInterface,
	) => {
		console.log(values);
		handleSaveChanges();
	};

	const { formStore, onSubmit } = useForm({
		schema: couponSchema,
		handleSubmit: handleSubmit,
		defaultValues: handelDefaultValue(),
	});

	const data = [{ id: 1, title: t('On') }];

	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit}>
				<HeaderSettings
					variant='settingTwoBtns'
					submit
					title={t('Add coupon')}
					btn1={{
						text: t('Discard'),
						onClick: () => {
							navigate(-1);
						},
					}}
					btn2={{
						text: t('Save Changes'),
						onClick: () => {},
					}}
				/>
				<div className='p-4 flex justify-between gap-[1rem]'>
					<div className='w-full flex flex-col gap-[1rem]'>
						<BasicInfo formStore={formStore} />
						<CustomerSegment />
						<MinimumRequirements formStore={formStore} />
						<Limits formStore={formStore} />
						<ActiveDates setState={setState} />
					</div>
					<div>
						<QuickActions data={data} />
					</div>
				</div>
			</form>
		</Form>
	);
};

export default AddCoupon;

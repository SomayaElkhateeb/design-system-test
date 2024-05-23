import { useForm } from 'src/app/utils/hooks/form';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import useCustomHookAddCoupon, { newCouponInterface } from './HookForAddCoupon';
import { Form } from 'src/app/components/ui/form';
import { postCoupons } from 'src/app/store/slices/marketing/coupons/couponsAsyncThunks';
import { HeaderSettings } from 'src/app/components/optimized';
import BasicInfo from './BasicInfo/BasicInfo';
import Limits from './Limits/Limits';
import CustomerSegment from 'src/app/components/page/discount/Comp/CustomerSegment/CustomerSegment';
import QuickActions from 'src/app/components/optimized/UiKits/QuickActions';
import ActiveDates from 'src/app/components/page/discount/Comp/ActiveDates';
import MinimumRequirements from 'src/app/components/page/discount/Comp/MinimumRequirements';

const AddCoupon = () => {
	// hook
	const { t } = useTranslation();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	// custom hook
	const { handelDefaultValue, couponSchema } = useCustomHookAddCoupon();

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
			<form onSubmit={onSubmit} className='flex-col-top-section-pages'>
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
				<div className='grid gap-5 lg:grid-cols-3 custom_container'>
					<div className='flex-col-top-section-pages lg:col-span-2'>
						<BasicInfo formStore={formStore} />
						<CustomerSegment />
						<MinimumRequirements formStore={formStore} />
						<Limits formStore={formStore} />
						{/* <ActiveDates formStore={formStore} /> */}
					</div>
					<div className='col-span-1'>
						<QuickActions data={data} />
					</div>
				</div>
			</form>
		</Form>
	);
};

export default AddCoupon;

import { useEffect, useState } from 'react';
import { useForm } from 'src/app/utils/hooks/form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Form } from 'src/app/components/ui/form';
import { HeaderSettings } from 'src/app/components/optimized';
import BasicInfo from './BasicInfo/BasicInfo';
import Limits from './Limits/Limits';
import useCustomHookAddCoupon, { addCouponInterface } from './HookForAddCoupon';
import { ActiveDatesCo, CustomerSegmentCo, MinimumRequirementsCo } from 'src/app/components/page';
import FormSwitchField from 'src/pages/SettingsPage/CustomizationsSettings/comp/FormSwitchField';

const AddCoupon = () => {
	// hook
	const { t } = useTranslation();
	const navigate = useNavigate();
	const [discountType, setDiscountType] = useState('Free shipping');
	const [applyToType, setApplyToType] = useState('All products');
	const [customerSegment, setCustomerSegment] = useState('All customers');

	const { handelDefaultValue, couponSchema } = useCustomHookAddCoupon();

	const handleSubmit: (validatedData: addCouponInterface) => void = (
		values: addCouponInterface,
	) => {
		console.log(values);
	};

	const { formStore, onSubmit } = useForm({
		schema: couponSchema(discountType, applyToType, customerSegment),
		handleSubmit: handleSubmit,
		defaultValues: handelDefaultValue(),
	});
	useEffect(() => {
		setDiscountType(formStore.watch('discountType'));
		setApplyToType(formStore.watch('applyToType'));
		setCustomerSegment(formStore?.watch('customerSegment'));
	}, [formStore]);

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
						<CustomerSegmentCo formStore={formStore} />
						<MinimumRequirementsCo formStore={formStore} />
						<Limits formStore={formStore} />
						<ActiveDatesCo formStore={formStore} />
					</div>
					<div className='col-span-1'>
						<div className='global-cards flex-col-top-section-pages'>
							<h3 className='title'>{t('Quick actions')}</h3>
							<div className='flex gap-[.2rem] items-end'>
								<FormSwitchField<addCouponInterface> formStore={formStore} name='active' enable />
								<p className='text-title text-sm font-normal '>
									{formStore.watch('active') ? 'on' : 'off'}
								</p>
							</div>
						</div>
					</div>
				</div>
			</form>
		</Form>
	);
};

export default AddCoupon;

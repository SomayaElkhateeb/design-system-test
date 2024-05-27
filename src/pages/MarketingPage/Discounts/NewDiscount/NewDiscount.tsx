import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { Form } from 'src/app/components/ui/form';
import { HeaderSettings } from 'src/app/components/optimized';
import BasicInfo from './BasicInfo/BasicInfo';
import useCustomHookNewDiscount, { newDiscountInterface } from './HookForNewDiscount';
import FormSwitchField from 'src/pages/SettingsPage/CustomizationsSettings/comp/FormSwitchField';
import { ActiveDates, CustomerSegment, MinimumRequirements } from 'src/app/components/page';
import { State, initialState } from 'src/app/components/page/discount/Comp/MinimumRequirements';
const NewDiscount = ({ coupon }: { coupon?: boolean }) => {
	// hook
	const navigate = useNavigate();
	const { t } = useTranslation();
	const [discountType, setDiscountType] = useState('Free shipping');
	const [applyToType, setApplyToType] = useState('All products');
	const [productXtoYType, setProductXtoYType] = useState<string | undefined>('Free');
	const [customerSegment, setCustomerSegment] = useState('All customers');
	const [updateState, setUpdateState] = useState<State>(initialState);

	const { selectedMinimumRequirements } = updateState;

	// custom hook
	const { onSubmit, formStore, updatedDates } = useCustomHookNewDiscount(
		discountType,
		applyToType,
		productXtoYType,
		customerSegment,
		selectedMinimumRequirements,
	);

	/////////////////////
	// /////////////////
	useEffect(() => {
		setDiscountType(formStore.watch('discountType'));
		setApplyToType(formStore.watch('applyToType'));
		setProductXtoYType(formStore?.watch('ProductXToProductYType'));
		setCustomerSegment(formStore?.watch('customerSegment'));
	}, [formStore]);

	//////////////////
	// ///////////////
	//  handel active date
	useEffect(() => {
		formStore.setValue('activeDates', updatedDates);
	}, [
		updatedDates.startActivation.startDate,
		updatedDates.startActivation.startTime,
		updatedDates.endActivation.endDate,
		updatedDates.endActivation.endTime,
	]);

	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='flex-col-top-section-pages'>
				<HeaderSettings
					variant='settingTwoBtns'
					submit
					title={coupon ? t('Add coupon') : t('Add Discount')}
					btn1={{
						text: t('Discard'),
						onClick: () => {
							navigate(-1);
						},
					}}
					btn2={{ text: t('Save Changes'), onClick: () => {} }}
				/>
				<div className='grid gap-5 lg:grid-cols-3 custom_container'>
					<div className='flex-col-top-section-pages lg:col-span-2'>
						<BasicInfo coupon={coupon} formStore={formStore} />
						<CustomerSegment formStore={formStore} />
						<MinimumRequirements
							updateState={updateState}
							setUpdateState={setUpdateState}
							formStore={formStore}
						/>
						<ActiveDates />
					</div>
					<div className='col-span-1'>
						<div className='global-cards flex-col-top-section-pages'>
							<h3 className='title'>{t('Quick actions')}</h3>
							<div className='flex gap-[.2rem] items-end'>
								<FormSwitchField<newDiscountInterface> formStore={formStore} name='active' enable />
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
export default NewDiscount;

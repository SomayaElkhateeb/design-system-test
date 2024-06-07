import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Button, SubHeader } from 'src/app/components/optimized';
import { ActiveDates, CustomerSegment, MinimumRequirements } from 'src/app/components/page';
import Limits from 'src/app/components/page/discount/Comp/Limits';
import { State, initialState } from 'src/app/components/page/discount/Comp/MinimumRequirements';
import { Form } from 'src/app/components/ui/form';
import FormSwitchField from 'src/pages/SettingsPage/CustomizationsSettings/comp/FormSwitchField';
import BasicInfo from './BasicInfo/BasicInfo';
import useCustomHookNewDiscount, { newDiscountInterface } from './HookForNewDiscount';

const NewDiscount = ({ coupon }: { coupon?: boolean }) => {
	// hook
	const navigate = useNavigate();
	const { t } = useTranslation();
	const [discountType, setDiscountType] = useState('Free shipping');
	const [applyToType, setApplyToType] = useState('All products');
	const [productXtoYType, setProductXtoYType] = useState<string | undefined>('Free');
	const [customerSegment, setCustomerSegment] = useState('All customers');
	const [updateState, setUpdateState] = useState<State>(initialState);
	const [isCheck, setIsCheck] = useState<boolean>(false);

	const { selectedMinimumRequirements } = updateState;

	// custom hook
	const { onSubmit, formStore, updatedDates } = useCustomHookNewDiscount(
		discountType,
		applyToType,
		productXtoYType,
		customerSegment,
		selectedMinimumRequirements,
		isCheck,
	);

	useEffect(() => {
		setDiscountType(formStore.watch('discountType'));
		setApplyToType(formStore.watch('applyToType'));
		setProductXtoYType(formStore?.watch('ProductXToProductYType'));
		setCustomerSegment(formStore?.watch('customerSegment'));
	}, [
		formStore.watch('discountType'),
		formStore.watch('applyToType'),
		formStore.watch('ProductXToProductYType'),
		formStore.watch('customerSegment'),
	]);

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
				<SubHeader title={coupon ? t('Add Coupon') : t('Add Discount')}>
					<Button variant='secondary' onClick={() => navigate(-1)}>
						{t('Discard')}
					</Button>
					<Button variant='primary' onClick={() => {}}>
						{t('Save Changes')}
					</Button>
				</SubHeader>
				<div className='grid gap-5 lg:grid-cols-3 custom_container'>
					<div className='flex-col-top-section-pages lg:col-span-2'>
						<BasicInfo coupon={coupon} formStore={formStore} />
						<CustomerSegment formStore={formStore} />
						<MinimumRequirements
							updateState={updateState}
							setUpdateState={setUpdateState}
							formStore={formStore}
						/>
						{coupon && <Limits isCheck={isCheck} setIsCheck={setIsCheck} formStore={formStore} />}
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

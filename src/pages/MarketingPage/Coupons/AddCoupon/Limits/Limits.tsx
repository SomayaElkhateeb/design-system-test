import { useState } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { CheckBox } from 'src/app/components/optimized';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';
import { addCouponInterface } from '../HookForAddCoupon';

const Limits = ({ formStore }: { formStore: UseFormReturn<addCouponInterface> }) => {
	const { t } = useTranslation();
	const [isChecked, setIsChecked] = useState<boolean>(formStore.watch('miniReq'));

	const handleCheckboxChange = (newValue: boolean) => {
		setIsChecked(newValue);
		formStore.setValue('miniReq', newValue);
	};

	return (
		<section className='global-cards'>
			<h3 className='text-title font-semibold'>{t('Limits')}</h3>
			<CheckBox
				label={t('Limit number of times this coupon can be used in total')}
				checked={isChecked}
				handleOnChange={handleCheckboxChange}
			/>

			{isChecked && (
				<div className='w-[24rem]'>
					<FormField
						formStore={formStore}
						name='limit'
						label={t('Usage number')}
						render={(field) => <Input type='number' {...field} />}
					/>
				</div>
			)}
			<CheckBox
				label={t('Limit to one use per customer')}
				checked={formStore.watch('limitUser')}
				handleOnChange={(option) => {
					formStore.setValue('limitUser', option);
				}}
			/>
		</section>
	);
};

export default Limits;

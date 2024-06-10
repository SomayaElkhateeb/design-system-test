import { useState } from 'react';
import Address from './Address';
import useCustomHookAddAddressForm from './Comp/HookAddress';
import { Form } from 'react-hook-form';
import { Button } from 'src/app/components/optimized';
import { useTranslation } from 'react-i18next';

export const OrderAddress = () => {
	const [sendGift, setSendGift] = useState(false);
	const [selectedOption, setSelectedOption] = useState('Add manually');
	const { t } = useTranslation();
	//  custome hook
	const { formStore, onSubmit } = useCustomHookAddAddressForm(sendGift, selectedOption);

	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='flex-col-top-section-pages gap-4'>
				<Address
					sendGift={sendGift}
					setSendGift={setSendGift}
					selectedOption={selectedOption}
					setSelectedOption={setSelectedOption}
					formStore={formStore}
				/>

				<div className='flex-btn-end'>
					<Button variant='secondary'>{t('back')}</Button>
					<Button type='submit' variant='primary' onClick={onSubmit}>
						{t('Next')}
					</Button>
				</div>
			</form>
		</Form>
	);
};

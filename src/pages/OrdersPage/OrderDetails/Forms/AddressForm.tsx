import { useState } from 'react';
import useCustomHookAddAddressForm from '../../AddOrder/Comp/useOrderAddress';
import { Form } from 'react-hook-form';
import { Button } from 'src/app/components/optimized';
import { useTranslation } from 'react-i18next';
import Address from '../../AddOrder/Address';

export default function AddressForm({ handleAddressForm }: { handleAddressForm: boolean }) {
	const [sendGift, setSendGift] = useState(false);
	const [selectedOption, setSelectedOption] = useState('Add manually');
	const { t } = useTranslation();
	//  custome hook
	const { formStore, onSubmit } = useCustomHookAddAddressForm(sendGift, selectedOption, isName);

	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='flex-col-global gap-4'>
				<Address
					isName
					sendGift={sendGift}
					setSendGift={setSendGift}
					selectedOption={selectedOption}
					setSelectedOption={setSelectedOption}
					formStore={formStore}
				/>

				<div className='flex-btn-end'>
					<Button variant='secondary' onClick={handleAddressForm}>
						{t('back')}
					</Button>
					<Button type='submit' variant='primary' onClick={onSubmit}>
						{t('Next')}
					</Button>
				</div>
			</form>
		</Form>
	);
}

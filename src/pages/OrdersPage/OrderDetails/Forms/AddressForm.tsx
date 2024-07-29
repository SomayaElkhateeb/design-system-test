import { useState } from 'react';

import { Form } from 'react-hook-form';
import { Button } from 'src/app/components/optimized';
import { useTranslation } from 'react-i18next';
import Address from '../../AddOrder/Comp/AddOrderAddresse/_comp/Address';
import useOrderAddress from '../../AddOrder/Comp/AddOrderAddresse/_hook/useOrderAddress';


export default function AddressForm({ handleAddressForm }: { handleAddressForm: () => void }) {
	const [sendGift, setSendGift] = useState(false);
	const [selectedOption, setSelectedOption] = useState('Add manually');
	const { t } = useTranslation();
	//  custom hook
	const { formStore, onSubmit } = useOrderAddress(sendGift, selectedOption, true);

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

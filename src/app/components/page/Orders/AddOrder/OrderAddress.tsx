import Address from './Address';
import useOrderAddress from './Comp/useOrderAddress';
import { Form } from 'react-hook-form';
import { Button } from 'src/app/components/optimized';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export const OrderAddress = ({ onNext, onBack }: { onNext: () => void; onBack: () => void }) => {
	const { t } = useTranslation();
	const [sendGift, setSendGift] = useState(false);
	const [selectedOption, setSelectedOption] = useState('Add manually');

	const { formStore, onSubmit } = useOrderAddress({ sendGift, selectedOption, onNext });

	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='flex-col-global gap-4 cardDetails-sharedClass p-5'>
				<Address
					giftOption
					useMapPicker
					sendGift={sendGift}
					formStore={formStore}
					setSendGift={setSendGift}
					selectedOption={selectedOption}
					setSelectedOption={setSelectedOption}
				/>
				<div className='flex-btn-end'>
					<Button variant='tertiary' text={t('back')} onClick={onBack} />
					<Button variant='primary' text={t('Next')} onClick={onSubmit} />
				</div>
			</form>
		</Form>
	);
};

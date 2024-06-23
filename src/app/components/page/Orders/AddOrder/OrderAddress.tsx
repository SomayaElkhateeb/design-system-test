import Address from './Address';
import useOrderAddress from './Comp/useOrderAddress';
import { Form } from 'react-hook-form';
import { Button } from 'src/app/components/optimized';
import { useTranslation } from 'react-i18next';

export const OrderAddress = () => {
	const { t } = useTranslation();

	const { formStore, onSubmit } = useOrderAddress();

	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='flex-col-global gap-4 cardDetails-sharedClass p-5'>
				<Address formStore={formStore} giftOption geoPicker/>
				<div className='flex-btn-end'>
					<Button variant='tertiary' text={t('back')} disabled />
					<Button variant='primary' text={t('Next')} onClick={onSubmit} />
				</div>
			</form>
		</Form>
	);
};

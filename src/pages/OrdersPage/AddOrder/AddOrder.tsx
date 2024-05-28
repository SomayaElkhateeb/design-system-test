import { useTranslation } from 'react-i18next';
import { HeaderSettings, VerticalTabs } from 'src/app/components/optimized';
import { AddCheckout, Address, Customer, Products } from 'src/app/components/page';
import { Form } from 'src/app/components/ui/form';

export default function AddOrder() {
	const { t } = useTranslation();

	const tabs = [
		{
			title: t('customer'),
			content: <Customer />,
		},
		{
			title: t('products'),
			content: <Products />,
		},
		{
			title: t('address'),
			content: <Address />,
		},
		{
			title: t('checkout'),
			content: <AddCheckout />,
		},
	];
	return (
		<>
			<HeaderSettings title={t('add new order')} submit />
			<div className='container mx-0 py-5 w-3/4'>
				<VerticalTabs tabs={tabs} />
			</div>
		</>
	);
}

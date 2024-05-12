import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Button, HeaderSettings } from 'src/app/components/optimized';
import { Switch } from 'src/app/components/ui/switch';
import { EditIcon } from 'src/app/utils/icons';
import { images } from 'src/pages/SettingsPage/comp/data';

export default function Shipping() {
	const { t } = useTranslation();
	const navigate = useNavigate();
	return (
		<div className='flex-col-top-section-pages'>
			<HeaderSettings title={t('shipping')} />
			<div className='flex-col-top-section-pages container mx-auto'>
				{/* providers */}
				<CardShipping
					title={t('Third party shipping providers')}
					description={t('Providers that enable you to ship products to your customers')}
				>
					<div className='flex gap-2'>
						{images.map((e) => {
							return <img src={e.ImageURL} key={e.id} />;
						})}
					</div>
					<p className='text-subtitle text-sm py-3 w-[50%] leading-6'>
						{t(
							'Compare over 6 different Shipping providers and pick the one that suits your needs',
						)}
					</p>
					<div>
						<Button variant='primary' onClick={() => navigate('setupProviders')}>
							{t('setup providers')}
						</Button>
					</div>
				</CardShipping>
				{/* methods */}
				<CardShipping
					title={t('other methods')}
					description={t(
						'Shipments that are processed outside your online store. When a customer purchases an order, you need to handle the delivery yourself',
					)}
				>
					<hr />
					<div className='flex justify-between items-center py-1'>
						<h3 className='title text-sm'>Deliver yourself</h3>
						<div className='flex items-center gap-4'>
							<Button variant='tertiary' LeftIcon={EditIcon}>
								open setup
							</Button>
							<Switch />
						</div>
					</div>
					<hr />
					<div className='flex justify-between items-center pt-1'>
						<h3 className='title text-sm'>Self pickup </h3>
						<Button variant='secondary'>activate</Button>
					</div>
				</CardShipping>
			</div>
		</div>
	);
}

function CardShipping({
	title,
	description,
	children,
}: {
	title: string;
	description: string;
	children: React.ReactNode;
}) {
	return (
		<div className='serviceDetails-sharedClass p-5 flex-col-top-section-pages gap-2'>
			<div className='flex-col-top-section-pages gap-0'>
				<h2 className='title'>{title}</h2>
				<p className='text-title text-sm py-3 w-[60%]'>{description}</p>
			</div>

			{children}
		</div>
	);
}

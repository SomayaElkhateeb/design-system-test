import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { HeaderSettings } from 'src/app/components/optimized';
import SetupInfo from '../SetupInfo';
import QuickActions from 'src/app/components/optimized/UiKits/QuickActions';
import Location from '../Comp/Location';

const locationData = [
	{
		id: 1,
		title: 'Riyadh warehouse',
		location: 'Meed Market, 15 Haroon Al Rashied st.',
		city: 'Al Jazera, Riyadh',
		country: 'Saudi Arabia',
		phone: 96841564566,
		main: true,
	},
	{
		id: 2,
		title: 'Riyadh warehouse',
		location: 'Meed Market, 15 Haroon Al Rashied st.',
		city: 'Al Jazera, Riyadh',
		country: 'Saudi Arabia',
		phone: 96841564566,
		main: false,
	},
];
export default function SelfPickup() {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const data = [{ id: 1, title: t('Enabled') }];

	return (
		<div>
			<HeaderSettings
				variant='settingTwoBtns'
				title={t('self pickup')}
				btn1={{
					text: t('Discard'),
					onClick: () => {
						navigate(-1);
					},
				}}
				btn2={{
					text: t('Save Changes'),
					onClick: () => {},
				}}
			/>

			<div className='grid gap-5 lg:grid-cols-3 container mx-auto py-5'>
				<div className='flex-col-top-section-pages lg:col-span-2 gap-0'>
					<SetupInfo gap={true} rates={false} ratesDeliver={false} />
					<div className='cardDetails-sharedClass p-5 flex flex-col gap-3'>
						<h3 className='text-title font-semibold'>{t('Location')}</h3>
						<Location data={locationData} />
					</div>
				</div>
				<div className='col-span-1'>
					<QuickActions data={data} />
				</div>
			</div>
		</div>
	);
}

import { useTranslation } from 'react-i18next';
import { Accordion, HeaderSettings, LabelIcon } from 'src/app/components/optimized';

import { getImageUrl } from 'src/app/utils';
import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { MoreIcon } from 'src/app/utils/icons';
import MenuOptions from 'src/app/components/optimized/Menu/MenuOptions';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { contact, pricing, smsa } from 'src/pages/SettingsPage/data';
import { useNavigate } from 'react-router-dom';
import ContactCard from '../Comp/ContactCard';

export default function Smsa() {
	const { t } = useTranslation();
	const [install, setInstall] = useState(false);
	const navigate = useNavigate();

	// Determine the status based on the install state
	const status = install ? 'installed' : 'free';

	let backgroundColor: string, textColor: string;

	switch (status) {
		case 'free':
			backgroundColor = '#EEF9F5';
			textColor = '#49A882';
			break;
		case 'installed':
			backgroundColor = '#F3F7FF';
			textColor = '#0B47D9';
			break;
		default:
			backgroundColor = 'gray';
			textColor = 'white';
			break;
	}
	const options = [
		{
			id: 1,
			text: t('delete'),
			icon: <RiDeleteBin5Line color='pri-dark' />,
		},
	];
	return (
		<div className='flex-col-top-section-pages '>
			{install ? (
				<HeaderSettings
					title={t('SMSA')}
					variant='settingBtnAndIcon'
					btn1={{
						text: t('open setup'),
						onClick: () => {
							navigate('openSetup');
						},
					}}
					icon={
						<MenuOptions
							btn={<MoreIcon className='fill-subtitle' />}
							options={options}
							handle={() => console.log('uninstall')}
						/>
					}
				/>
			) : (
				<HeaderSettings
					title={t('SMSA')}
					variant='settingOneBtn'
					btn1={{
						text: t('Install now'),
						onClick: () => {
							setInstall(true);
						},
					}}
				/>
			)}
			<div className='grid gap-5 lg:grid-cols-3 container mx-auto '>
				<div className='flex-col-top-section-pages lg:col-span-2'>
					<section className='cardDetails-sharedClass p-5'>
						<div className='flex gap-3 pb-2'>
							<img src={getImageUrl('companies/express.svg')} className='w-44' />
							<div>
								<h2 className=' title text-[16px]'>{t('SMSA')}</h2>
								<p className='text-title text-xs capitalize pt-1.5 pb-3'>
									{t('Saudi Arabia')} <span className='text-primary'>(120 Cities)</span>
								</p>

								<div className='w-fit'>
									<LabelIcon
										text={install ? status : 'free'}
										backgroundColor={backgroundColor}
										textColor={textColor}
										icon={status === 'installed' ? <FaCheck size={10} color='#0B47D9' /> : null}
									/>
								</div>
							</div>
						</div>
						<p className='bg-secondary rounded text-sm text-white px-2 py-1 w-fit'>
							% {t('Discounted rates')}
						</p>
						<div className='pt-5 flex flex-col gap-5 w-[60%]'>
							{smsa.map((item) => (
								<div key={item.id}>
									<h3 className='text-title font-semibold'>{item.title}</h3>
									<p className='text-sm text-title'>{item.description}</p>
								</div>
							))}
						</div>
					</section>
					{/* FAQs */}
					<section className='cardDetails-sharedClass p-5'>
						<h3>{t('FAQs')}</h3>
						<div className='flex flex-col gap-4 pt-5'>
							<Accordion title='Do they deliver in 1 day?' subtitle='Do they deliver in 1 day?' />
							<Accordion
								title='Do they charge for monthly plans'
								subtitle='Yes we do that exactly'
							/>
						</div>
					</section>
				</div>

				<div className='col-span-1'>
					<ContactCard title='Pricing' data={pricing} contacts={false} id={0} />
					<ContactCard title='Contact' data={contact} contacts={true} id={0} />
				</div>
			</div>
		</div>
	);
}

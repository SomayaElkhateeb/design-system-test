import { IoCloseCircleOutline } from 'react-icons/io5';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import {
	CustomersIcon,
	OrdersIcon,
	ProductsIcon,
	SearchIcon,
	StoresIcon,
} from 'src/app/utils/icons';
import { InputRow } from '..';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import LinkCards from './LinkCards';
import { UseLanguage } from '../../CustomHook/LanguageHook';
import Slider from '../UiKits/Slider';

const HelpCenterCard = ({ onClose }: { onClose: () => void }) => {
	const { t } = useTranslation();
	const [searchValue, setSearchValue] = useState('');
	const language = UseLanguage();

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const card = document.getElementById('HelpCenter-card');
			if (card && !card.contains(event.target as Node)) {
				onClose();
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [onClose]);

	const slides = [
		{
			image: '/Rectangle.png',
			title: t('How to finish steps'),
			description: 'Description for Description for Card 1',
		},
		{
			image: '/Rectangle.png',
			title: t('How to register domain'),
			description: 'Description for Card 1.',
		},
		{
			image: '/Rectangle.png',
			title: t('SEO in details'),
			description: 'Description for Card 1.',
		},
		{
			image: '/Rectangle.png',
			title: t('How to finish steps'),
			description: 'Description for Card 1.',
		},
		{
			image: '/Rectangle.png',
			title: t('How to finish steps'),
			description: 'Description for Card 1.',
		},
	];
	return (
		<div
			id='HelpCenter-card'
			className={`bg-white w-80 p-3 pb-5 absolute shadow-lg top-[4.5rem] ${
				language === 'ar'
					? 'rounded-tr-md rounded-br-md left-2'
					: 'rounded-tl-md rounded-bl-md right-2'
			} `}
		>
			<div className=' flex flex-col gap-4 '>
				<div className='flex justify-between items-center '>
					<h3 className='text-title text-lg font-semibold'>{t('Help center')}</h3>
					<IoCloseCircleOutline onClick={onClose} className='text-pri-dark size-5 cursor-pointer' />
				</div>
				<InputRow
					leftIcon={<SearchIcon className='fill-hint' />}
					placeholder={t('Search')}
					value={searchValue}
					onChange={(e) => setSearchValue(e.target.value)}
				/>
				<div>
					<h4 className='font-semibold text-title'>Get started</h4>

					<div className='grid grid-cols-2 gap-2 mt-4'>
						<LinkCards to='/store' Icon={StoresIcon} title={t('Creating store')} />
						<LinkCards to='/products' Icon={ProductsIcon} title={t('Products')} />
						<LinkCards to='/orders' Icon={OrdersIcon} title={t('Orders')} />
						<LinkCards to='/customers' Icon={CustomersIcon} title={t('Customers')} />
					</div>
				</div>

				<div>
					<Slider size='mini' slides={slides} title={t('Video tutorials')} />
				</div>
			</div>
			<div className='flex justify-between items-center'>
				<h4>{t('Contact Us')}</h4>
				<button onClick={() => console.log('aa')}>
					{language === 'ar' ? (
						<FaAngleLeft className='text-title' />
					) : (
						<FaAngleRight className='text-title' />
					)}
				</button>
			</div>
		</div>
	);
};

export default HelpCenterCard;
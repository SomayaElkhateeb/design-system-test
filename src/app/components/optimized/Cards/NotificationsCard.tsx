import { IoCloseCircleOutline } from 'react-icons/io5';
import { UseLanguage } from '../../CustomHook/LanguageHook';
import { Button } from '..';
import { useTranslation } from 'react-i18next';
import { HiExternalLink } from 'react-icons/hi';
import { useEffect } from 'react';

const NotificationsCard = ({ onClose }: { onClose: () => void }) => {
	const language = UseLanguage();
	const { t } = useTranslation();

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const card = document.getElementById('notifications-card');
			if (card && !card.contains(event.target as Node)) {
				onClose();
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [onClose]);
	return (
		<div
			id='notifications-card'
			className={`bg-white w-80 pt-3 pb-5 absolute shadow-lg top-[4.5rem] z-50 ${
				language === 'ar'
					? 'rounded-tr-md rounded-br-md left-2'
					: 'rounded-tl-md rounded-bl-md right-2'
			} `}
		>
			<div className='flex justify-between items-center px-3'>
				<h3 className='text-title text-lg font-semibold'>{t('Notifications')}</h3>
				<IoCloseCircleOutline onClick={onClose} className='text-pri-dark size-5 cursor-pointer' />
			</div>
			<Abandoned />
			<hr />
			<ChangeCustomer />
			<hr />
			<Subscription />
			<hr />
			<OutOf />
		</div>
	);
};

export default NotificationsCard;

const Abandoned = () => {
	const { t } = useTranslation();
	return (
		<div className='p-3 flex flex-col gap-2 items-start'>
			<div className='flex items-center gap-2'>
				<span className='text-subtitle text-sm'>Yesterday</span>
				<button className='bran-sec-btn'>{t('New')}</button>
			</div>

			<p className='text-sm text-title'>Abandoned cart is here</p>
			<p className='text-xs text-subtitle leading-relaxed'>
				Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
				consequat duis enim velit mollit. Exercitation veniam consequat sunt to kd fgsdf Learn more
			</p>

			<Button variant='link'>
				<span className='flex items-center gap-2'>
					{t('learn more')} <HiExternalLink />
				</span>
			</Button>
		</div>
	);
};

const ChangeCustomer = () => {
	const { t } = useTranslation();
	return (
		<div className='p-3 flex flex-col gap-2 items-start'>
			<div className='flex items-center gap-2'>
				<span className='text-subtitle text-sm'>1 Week ago</span>
				<button className='bran-sec-btn'>{t('New')}</button>
			</div>

			<p className='text-sm text-title'>Now you can change customer groups</p>

			<div className='flex items-center gap-3'>
				<button className='btn-pri'>{t('download app')}</button>
				<Button variant='link'>
					<span className='flex items-center gap-2'>
						{t('learn more')} <HiExternalLink />
					</span>
				</Button>
			</div>
		</div>
	);
};

const Subscription = () => {
	const { t } = useTranslation();
	return (
		<div className='p-3 flex flex-col gap-2 items-start'>
			<span className='text-subtitle text-sm'>last Week</span>
			<p className='text-sm text-title'>Your subscription is about to end</p>

			<div className='flex items-center gap-3'>
				<button className='btn-pri'>{t('update payment')}</button>
				<Button variant='link'>
					<span className='flex items-center gap-2'>
						{t('learn more')} <HiExternalLink />
					</span>
				</Button>
			</div>
		</div>
	);
};

const OutOf = () => {
	return (
		<div className='p-3 flex flex-col gap-2 items-start'>
			<span className='text-subtitle text-sm'>last Week</span>
			<p className='text-sm text-title'>Iphone X is now out of stock</p>
		</div>
	);
};

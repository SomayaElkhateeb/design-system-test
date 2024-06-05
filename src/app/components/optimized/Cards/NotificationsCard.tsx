import { IoCloseCircleOutline } from 'react-icons/io5';
import { UseLanguage } from '../../CustomHook/LanguageHook';
import { useTranslation } from 'react-i18next';
import { useClickOutsideWithId } from 'src/app/utils';
import Abandoned from './NotificationCards/Abandoned';
import Subscription from './NotificationCards/Subscription';
import ChangeCustomer from './NotificationCards/ChangeCustomer';

/**
 * NotificationsCard component displays a notification panel with various notification cards.
 * It closes when a click occurs outside of its boundaries.
 *
 * @param onClose Function to call when the notifications panel is closed.
 */
const NotificationsCard = ({ onClose }: { onClose: () => void }) => {
	const language = UseLanguage();
	const { t } = useTranslation();
	const id = 'notifications-card';

	// Handle click outside of the notifications panel to close it
	useClickOutsideWithId(id, onClose);

	return (
		<div
			id={id}
			className={`bg-white w-80 pt-3 pb-5 absolute shadow-lg top-[4.5rem] z-30 max-h-[32rem] overflow-hidden ${
				language === 'ar'
					? 'rounded-tr-md rounded-br-md left-2'
					: 'rounded-tl-md rounded-bl-md right-2'
			} `}
			style={{ overflowY: 'auto' }}
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

/**
 * OutOf component displays a notification for an item that went out of stock.
 */
const OutOf = () => {
	return (
		<div className='p-3 flex flex-col gap-2 items-start'>
			<span className='text-subtitle text-sm'>last Week</span>
			<p className='text-sm text-title'>Iphone X is now out of stock</p>
		</div>
	);
};

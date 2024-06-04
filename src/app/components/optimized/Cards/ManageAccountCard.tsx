import { IoAddCircle } from 'react-icons/io5';
import { LogoutIcon, Person } from 'src/app/utils/icons';
import { UseLanguage } from '../../CustomHook/LanguageHook';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';
import { useClickOutsideWithId } from 'src/app/utils';
import CollapsibleSection from './ManagementCards/CollapsibleSection';
import CopyableSection from './ManagementCards/CopyableSection';
import Collapsible from './ManagementCards/Collapsible';

/**
 * ManageAccountCard component displays a panel for managing the user's account settings.
 * It closes when a click occurs outside of its boundaries.
 *
 * @param onClose Function to call when the manage account panel is closed.
 */
const ManageAccountCard = ({ onClose, menu }: { onClose: () => void; menu?: boolean }) => {
	const language = UseLanguage();
	const { t } = useTranslation();
	const id = 'ManageAccount-card';

	// Handle click outside of the manage account panel to close it
	useClickOutsideWithId(id, onClose);

	return (
		<div
			id={id}
			className={`${
				menu ? 'w-full bg-light-2' : 'bg-white w-80 pt-3 pb-5 absolute shadow-lg top-[4.5rem]'
			} ${
				language === 'ar'
					? 'rounded-tr-md rounded-br-md left-2'
					: 'rounded-tl-md rounded-bl-md right-2'
			} `}
		>
			<div className='p-4 flex justify-between items-center'>
				<div className='flex gap-3 items-center'>
					<Person />
					<h2 className='text-sm text-title'>{t('Manage account')}</h2>
				</div>
				{menu ? '' : <IoCloseCircleOutline onClick={onClose} className='text-lg cursor-pointer' />}
			</div>
			<hr />

			<div className='flex justify-between p-4'>
				<h3 className='font-semibold text-title text-sm'>{t('Stores')}</h3>
				<IoAddCircle size={18} className='cursor-pointer text-title' />
			</div>

			<CopyableSection content='content------------' />

			<hr />
			<Collapsible />

			<hr />
			<CollapsibleSection />

			<hr />
			<div className='p-4 text-title'>
				<div className='flex gap-3 items-center'>
					<LogoutIcon />
					<h3 className='cursor-pointer'>{t('Sign Out')}</h3>
				</div>
			</div>
		</div>
	);
};

export default ManageAccountCard;

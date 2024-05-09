import { useTranslation } from 'react-i18next';
import { Button, ClientBox, HeaderSettings } from 'src/app/components/optimized';
import Avatar from 'src/app/components/optimized/UiKits/Avatar';
import { IoMdAddCircle } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

export default function Users() {
	const { t } = useTranslation();

	return (
		<>
			<HeaderSettings title={t('users & Permissions')} to={-1} />
			<div className='p-5 w-3/4 flex flex-col gap-5'>
				<Owner />
				<Staff />
			</div>
		</>
	);
}

function Owner() {
	const { t } = useTranslation();
	return (
		<div className='serviceDetails-sharedClass p-5 '>
			<h2 className='text-title font-semibold'>{t('Owner')}</h2>
			<p className='text-subtitle text-sm py-3'>
				{t('Add users and define what can they see or do in your store.')}
			</p>

			<div className='flex justify-between items-center pt-2'>
				<ClientBox
					title='Mohamed Samy'
					details='Active 3 days ago'
					avatar={<Avatar variant='user' firstName='samy' />}
				/>
				<Button variant='tertiary'>{t('Transfer Ownership')}</Button> {/* link */}
			</div>
		</div>
	);
}
function Staff() {
	const { t } = useTranslation();
	const navigate = useNavigate();
	return (
		<div className='serviceDetails-sharedClass p-5 '>
			<h2 className='text-title font-semibold'>{t('Staff')}</h2>
			<p className='text-subtitle text-sm py-3'>
				{t('Add users and define what can they see or do in your store.')}
			</p>
			<div className='flex justify-between items-center pt-2 pb-4'>
				<ClientBox
					title='Ahmed Seilamn'
					details='Marketeer'
					avatar={<Avatar variant='user' firstName='Ahmed' />}
				/>
				<div className='flex items-center gap-2'>
					<p>{t('Active 3 days ago')}</p>
					<Button variant='secondary'>{t('manage')}</Button> {/* link */}
				</div>
			</div>
			<hr className='py-2' />
			<Button LeftIcon={IoMdAddCircle} onClick={() => navigate('addStuff')}>
				{t('add staff')}
			</Button>{' '}
			{/* link */}
		</div>
	);
}

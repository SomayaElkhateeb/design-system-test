import { useTranslation } from 'react-i18next';
import { ClientBox } from 'src/app/components/optimized';
import Avatar from 'src/app/components/optimized/UiKits/Avatar';

export default function Summary() {
	const { t } = useTranslation();
	return (
		<div className='cardDetails-sharedClass p-5 flex flex-col gap-3'>
			<h4 className='text-sm text-subtitle'>{t('Summary')}</h4>

			<div className='flex items-center justify-between text-title'>
				<p>{t('Number of hours')}</p>
				<span className='text-lg'>5</span>
			</div>

			<div className='flex items-center justify-between'>
				<p>{t('Hour price')}</p>
				<span className='text-lg'>{t('SAR')} 200</span>
			</div>
			<hr />
			<div className='flex items-center justify-between'>
				<p>{t('Total')}</p>
				<span className='text-lg font-semibold'>{t('SAR')} 1000</span>
			</div>
			<hr />

			<div>
				<ClientBox
					avatar={<Avatar variant='user' firstName='Samy' size='lg' />}
					title='Samy Ryan'
					details='Identity designer'
				/>
				<p className='pt-2 text-title text-sm'>{t('Let’s generate sales')}</p>
			</div>
		</div>
	);
}

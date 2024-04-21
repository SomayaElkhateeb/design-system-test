import { useTranslation } from 'react-i18next';
import VerticalTabs from './VerticalTabsCopy';
import { tabs } from './data';

const Setups = () => {
	const { t } = useTranslation();

	return (
		<div>
			<h2 className='text-title text-lg font-semibold'>{t('Get ready for your first sale')}</h2>
			<p className='text-title text-sm mb-4'>
				{t('There are only 2 main steps to launch your store')},
				<span className='btn-lin px-0 hover:bg-transparent cursor-pointer'>{t('Follow our tips')}</span>
				{t('to get started')}
			</p>
			<VerticalTabs tabs={tabs} />
		</div>
	);
};

export default Setups;

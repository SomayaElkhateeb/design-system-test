import { Switch } from '../../ui/switch';
import { useTranslation } from 'react-i18next';

export default function QuickActions({ data }: { data: { id: number; title: string }[] }) {
	const { t } = useTranslation();
	return (
		<div className='global-cards w-72'>
			<h3 className='text-title font-semibold'>{t('Quick actions')}</h3>
			{data.map((item) => {
				return (
					<div className='flex items-center gap-3' key={item.id}>
						<Switch />
						<p>{item.title}</p>
					</div>
				);
			})}
		</div>
	);
}

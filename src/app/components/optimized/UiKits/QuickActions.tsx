import { Switch } from '../../ui/switch';
import { useTranslation } from 'react-i18next';

export default function QuickActions({ data }: { data: { id: number; title: string }[] }) {
	const { t } = useTranslation();
	return (
		<div className='global-cards flex-col-top-section-pages'>
			<h3 className='title'>{t('Quick actions')}</h3>
			{data?.map((e) => (
				<div key={e.id} className='flex items-center gap-3'>
					<Switch />
					<p>{e.title}</p>
				</div>
			))}
		</div>
	);
}

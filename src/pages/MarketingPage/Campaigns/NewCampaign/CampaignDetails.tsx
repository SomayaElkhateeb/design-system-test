import { useTranslation } from 'react-i18next';

import { CampaignFormProps } from '../useCampaign';
import { Input } from 'src/app/components/ui/input';
import FormField from 'src/app/components/ui/form/field';
import { Textarea } from 'src/app/components/ui/textarea';
import SpecificProducts from 'src/app/components/page/discount/Selectors/SpecificProducts';

export default function CampaignDetails({ formStore }: CampaignFormProps) {
	const { t } = useTranslation();

	return (
		<div className='global-cards grid grid-cols-2'>
			<h2 className='title mb-2 col-span-2'>{t('Campaign details')}</h2>
			<div className='grid gap-4 col-span-2 xl:col-span-1'>
				<FormField
					formStore={formStore}
					name='campaignName'
					label={t('Account number')}
					render={(field) => <Input {...field} />}
				/>
				<FormField
					formStore={formStore}
					name='activityName'
					label={t('Account number')}
					render={(field) => <Input {...field} />}
				/>
				<div>
					<SpecificProducts />
					<p className='paragraph text-subtitle'>{t('Select up to 5 products to promote.')}</p>
				</div>
				<FormField
					formStore={formStore}
					name='adText'
					label={t('Details & instructions (optional)')}
					render={(field) => <Textarea {...field} />}
				/>
			</div>
		</div>
	);
}
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { SubHeader, Button } from 'src/app/components/optimized';
import SeoSearchSection from './SeoSearchSection';
import { useForm } from 'src/app/utils/hooks/form';

import { Form } from 'src/app/components/ui/form';
import MaintainanceSection from './MaintainanceSection';
import PasswordSection from './PasswordSection';
import SocialSharingSection from './SocialSharingSection';
import RecaptchaEnable from './CaptchaEnable';
import useCustomHookPreferncePage, { preferncesInterface } from './HookForPreferncePageForm';

export default function PreferencesPage() {
	//  hooks
	const { t } = useTranslation();
	const navigate = useNavigate();

	const handleSubmit = (values: preferncesInterface) => {
		console.log(values);
		// handelclose();
	};

	const { PrefernceSchema, handelDefaultValue } = useCustomHookPreferncePage();

	const { formStore, onSubmit } = useForm({
		schema: PrefernceSchema,
		handleSubmit: handleSubmit,
		defaultValues: handelDefaultValue(),
	});

	return (
		<Form {...formStore}>
			<form className='flex-col-top-section-pages gap-[2rem]' onSubmit={onSubmit}>
				<SubHeader title={t('Store Preferences')}>
					<Button variant='secondary' onClick={() => navigate(-1)}>
						{t('Discard')}
					</Button>
					<Button variant='primary' onClick={() => {}}>
						{t('Save Changes')}
					</Button>
				</SubHeader>
				<div className='custom_container  grid gap-5 grid-cols-1'>
					<div className='flex-col-top-section-pages lg:w-[75%] '>
						<SeoSearchSection formStore={formStore} />
						<SocialSharingSection formStore={formStore} />
						<RecaptchaEnable formStore={formStore} />
						<PasswordSection formStore={formStore} />
						<MaintainanceSection formStore={formStore} />
					</div>
				</div>
			</form>
		</Form>
	);
}

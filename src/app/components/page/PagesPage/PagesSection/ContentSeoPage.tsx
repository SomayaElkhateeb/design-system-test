import { useTranslation } from 'react-i18next';
import { UseFormReturn } from 'react-hook-form';

import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';

import CustomAutoComplete from 'src/app/components/optimized/InputsFields/AutoCompleteMultiple';
import { addPageInterface } from '../HookForAddBlogOrPageForm';
import SpecificAutoCompleteInput from '../../discount/Selectors/SpecificAutoCompleteInput';

export interface selectItemsInterface {
	id: string;
	name: string;
}


export default function ContentSeoPage({
	formStore,
	open,
}: {
	formStore: UseFormReturn<addPageInterface>;
	open: boolean;
}) {
	const { t } = useTranslation();

	

	return (
		<div
			className={`flex-col-top-section-pages gap-4  lg:w-[70%] ${
				open ? 'opacity-100' : 'opacity-0'
			} duration-75 transition ease-linear`}
		>
			<FormField
				formStore={formStore}
				name='pageTitle'
				label={t('Page Title')}
				render={(field) => <Input {...field} />}
			/>
			<FormField
				formStore={formStore}
				name='link'
				label={t('Link')}
				render={(field) => <Input {...field} />}
			/>

			
			<SpecificAutoCompleteInput<addPageInterface>
				name='Metakeywords'
				label={t('Meta keywords')}
				formStore={formStore}
			/>
			<FormField
				formStore={formStore}
				name='metaDescription'
				label={t('Meta description tag')}
				render={(field) => <Input {...field} placeholder={t('Short description')} />}
			/>
		</div>
	);
}

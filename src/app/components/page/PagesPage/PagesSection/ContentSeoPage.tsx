import { useTranslation } from 'react-i18next';
import { UseFormReturn } from 'react-hook-form';

import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';
import { addPageInterface } from 'src/pages/PagesPage/comp/AddPage';
import CustomAutoComplete from 'src/app/components/optimized/InputsFields/AutoCompleteMultiple';

export interface selectItemsInterface {
	id: string;
	name: string;
}
const selectItems = [
	{ id: '1', name: 'Dress' },
	{ id: '2', name: 'Fashion' },
];

export default function ContentSeoPage({
	formStore,
	open,
}: {
	formStore: UseFormReturn<addPageInterface>;
	open: boolean;
}) {
	const { t } = useTranslation();

	const handelAutoCompleteError = () => {
		return (
			formStore.watch('Metakeywords').length === 0 &&
			formStore.formState.isSubmitted && (
				<p className='global_error'>{'choose meta keywords required'}</p>
			)
		);
	};

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

			<div className='flex-col-top-section-pages gap-0'>
				<FormField
					formStore={formStore}
					name='Metakeywords'
					label={t('Meta keywords')}
					render={(field) => (
						<CustomAutoComplete<selectItemsInterface>
							placeholder={t('Type and add')}
							getvalue={(value) => formStore.setValue('Metakeywords', value)}
							name='Metakeywords'
							array={selectItems}
							MainValue={formStore.watch('Metakeywords')}
						/>
					)}
				/>
				{handelAutoCompleteError()}
			</div>
			<FormField
				formStore={formStore}
				name='metaDescription'
				label={t('Meta description tag')}
				render={(field) => <Input {...field} placeholder={t('Short description')} />}
			/>
		</div>
	);
}

import { useTranslation } from 'react-i18next';
import { UseFormReturn } from 'react-hook-form';
import InputTags from 'src/app/components/optimized/InputsFields/InputTags';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';
import { addPageInterface } from 'src/pages/PagesPage/comp/AddPage';

const selectItems = [{ title: 'Dress' }, { title: 'Fashion' }];

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
			className={`flex flex-col gap-4 w-[30rem] ${
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
			<InputTags selectItems={selectItems} />
			<FormField
				formStore={formStore}
				name='metaDescription'
				label={t('Meta description tag')}
				render={(field) => <Input {...field} placeholder={t('Short description')} />}
			/>
		</div>
	);
}

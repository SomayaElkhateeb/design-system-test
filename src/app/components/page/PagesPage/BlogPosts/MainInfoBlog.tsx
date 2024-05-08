import { UseFormReturn } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import Textarea from 'src/app/components/optimized/InputsFields/Textarea';
import { Input } from 'src/app/components/ui/input';
import TabbedFormField from 'src/app/components/ui/form/tabbed-field';
import { cn } from 'src/app/utils';
import { addPageInterface } from 'src/pages/PagesPage/comp/AddPage';
import { ImageUploader } from 'src/app/components/optimized';

export default function MainInfoBlog({
	formStore,
}: {
	formStore: UseFormReturn<addPageInterface>;
}) {
	const { t } = useTranslation();

	return (
		<div className='global-cards'>
			<h3 className='text-title font-semibold'>{t('Main info')}</h3>
			<ImageUploader />
			<TabbedFormField
				formStore={formStore}
				keys={[
					{ name: 'titleEn', label: 'En' },
					{ name: 'titleAr', label: 'عربي' },
				]}
				label={t('Name')}
				renderer={(field) => <Input {...field} />}
			/>
			{/* selector */}
			<TabbedFormField
				formStore={formStore}
				keys={[
					{ name: 'descriptionEn', label: 'En' },
					{ name: 'descriptionAr', label: 'عربي' },
				]}
				label={t('Description')}
				renderer={(field) => <Textarea {...field} className={cn(field.className, 'size-full')} />}
			/>
		</div>
	);
}

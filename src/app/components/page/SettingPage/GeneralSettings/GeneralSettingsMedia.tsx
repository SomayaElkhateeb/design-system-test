import { UseFormReturn } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { TfiUpload } from 'react-icons/tfi';
import FileInput  from 'src/app/components/ui/file-input';

import { generalSettingsInterface } from './HookForGeneralForm';
export const fileClassName =
	'flex flex-col items-center justify-center gap-2 size-32 cursor-pointer';
const GeneralSettingsMedia = ({
	formStore,
}: {
	formStore: UseFormReturn<generalSettingsInterface>;
}) => {
	const { t } = useTranslation();

	const onImageSubmit = (file: File): void => {
		formStore.setValue('image', file);
	};
	const onImageSubmitIcon = (file: File): void => {
		formStore.setValue('icon', file);
	};

	return (
		<section className='global-cards'>
			<h3 className='title'>{t('Media')}</h3>
			<div className='flex-col-global gap-[1rem]'>
				<FileInput id="image" error={formStore.formState.errors.image?.message} onImageSubmit={onImageSubmit}>
					<TfiUpload className='text-[1.5rem]' />
					<p>{t('UploadImage')}</p>
				</FileInput>
				<FileInput
				id="icon"
					error={formStore.formState.errors.icon?.message}
					onImageSubmit={onImageSubmitIcon}
				>
					<TfiUpload className='text-[1.5rem]' />
					<p>{t('UploadImage')}</p>
				</FileInput>
			</div>
		</section>
	);
};

export default GeneralSettingsMedia;

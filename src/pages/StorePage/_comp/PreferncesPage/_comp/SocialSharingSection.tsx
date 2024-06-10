import { UseFormReturn } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import FileInput, { getDefaultFileInputOptions } from 'src/app/components/ui/file-input';
import FormField from 'src/app/components/ui/form/field';

import { TfiUpload } from 'react-icons/tfi';
import { preferncesInterface } from './HookForPreferncePageForm';
import { fileClassName } from 'src/app/components/page/SettingPage/GeneralSettings/Media';

export default function SocialSharingSection({
	formStore,
}: {
	formStore: UseFormReturn<preferncesInterface>;
}) {
	//  hooks
	const { t } = useTranslation();
	return (
		<div className='global-cards flex-col-top-section-pages'>
			<div className='flex-col-top-section-pages gap-[.25rem]'>
				<h3 className='title'>{t('Social sharing image preview')}</h3>
				<p className='subtitle text-sm'>
					{t('Customize the way you want your customers to view your website in social media')}
				</p>
			</div>

			<div className='global-cards gap-0 shadow-md'>
				<p className='title text-sm'>Shop now with fan eltaalouq</p>
				<p className='text-xs text-green'>https://artisan.dookan.net/t-shirt</p>
				<p className='text-xs text-gray'>meta description tags</p>
			</div>
			<FormField
				label={t('Image')}
				formStore={formStore}
				name='image'
				render={({ onChange, value, ...field }) => (
					<FileInput
						className={fileClassName}
						{...field}
						options={getDefaultFileInputOptions({
							accept: { 'image/*': [] },
							setError: (error) => {
								// console.log('error', error);
								formStore.setError('image', { message: error.message });
							},
							onFileLoad: (params) => {
								// console.log('params', params);
								onChange(params.file);
							},
						})}
					>
						<TfiUpload className='text-[1.5rem]' />
						<p>{t('UploadImage')}</p>
					</FileInput>
				)}
			/>
		</div>
	);
}

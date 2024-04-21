import { useForm } from 'src/app/utils/hooks/form';
import { z } from 'zod';
import { useTranslation } from 'react-i18next';
import { Form } from '../../ui/form';
import { Input } from '../../ui/input';
import Button from '../UiKits/Button';
import { cn } from 'src/app/utils';
import { Textarea } from '../../ui/textarea';
import TabbedFormField from '../../ui/form/tabbed-field';
import FormField from '../../ui/form/field';
import FileInput, { getDefaultFileInputOptions } from '../../ui/file-input';
import { Switch } from '../../ui/switch';

/** @param {import("react").SVGProps<SVGSVGElement>} props  */
function UploadCloudIcon(props) {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' {...props}>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M11.5581 2.55806C11.8021 2.31398 12.1979 2.31398 12.4419 2.55806L17.4419 7.55806C17.686 7.80214 17.686 8.19786 17.4419 8.44194C17.1979 8.68602 16.8021 8.68602 16.5581 8.44194L12.625 4.50888V17C12.625 17.3452 12.3452 17.625 12 17.625C11.6548 17.625 11.375 17.3452 11.375 17V4.50888L7.44194 8.44194C7.19786 8.68602 6.80214 8.68602 6.55806 8.44194C6.31398 8.19786 6.31398 7.80214 6.55806 7.55806L11.5581 2.55806ZM4 20.375C3.65482 20.375 3.375 20.6548 3.375 21C3.375 21.3452 3.65482 21.625 4 21.625H20C20.3452 21.625 20.625 21.3452 20.625 21C20.625 20.6548 20.3452 20.375 20 20.375H4Z'
				fill='#032C58'
			/>
		</svg>
	);
}

const BrandSchema = {
	nameEn: z.string().min(3).max(50),
	nameAr: z.string().min(3).max(50),
	link: z.string().url(),
	descriptionEn: z.string().min(10).max(1000),
	descriptionAr: z.string().min(10).max(1000),
	image: z.instanceof(File),
	isAvailable: z.boolean().default(true),
};

/**
 * @param {{
 *  defaultValues?: import("react-hook-form").FieldValues;
 *  handleSubmit: (values: import("react-hook-form").FieldValues) => void;
 * }} props
 *
 * @example
 *
 * ```jsx
 *	<BrandForm
 *		handleSubmit={(values) => {
 *			console.log(values);
 *		}}
 *	/>
 * ```
 */
export default function BrandForm(props) {
	const { t } = useTranslation();
	const { formStore, onSubmit } = useForm({
		schema: BrandSchema,
		handleSubmit: props.handleSubmit,
		defaultValues: { isAvailable: true, ...props.defaultValues },
	});

	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='flex flex-col'>
				<div className='flex gap-4'>
					<div>
						<FormField
							formStore={formStore}
							name='image'
							render={({ onChange, value, ...field }) => (
								<FileInput
									className='flex flex-col items-center justify-center gap-2 size-32'
									{...field}
									options={getDefaultFileInputOptions({
										accept: { 'image/*': [] },
										setError: (error) => {
											console.log('error', error);
											formStore.setError('image', { message: error.message });
										},
										onFileLoad: (params) => {
											console.log('params', params);
											onChange(params.file);
										},
									})}
								>
									<UploadCloudIcon />
									<p>Brand poster</p>
								</FileInput>
							)}
						/>
					</div>
					<div className='flex flex-col flex-grow gap-4'>
						<TabbedFormField
							formStore={formStore}
							keys={[
								{ name: 'nameEn', label: 'En' },
								{ name: 'nameAr', label: 'عربي' },
							]}
							label={t('Name')}
							renderer={(field) => <Input {...field} />}
						/>
						<FormField
							formStore={formStore}
							name='link'
							label={`${t('Link')} (${t('Slug')})`}
							render={(field) => <Input {...field} />}
							description='www.dookan.net/'
						/>

						<TabbedFormField
							formStore={formStore}
							keys={[
								{ name: 'descriptionEn', label: 'En' },
								{ name: 'descriptionAr', label: 'عربي' },
							]}
							label={t('Description')}
							renderer={(field) => <Textarea {...field} className={cn(field.className, 'size-full')} />}
						/>

						<FormField
							formStore={formStore}
							name='isAvailable'
							label={t('Available')}
							render={(field) => (
								<div className='flex gap-1'>
									<Switch checked={field.value} onCheckedChange={field.onChange} />{' '}
									<p>{t(field.value ? 'On' : 'Off')}</p>
								</div>
							)}
						/>
					</div>
				</div>
				<div className='flex justify-end'>
					<Button type='submit' className='px-4'>
						{t('Add')}
					</Button>
				</div>
			</form>
		</Form>
	);
}

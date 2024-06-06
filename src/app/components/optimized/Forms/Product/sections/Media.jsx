import { useTranslation } from 'react-i18next';
import TabsBuilder from 'src/app/components/builders/Tabs';
import { Card, CardContent } from 'src/app/components/ui/card';
import FileInput, { getDefaultFileInputOptions } from 'src/app/components/ui/file-input';
import FormField from 'src/app/components/ui/form/field';

/** @param {import("react").SVGProps<SVGSVGElement>} props  */
function UploadCloudIcon(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			{...props}
		>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M11.5581 2.55806C11.8021 2.31398 12.1979 2.31398 12.4419 2.55806L17.4419 7.55806C17.686 7.80214 17.686 8.19786 17.4419 8.44194C17.1979 8.68602 16.8021 8.68602 16.5581 8.44194L12.625 4.50888V17C12.625 17.3452 12.3452 17.625 12 17.625C11.6548 17.625 11.375 17.3452 11.375 17V4.50888L7.44194 8.44194C7.19786 8.68602 6.80214 8.68602 6.55806 8.44194C6.31398 8.19786 6.31398 7.80214 6.55806 7.55806L11.5581 2.55806ZM4 20.375C3.65482 20.375 3.375 20.6548 3.375 21C3.375 21.3452 3.65482 21.625 4 21.625H20C20.3452 21.625 20.625 21.3452 20.625 21C20.625 20.6548 20.3452 20.375 20 20.375H4Z'
				fill='#032C58'
			/>
		</svg>
	);
}

/** @param {{ formStore: import("..").ProductFormStore; }} props */
function ImagesElem(props) {
	const { t } = useTranslation();

	return (
		<FormField
			formStore={props.formStore}
			name='imagesMedia'
			render={({ onChange, value, ...field }) => (
				<FileInput
					className='flex flex-col items-center justify-center h-32 gap-2'
					{...field}
					options={getDefaultFileInputOptions({
						accept: { 'image/*': [] },
						setError: (error) => {
							// console.error('error', error);
							props.formStore.setError('imagesMedia', { message: error.message });
						},
						onFileLoad: (params) => {
							// console.log('params', params);
							onChange([...value, params.file]);
						},
					})}
				>
					<UploadCloudIcon />
					<div className='text-center'>
						<p className='text-title'>
							<strong>{t('Upload Images')}</strong>
						</p>
						<p className='text-subtitle'>{t('Or just drag and drop')}</p>
					</div>
				</FileInput>
			)}
		/>
	);
}

/**
 * @param {{
 *  formStore: import("..").ProductFormStore;
 * 	name: "videoMedia" | "threeDModelMedia" | "threeSixtyViewMedia";
 *  accept: import('react-dropzone').Accept
 *  title: import('react').ReactNode;
 * }} props
 */
function FileElem(props) {
	const { t } = useTranslation();
	return (
		<FormField
			formStore={props.formStore}
			name={props.name}
			render={({ onChange, value, ...field }) => (
				<FileInput
					className='flex flex-col items-center justify-center h-32 gap-2'
					{...field}
					options={getDefaultFileInputOptions({
						accept: props.accept,
						setError: (error) => {
							// console.error('error', error);
							props.formStore.setError(props.name, { message: error.message });
						},
						onFileLoad: (params) => {
							// console.log('params', params);
							onChange(params.file);
						},
					})}
				>
					<UploadCloudIcon />
					<div className='text-center'>
						<p className='text-title'>
							<strong>{props.title}</strong>
						</p>
						<p className='text-subtitle'>{t('Or just drag and drop')}</p>
					</div>
				</FileInput>
			)}
		/>
	);
}

/** @type {import('src/app/components/builders/Tabs').TabsBuilderItem<{ formStore: import("..").ProductFormStore; }>[]} */
const tabsItems = [
	{
		title: 'Images',
		Elem: (props) => <ImagesElem formStore={props.formStore} />,
	},
	{
		title: 'Video',
		Elem: (props) => {
			const { t } = useTranslation();
			return (
				<FileElem
					formStore={props.formStore}
					name='videoMedia'
					accept={{ 'video/*': [] }}
					title={t('Upload Video')}
				/>
			);
		},
	},
	{
		title: '360o  View',
		Elem: (props) => {
			const { t } = useTranslation();
			return (
				<FileElem
					formStore={props.formStore}
					name='threeSixtyViewMedia'
					accept={{
						'image/*': ['.jpg', '.jpeg', '.png'],
						'video/*': ['.mp4', '.webm'],
					}}
					title={
						<>
							{t('Upload 360')}
							<sup>o</sup> {t('View')}
						</>
					}
				/>
			);
		},
		isInProgress: true,
	},
	{
		title: '3D View',
		Elem: (props) => {
			const { t } = useTranslation();
			return (
				<FileElem
					formStore={props.formStore}
					name='threeDModelMedia'
					// FIXME: Add 3D model file types
					accept={{ '': ['.obj, .stl, .fbx, .glb, .gltf, .dae'] }}
					title={t('Upload 3D View')}
				/>
			);
		},
		isInProgress: true,
	},
];

/** @param {{ formStore: import("..").ProductFormStore; id?: string; }} props */
export default function ProductFormMediaSection(props) {
	return (
		<Card id={props.id}>
			<CardContent>
				<TabsBuilder items={tabsItems} sharedProps={{ formStore: props.formStore }} />
			</CardContent>
		</Card>
	);
}

import { useTranslation } from 'react-i18next';
import TabsBuilder from 'src/app/components/builders/Tabs';
import { Card, CardContent } from 'src/app/components/ui/card';
import FileInput, { getDefaultFileInputOptions } from 'src/app/components/ui/file-input';
import FormField from 'src/app/components/ui/form/field';
import { TfiUpload } from 'react-icons/tfi';

/** @param {import("react").SVGProps<SVGSVGElement>} props  */


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
					<TfiUpload />
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
					<TfiUpload />
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

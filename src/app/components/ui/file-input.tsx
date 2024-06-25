import { ChangeEvent, useState } from 'react';
import ImageCard from '../optimized/Cards/ImageCard';

import { useTranslation } from 'react-i18next';

export function getDefaultFileInputOptions({ setError, onFileLoad, ...params }) {
	return {
		onError: (error) => setError({ message: error.message, type: 'error' }),
		onDropRejected: (rejectedFiles) => {
			setError({ message: 'file is not supported', type: 'drop-rejected' });
		},
		onDrop: (acceptedFiles) => {
			acceptedFiles.forEach((file) => {
				const reader = new FileReader();

				reader.onabort = () => setError({ message: 'file reading was aborted', type: 'abort' });
				reader.onerror = () => setError({ message: 'file reading has failed', type: 'file-error' });
				reader.onload = () => {
					// Do whatever you want with the file contents

					onFileLoad({ file, reader });
				};
				reader.readAsArrayBuffer(file);
			});
		},
		multiple: false,
		...params,
	};
}
type Props = {
	error: string | undefined;
	onImageSubmit: (file: File) => void;
	children: React.ReactNode;
	label?: string;
	id:string
};
const FileInput = ({ error, onImageSubmit, children, label,id }: Props) => {
	//  hooks

	const [preview, setPreview] = useState('');

	const onImageSelected = (e: ChangeEvent<HTMLInputElement>): void => {
		const reader = new FileReader();

		if (!e.target.files || !e.target.files[0]) {
			return;
		}

		const imageFile = e.target.files[0];

		reader.readAsDataURL(imageFile);

		reader.onload = () => {
			if (reader.readyState !== 2) {
				return;
			}

			setPreview(reader.result as string);
			onImageSubmit(imageFile);
		};
	};

	return (
		<div className='flex-col-global'>
			<p className='title'>{label}</p>
			<div className='flex-row-global'>
				<input
					accept='image/*'
					id={id}
					onChange={onImageSelected}
					type='file'
					name='photo'
					hidden
				/>

				<label
					htmlFor={id}
					className='cursor-pointer relative border-[.1rem] rounded-[.4rem] w-[8.25rem] h-[7.50rem] border-dashed'
				>
					{preview && <ImageCard preview={preview} />}
					<div className=' absolute top-[50%] translate-y-[-50%]  translate-x-[50%] right-[50%]  flex-col-global items-center justify-center '>
						<div className='flex-col-global items-center justify-center'>
							{!preview && children}
						</div>
					</div>
				</label>
			</div>

			{error && !preview && <p className='global_error'>{error}</p>}
		</div>
	);
};

export default FileInput;

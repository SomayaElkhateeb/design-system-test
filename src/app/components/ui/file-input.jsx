import { forwardRef, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { cn } from 'src/app/utils';

/**
 * @param {{
 *  setError: (error: { message: string, type: string }) => void;
 *  onFileLoad: (params: { file: File; reader: FileReader }) => void;
 * } & import('react-dropzone').DropzoneOptions} params
 *
 * @returns {import('react-dropzone').DropzoneOptions}
 */
export function getDefaultFileInputOptions({ setError, onFileLoad, ...params }) {
	return {
		onError: (error) => setError({ message: error.message, type: 'error' }),
		onDropRejected: (rejectedFiles) => {
			console.log('rejectedFiles', rejectedFiles);
			setError({ message: 'file is not supported', type: 'drop-rejected' });
		},
		onDrop: (acceptedFiles) => {
			acceptedFiles.forEach((file) => {
				const reader = new FileReader();

				reader.onabort = () => setError({ message: 'file reading was aborted', type: 'abort' });
				reader.onerror = () => setError({ message: 'file reading has failed', type: 'file-error' });
				reader.onload = () => {
					// Do whatever you want with the file contents
					const binaryStr = reader.result;
					onFileLoad({ file, reader });
					console.log(binaryStr);
				};
				reader.readAsArrayBuffer(file);
			});
		},
		multiple: false,
		...params,
	};
}

const FileInput = forwardRef(
	/**
	 * @param {{
	 *  options: import('react-dropzone').DropzoneOptions;
	 *  children?: import('react').ReactNode;
	 *  className?: string;
	 * } & import('react').InputHTMLAttributes<HTMLInputElement>} props
	 * @param {import('react').Ref<HTMLInputElement>} ref
	 */
	({ options, children, className, ...props }, ref) => {
		const { getRootProps, getInputProps } = useDropzone(options);

		const inputProps = getInputProps(props);
		const dropzoneRef = /** @type {{ ref: { current: HTMLInputElement | null } }} */ (inputProps).ref;

		const refCallback = useCallback(
			/** @param {HTMLInputElement | null} instance */
			(instance) => {
				if (dropzoneRef) {
					dropzoneRef.current = instance;
				}
				if (ref) {
					if (typeof ref === 'function') {
						ref(instance);
					} else if (ref) {
						// @ts-ignore
						ref.current = instance;
					}
				}
			},
			[dropzoneRef, ref],
		);

		return (
			<div
				{...getRootProps({
					className: cn(
						'flex items-center justify-center w-full max-w-full max-h-full transition-colors duration-300 bg-white border-2 border-gray-300 border-dashed rounded-lg h-96 dark:bg-gray-900 dark:border-gray-700',
						className,
					),
				})}
			>
				<input {...inputProps} ref={refCallback} />
				{children}
			</div>
		);
	},
);

FileInput.displayName = 'FileInput';

export default FileInput;

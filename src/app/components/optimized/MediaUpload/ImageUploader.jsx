//? Unfinished tasks
//! =================
// todo store uploaded image
// todo Actions buttons

import { useState } from 'react';
import { AddBgIcon, UploadIcon } from 'src/app/utils/icons';

/**
 * ImageUploader component allows users to upload images by clicking on the uploader or dragging and dropping images onto it.
 * @param {object} props - Props for the ImageUploader component.
 * @param {Function} props.onImageUpload - Callback function invoked when an image is successfully uploaded.
 * @param {Function} props.onImageDelete - Callback function invoked when the uploaded image is deleted.
 * @returns {JSX.Element} ImageUploader component.
 */

const ImageUploader = ({ onImageUpload, onImageDelete }) => {
	const [selectedImage, setSelectedImage] = useState(null);
	const [dragActive, setDragActive] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	/**
	 * Handles the file change event when an image is selected.
	 * @param {Event} event - The file change event.
	 */
	const handleFileChange = (event) => {
		const selectedFile = event.target.files[0];
		if (selectedFile && /\.(jpe?g|png|gif)$/.test(selectedFile.name)) {
			setIsLoading(true);
			const reader = new FileReader();
			reader.onload = (e) => {
				setSelectedImage(e.target.result);
				setIsLoading(false);
			};
			reader.readAsDataURL(selectedFile);
			onImageUpload && onImageUpload();
		} else {
			setSelectedImage(null);
			alert('Please select a valid image file (JPEG, PNG, or GIF)');
		}
	};

	/**
	 * Handles the drag event when an image is dragged over the uploader.
	 * @param {Event} event - The drag event.
	 */
	const handleDrag = (event) => {
		event.preventDefault();
		setDragActive(event.type === 'dragenter');
	};

	/**
	 * Handles the drag over event when an image is dragged over the uploader.
	 * @param {Event} event - The drag over event.
	 */
	const handleDragOver = (event) => {
		event.preventDefault();
	};

	/**
	 * Handles the drop event when an image is dropped onto the uploader.
	 * @param {Event} event - The drop event.
	 */
	const handleDrop = (event) => {
		event.preventDefault();
		setDragActive(false);
		const droppedFile = event.dataTransfer.files[0];
		if (droppedFile && /\.(jpe?g|png|gif)$/.test(droppedFile.name)) {
			setSelectedImage(URL.createObjectURL(droppedFile));
			onImageUpload && onImageUpload();
		} else {
			alert('Please drop a valid image file (JPEG, PNG, or GIF)');
		}
	};

	/**
	 * Handles the delete image event when the delete button is clicked.
	 */
	const handleDeleteImage = () => {
		setSelectedImage(null);
		onImageDelete && onImageDelete();
	};


  return (
    <div
      className={`relative size-[100px] rounded border overflow-hidden flex justify-center items-center ${
        dragActive ? "bg-gray-100" : "bg-white"
      } ${
        isLoading || selectedImage
          ? "border-solid	bg-light-1 border-border-color"
          : "border-dashed border-hint"
      }`}
      onDragOver={handleDragOver}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDrop={handleDrop}
    >
      {isLoading ? (
        <div className="absolute inset-0 flex justify-center items-center">
          <p className="text-primary">Loading...</p>
        </div>
      ) : selectedImage ? (
        <>
          <img
            src={selectedImage}
            alt="Product Image"
            className="h-full w-full object-cover"
          />
          <button
            type="button"
            className="absolute top-1 right-1 rounded-full  focus:outline-none"
            onClick={handleDeleteImage}
          >
            <AddBgIcon className="rounded-full fill-primary rotate-45 border-2 border-white" />
          </button>
          <span className="absolute bottom-1 left-1 paragraph px-[6px]  text-[13px] text-subtitle border rounded-full">
            Main
          </span>
          <span className="absolute bottom-1 right-1 size-6 rounded-full border-2 border-white bg-secondary text-white text-xs leading-5">
            8
          </span>
        </>
      ) : (
        <div className="flex flex-col justify-center items-center text-center space-y-2">
          <UploadIcon className="fill-pri-dark" />
          <label
            htmlFor="fileInput"
            className="paragraph text-title cursor-pointer"
          >
            Upload Image
          </label>
          <input
            type="file"
            id="fileInput"
            accept="image/jpeg, image/png, image/gif"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
      )}
    </div>
  );

	return (
		<div
			className={`relative size-[100px] rounded border overflow-hidden flex justify-center items-center ${
				dragActive ? 'bg-gray-100' : 'bg-white'
			} ${
				isLoading || selectedImage
					? 'border-solid bg-light-1 border-border-color'
					: 'border-dashed border-hint'
			}`}
			onDragOver={handleDragOver}
			onDragEnter={handleDrag}
			onDragLeave={handleDrag}
			onDrop={handleDrop}
		>
			{isLoading ? (
				<div className='absolute inset-0 flex items-center justify-center'>
					<p className='text-primary'>Loading...</p>
				</div>
			) : selectedImage ? (
				<>
					<img
						src={selectedImage}
						alt='Product Image'
						className='object-cover w-full h-full'
					/>
					<button
						type='button'
						className='absolute rounded-full top-1 right-1 focus:outline-none'
						onClick={handleDeleteImage}
					>
						<AddBgIcon className='rotate-45 border-2 border-white rounded-full fill-primary' />
					</button>
				</>
			) : (
				<div className='flex flex-col items-center justify-center space-y-2 text-center'>
					<UploadIcon className='fill-pri-dark' />
					<label
						htmlFor='fileInput'
						className='cursor-pointer paragraph text-title'
					>
						Upload Image
					</label>
					<input
						type='file'
						id='fileInput'
						accept='image/jpeg, image/png, image/gif'
						className='hidden'
						onChange={handleFileChange}
					/>
				</div>
			)}
		</div>
	);

};

export default ImageUploader;

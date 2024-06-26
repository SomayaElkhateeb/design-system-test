type property = {
	preview: string;
};

function ImageCard({ preview }: property) {
	return (
		<img
			className='w-[8.25rem] h-[7.50rem] rounded-[.4rem]'
			src={preview ? preview : ''}
			alt={'img'}
			loading='lazy'
		/>
	);
}

export default ImageCard;

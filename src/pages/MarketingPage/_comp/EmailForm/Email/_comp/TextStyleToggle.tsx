import { IconType } from 'react-icons';
const TextStyleToggle = ({
	IconOne,
	IconTwo,
	IconThree,
}: {
	IconOne: IconType;
	IconTwo: IconType;
	IconThree: IconType;
}) => {
	return (
		<div className='flex items-center justify-between w-full border border-gray rounded h-10'>
			<IconOne size={20} color={'#666666'} className='my-2 w-full text-center' />
			<span className='h-full w-0.5 bg-gray'></span>
			<IconTwo size={20} color={'#666666'} className=' w-full text-center' />
			<span className='h-full w-0.5 bg-gray'></span>
			<IconThree size={20} color={'#666666'} className=' w-full text-center' />
		</div>
	);
};

export default TextStyleToggle;

import { Avatar } from '@mui/material';
import { useState } from 'react';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { PiArrowBendUpRightFill } from 'react-icons/pi';
import { Button } from 'src/app/components/optimized';
import ActionCard from './ActionCard';
import Rating from './Rating';

const ProductBody = ({ reviewer, content, date, isPublished, rating, isReplyForm, handleReply }) => {
	const [showActionCard, setShowActionCard] = useState(false);
	const handlePublish = () => {
		handleReply();
		console.log('Publishing:', content);
	};

	const handleUnpublish = () => {
		console.log('Unpublish action triggered');
	};

	const handleDelete = () => {
		console.log('Delete action triggered');
	};
	return (
		<div className='flex items-center justify-between px-4 py-4'>
			<div className='flex space-x-3'>
				<Avatar
					alt='Remy Sharp'
					src='https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80'
				/>
				<div className='flex flex-col mb-2'>
					<div className='flex space-x-2'>
						<span className='text-sm font-bold'>{reviewer}</span>
						<span className='text-sm text-gray-500'>{date}</span>
					</div>
					<Rating rating={rating} />
					<p className='text-gray-700'>{content}</p>
				</div>
			</div>
			<div className='flex justify-end items-center mt-4 space-x-3 relative z-10'>
				{showActionCard && (
					<div className='absolute z-20 top-10 w-[14rem]'>
						<ActionCard unpublishAction={handleUnpublish} deleteAction={handleDelete} isPublished={isPublished} />
					</div>
				)}
				<button onClick={() => setShowActionCard(!showActionCard)}>
					<HiOutlineDotsHorizontal size={24} />
				</button>
				{!isPublished && <Button onClick={handlePublish}>{isReplyForm ? 'Submit & publish' : 'Publish'}</Button>}
				<Button LeftIcon={<PiArrowBendUpRightFill />} variant='secondary' onClick={handleReply}>
					{isReplyForm ? 'Submit Reply' : 'Reply'}
				</Button>
			</div>
		</div>
	);
};

export default ProductBody;

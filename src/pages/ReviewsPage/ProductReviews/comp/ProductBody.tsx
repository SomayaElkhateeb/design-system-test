import React, { useState } from 'react';
import { Avatar } from '@mui/material';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { PiArrowBendUpRightFill } from 'react-icons/pi';
import { Button } from 'src/app/components/optimized';
import ActionCard from './ActionCard';
import Rating from './Rating';
import { useTranslation } from 'react-i18next';

interface Props {
	reviewer: string;
	content: string;
	date: string;
	rating: number;
	isPublished: boolean;
	isReplyed: boolean;
	isReplyForm: boolean;
	handleReply: () => void;
	publishProduct: () => void;
	unpublishProduct: () => void;
	deleteProduct: () => void;
}

const ProductBody: React.FC<Props> = ({
	reviewer,
	content,
	date,
	isPublished,
	isReplyed,
	rating,
	isReplyForm,
	handleReply,
	publishProduct,
	unpublishProduct,
	deleteProduct,
}) => {
	const [showActionCard, setShowActionCard] = useState(false);
	const { t } = useTranslation();

	const handlePublish = () => {
		publishProduct();
		console.log('Publishing:', content);
	};

	const handleUnpublish = () => {
		unpublishProduct();
		setShowActionCard(false);
		console.log('Unpublish action triggered');
	};

	const handleDelete = () => {
		deleteProduct();
		setShowActionCard(false);
		console.log('Delete action triggered');
	};

	return (
		<div className='flex items-center justify-between px-4 py-4'>
			<div className='flex'>
				<Avatar
					alt='Remy Sharp'
					src='https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80'
				/>
				<div className='flex flex-col mb-2 mx-3'>
					<div className='flex'>
						<span className='text-sm font-bold'>{reviewer}</span>
						<span className='text-sm text-gray-500 mx-2'>{date}</span>
					</div>
					<Rating rating={rating} />
					<p className='text-gray-700'>{content}</p>
				</div>
			</div>
			<div className='flex justify-end items-center mt-4 z-10'>
				<div className='relative mx-1'>
					{showActionCard && (
						<div className='absolute z-20 top-10 w-[14rem]'>
							<ActionCard unpublishAction={handleUnpublish} deleteAction={handleDelete} isPublished={isPublished} />
						</div>
					)}
					<button onClick={() => setShowActionCard(!showActionCard)}>
						<HiOutlineDotsHorizontal size={24} />
					</button>
				</div>
				{!isPublished && (
					<Button className='mx-1' onClick={handlePublish}>
						{isReplyForm ? t('Submit & Publish') : t('Publish')}
					</Button>
				)}
				{!isReplyed && (
					<Button LeftIcon={<PiArrowBendUpRightFill />} variant='secondary' onClick={handleReply} className='mx-1'>
						{isReplyForm ? t('Submit & Reply') : t('Reply')}
					</Button>
				)}
			</div>
		</div>
	);
};

export default ProductBody;

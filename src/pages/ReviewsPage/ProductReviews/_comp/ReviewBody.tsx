import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaRegTrashCan } from 'react-icons/fa6';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';
import { PiArrowBendUpRightFill } from 'react-icons/pi';
import { Button, InitialsAvatar, LayoutCard, Rating } from 'src/app/components/optimized';
import { getCurrentDate, randomColor } from 'src/app/utils';
import TweetCard from '../../_comp/TweetCard';
import { Response } from '../../_comp/data';
import { ReviewsContext, useProductReviewsContext } from './ProductReviewsContext';

interface Props {
	id: string;
	productId: string;
	reviewer: {
		firstName: string;
		lastName: string;
	};
	comment: string;
	date: string;
	rating: number;
	isPublished: boolean;
	isReplied: boolean;
	response: Response | null;
}

const ReviewBody: React.FC<Props> = ({
	productId,
	id,
	reviewer,
	comment,
	date,
	isPublished,
	isReplied,
	rating,
	response,
}) => {
	const {
		deleteReviewResponse,
		setReviewUnpublished,
		deleteReviewPresently,
		addResponseToReview,
		publishReview,
		editReviewResponse,
	} = useProductReviewsContext() as ReviewsContext;

	const [showActionCard, setShowActionCard] = useState(false);
	const [isReplyForm, setIsReplyForm] = useState(false);
	const [newResponse, setNewResponse] = useState<Response>({
		reviewer: {
			firstName: 'Fan',
			lastName: 'Al Taalouq',
		},
		repliedDate: getCurrentDate(),
		content: '',
	});

	const { t } = useTranslation();

	const handlePublishReview = () => {
		if (!isPublished && isReplied) {
			publishReview(productId, id);
		}
	};

	const handleUnpublishReview = () => {
		if (isPublished) {
			setReviewUnpublished(productId, id);
		}
	};

	const handleDeleteReview = () => {
		deleteReviewPresently(productId, id);
	};

	const handleAddReply = () => {
		if (newResponse.content.trim() !== '') {
			addResponseToReview(productId, id, newResponse);
			setIsReplyForm(false);
		}
	};

	const handleEditReply = (value: string) => {
		editReviewResponse(productId, id, {
			reviewer: {
				firstName: 'Fan',
				lastName: 'Fan Al Taalouq',
			},
			repliedDate: getCurrentDate(),
			content: value,
		});
	};
	return (
		<div className='flex flex-col bg-white mb-5 shadow-sm'>
			<div className='flex items-center justify-between px-4 my-5 '>
				<div className='flex'>
					<InitialsAvatar
						style={{}}
						firstName={reviewer.firstName}
						lastName={reviewer.lastName}
						size={50}
						randomColor={randomColor}
					/>
					<div className='flex flex-col mb-2 mx-3'>
						<div className='flex'>
							<span className='text-sm font-bold'>
								{reviewer.firstName} {reviewer.lastName}
							</span>
							<span className='text-sm text-gray-500 mx-2'>{date}</span>
						</div>
						<Rating rating={rating} />
						<p className='text-gray-700'>{comment}</p>
					</div>
				</div>
				<div className='flex flex-col space-y-3 justify-end'>
					<div className='flex justify-end'>
						<button onClick={() => setShowActionCard(!showActionCard)}>
							<HiOutlineDotsHorizontal size={24} />
						</button>

						{!isPublished && (
							<Button className='mx-1' onClick={handlePublishReview}>
								{isReplyForm ? t('Submit & Publish') : t('Publish')}
							</Button>
						)}
						{!isReplied && (
							<Button
								LeftIcon={<PiArrowBendUpRightFill />}
								variant='secondary'
								className='mx-1'
								onClick={() => {
									setIsReplyForm(true);
									handleAddReply();
								}}
							>
								{isReplyForm ? t('Submit & Reply') : t('Reply')}
							</Button>
						)}
					</div>
					{showActionCard && (
						<div>
							<LayoutCard>
								{isPublished && (
									<button className='flex space-x-2 items-center p-2' onClick={handleUnpublishReview}>
										<span>
											<IoClose />
										</span>
										<span>Unpublish</span>
									</button>
								)}
								<button className='flex space-x-2 items-center p-2' onClick={handleDeleteReview}>
									<span>
										<FaRegTrashCan />
									</span>
									<span>Delete Permanently</span>
								</button>
							</LayoutCard>
						</div>
					)}
				</div>
			</div>
			{isReplyForm && (
				<div className='px-4 pb-4'>
					<label htmlFor=''>Reply</label>
					<textarea
						value={newResponse.content}
						onChange={(e) => setNewResponse((prev) => ({ ...prev, content: e.target.value }))}
						rows={4}
						className='w-full px-3 py-2 border rounded-md'
					/>
				</div>
			)}
			{response && (
				<TweetCard
					size='w-[91%]'
					{...response}
					onDelete={() => deleteReviewResponse(productId, id)}
					onEdit={handleEditReply}
				/>
			)}
		</div>
	);
};

export default ReviewBody;

import { useState } from 'react';
import ProductHeader from './ProductHeader';
import ProductBody from './ProductBody';
import TweetCard from './TweetCard';
import { getCurrentDate } from 'src/app/utils';

const ReviewCard = ({ product, rating, reviewer, numReviews, date, content, isPublished, image }) => {
	const [isReplyForm, setIsReplyForm] = useState(false);
	const [replyContent, setReplyContent] = useState('');
	const [replies, setReplies] = useState([]);

	const handleReply = () => {
		setIsReplyForm(true);

		if (replyContent.trim() !== '') {
			const newReply = {
				author: reviewer,
				content: replyContent,
				date: getCurrentDate(),
			};
			setReplies([...replies, newReply]);
			setReplyContent('');
			setIsReplyForm(false);
		}
	};
	return (
		<div className='bg-white rounded-md shadow-sm'>
			<ProductHeader image={image} product={product} rating={rating} numReviews={numReviews} />
			<ProductBody
				reviewer={reviewer}
				date={date}
				content={content}
				isPublished={isPublished}
				rating={rating}
				isReplyForm={isReplyForm}
				handleReply={handleReply}
			/>
			{replies.map((reply, index) => (
				<TweetCard key={index} {...reply} />
			))}
			{isReplyForm && (
				<div className='px-4 pb-4'>
					<label htmlFor=''>Reply</label>
					<textarea
						value={replyContent}
						onChange={(e) => setReplyContent(e.target.value)}
						rows={4}
						className='w-full px-3 py-2 border rounded-md'
					/>
				</div>
			)}
		</div>
	);
};

export default ReviewCard;

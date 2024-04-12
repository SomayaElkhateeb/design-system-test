import React, { useState } from 'react';
import ProductHeader from './ProductHeader';
import ProductBody from './ProductBody';
import TweetCard from './TweetCard';
import { getCurrentDate } from 'src/app/utils';

interface Review {
  author: string;
  content: string;
  date: string;
}

interface Props {
  product: string;
  rating: number;
  reviewer: string;
  numReviews: number;
  date: string;
  content: string;
  isPublished: boolean;
  isReplyed: boolean;
  image: string;
  publishProduct: () => void;
  unpublishProduct: () => void;
  deleteProduct: () => void;
  replyToProduct: () => void;
  markAsNotReplied: () => void;
}

const ReviewCard: React.FC<Props> = ({
  product,
  rating,
  reviewer,
  numReviews,
  date,
  content,
  isPublished,
  isReplyed,
  image,
  publishProduct,
  unpublishProduct,
  deleteProduct,
  replyToProduct,
  markAsNotReplied,
}) => {
  const [isReplyForm, setIsReplyForm] = useState(false);
  const [replyContent, setReplyContent] = useState('');
  const [replies, setReplies] = useState<Review[]>([]);

  const handleReply = () => {
    setIsReplyForm(true);
    if (replyContent.trim() !== '') {
      replyToProduct();
      const newReply: Review = {
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
        isReplyed={isReplyed}
        rating={rating}
        isReplyForm={isReplyForm}
        handleReply={handleReply}
        publishProduct={publishProduct}
        unpublishProduct={unpublishProduct}
        deleteProduct={deleteProduct}
      />
      {replies.map((reply, index) => (
        <TweetCard key={index} {...reply} markAsNotReplied={markAsNotReplied} />
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

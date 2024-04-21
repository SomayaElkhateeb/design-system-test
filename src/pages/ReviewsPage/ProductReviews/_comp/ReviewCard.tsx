import ReviewHeader from './ReviewHeader';
import ReviewBody from './ReviewBody';
import { Product, Review } from '../../_comp/data';

interface Props {
	product: Product;
	review: Review;
}

const ReviewCard: React.FC<Props> = ({ product, review }) => {
	return (
		<div>
			<ReviewHeader key={product.id} {...product} />
			<ReviewBody key={review.id} {...review} productId={product.id} />
		</div>
	);
};

export default ReviewCard;

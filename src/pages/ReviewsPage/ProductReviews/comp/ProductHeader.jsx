import { formatReviewScore } from 'src/app/utils';

const ProductHeader = ({ image, product, rating, numReviews }) => {
	return (
		<div className='bg-white rounded-lg border-b overflow-hidden px-4'>
			<div className='flex justify-between items-center'>
				<div className='flex space-x-3 items-center'>
					<img className='size-12 object-cover rounded' src={image} alt={product} />
					<h3 className='text-md font-semibold'>{product}</h3>
				</div>
				<div className='flex flex-col p-4 justify-between'>
					<div className='flex items-center justify-between text-sm mt-2'>
						<div className='flex items-center space-x-1 text-lg '>
							<span className='font-semibold'>
								{formatReviewScore(rating)} <span className='text-yellow-500'>★</span>
							</span>
							<span className='text-gray-500'>({numReviews})</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductHeader;

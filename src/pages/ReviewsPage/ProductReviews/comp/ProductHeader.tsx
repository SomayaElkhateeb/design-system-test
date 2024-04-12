import React from 'react';
import { formatReviewScore } from 'src/app/utils';

interface Props {
	image: string;
	product: string;
	rating: number;
	numReviews: number;
}

const ProductHeader: React.FC<Props> = ({ image, product, rating, numReviews }) => {
	return (
		<div className='bg-white rounded-lg border-b overflow-hidden px-4'>
			<div className='flex justify-between items-center'>
				<div className='flex items-center'>
					<img className='size-12 object-cover rounded' src={image} alt={product} />
					<h3 className='text-md font-semibold mx-3'>{product}</h3>
				</div>
				<div className='flex flex-col py-4 justify-between'>
					<div className='flex items-center justify-between text-sm mt-2'>
						<div className='flex items-center text-lg'>
							<span className='font-semibold mx-1'>
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

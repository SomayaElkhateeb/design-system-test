import React from 'react';
import { calculateAverageRating } from 'src/app/utils';
import { Review } from '../../_comp/data';

interface Props {
	image: string;
	name: string;
	reviews: Review[];
}

const ReviewHeader: React.FC<Props> = ({ image, name, reviews }) => {
	const averageRating = calculateAverageRating(reviews);

	return (
		<div className='bg-white overflow-hidden px-4'>
			<div className='flex justify-between items-center'>
				<div className='flex items-center'>
					<img className='size-12 object-cover rounded' src={image} alt={name} />
					<h3 className='text-md font-semibold mx-3'>{name}</h3>
				</div>
				<div className='flex flex-col py-4 justify-between'>
					<div className='flex items-center justify-between text-md mt-2'>
						<div className='flex items-center text-md'>
							<span className='font-semibold mx-1'>
								{averageRating} <span className='text-yellow-500'>★</span>
							</span>
							<span className='text-gray-500'>({reviews.length})</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ReviewHeader;

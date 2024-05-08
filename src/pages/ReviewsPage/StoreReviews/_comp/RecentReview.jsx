import LayoutCard from 'src/app/components/page/Cards/LayoutCard';
import RatingBar from './RatingBar';
import { GoArrowDown, GoArrowUp } from 'react-icons/go';

import ReviewCard from './ReviewCard';
import { useState } from 'react';
import { getCurrentDate } from 'src/app/utils';
import { Rating } from '@mui/material';

const recentData = {
	reviewer: { firstName: 'John', lastName: 'Doe' },
	repliedDate: getCurrentDate(),
	randomColor: '#123456',
	content: 'Nice & Good Product',
	rating: 4.5,
	ratings: [
		{ id: 1, value: 5, maxValue: 15 },
		{ id: 2, value: 4, maxValue: 10 },
		{ id: 3, value: 3, maxValue: 4 },
		{ id: 4, value: 1, maxValue: 1 },
		{ id: 5, value: 0, maxValue: 0 },
	],
};

const RecentReview = () => {
	// Destructure the state variable and the setter function from useState
	const [data] = useState(recentData);

	// Destructure the necessary data from the state
	const { rating, ratings } = data;

	return (
		<div className='serviceDetails-sharedClass p-[1rem]'>
			<div className='flex-col-top-section-pages gap-[1.8rem]'>
				<div className='w-full flex md:flex-row flex-col justify-between md:items-center space-x-2  space-y-3 '>
					<div className='md:w-1/3 '>
						<div className={`text-lg  ${rating > 0 ? 'text-green-500' : 'text-red-500'}`}>
							{rating > 0 ? (
								<div className='flex space-x-1 items-center'>
									<GoArrowUp /> {`${rating}%`}
								</div>
							) : (
								<div className='flex space-x-1 items-center'>
									<GoArrowDown /> {`${rating}%`}
								</div>
							)}
						</div>
						<div className='text-title text-[1.8rem]'>
							4.0 <span className='text-subtitle text-[1rem]'>(54)</span>
						</div>
						<Rating precision={0.5} value={rating} readOnly />
					</div>
					<div className='md:w-2/3 md:border-l  md:pl-7'>
						<RatingBar ratings={ratings} />
					</div>
				</div>
				<div className='md:w-[80%] '>
					<ReviewCard {...data} />
				</div>
			</div>
		</div>
	);
};

export default RecentReview;

import LayoutCard from 'src/app/components/page/Cards/LayoutCard';
import RatingBar from './RatingBar';
import { GoArrowDown, GoArrowUp } from 'react-icons/go';
import { Rating } from 'src/app/components/optimized';
import ReviewCard from './ReviewCard';
import { useState } from 'react';
import { getCurrentDate } from 'src/app/utils';

const recentData = {
	reviewer: { firstName: 'John', lastName: 'Doe' },
	repliedDate: getCurrentDate(),
	randomColor: '#123456',
	content: 'Nice & Good Product',
	rating: 4.75,
	ratings: [
		{ label: '5 stars', value: 15 },
		{ label: '4 stars', value: 10 },
		{ label: '3 stars', value: 4 },
		{ label: '2 stars', value: 1 },
		{ label: '1 stars', value: 0 },
	],
};

const RecentReview = () => {
	// Destructure the state variable and the setter function from useState
	const [data, setData] = useState(recentData);

	// Destructure the necessary data from the state
	const { rating, ratings } = data;

	return (
		<div className='w-[800px]'>
			<LayoutCard>
				<div className='flex flex-col'>
					<div className='w-full flex justify-between items-center space-x-2 mr-2 space-y-3 '>
						<div className='w-1/3 '>
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
							<div>4.0 (54)</div>
							<Rating rating={rating} size={24} />
						</div>
						<div className='w-2/3 border-l pl-5'>
							<RatingBar ratings={ratings} maxRating={30} filledColor='yellow' emptyColor='gray' />
						</div>
					</div>
					<div className='w-[80%]'>
						<ReviewCard {...data} />
					</div>
				</div>
			</LayoutCard>
		</div>
	);
};

export default RecentReview;

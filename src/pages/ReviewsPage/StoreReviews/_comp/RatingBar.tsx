import React from 'react';

interface Rating {
	label: string;
	value: number;
}

interface RatingBarProps {
	ratings: Rating[];
	maxRating?: number;
	filledColor?: string;
	emptyColor?: string;
}

const RatingBar: React.FC<RatingBarProps> = ({
	ratings,
	maxRating = 5,
	filledColor = 'yellow',
	emptyColor = 'gray',
}) => {
	return (
		<div className='w-full'>
			{ratings.map((rating, index) => (
				<div key={index} className='flex items-center mb-2'>
					<div className='w-16'>{rating.label}</div>
					<div className='w-96 flex items-center'>
						<div className='bg-gray-200 h-3 w-full rounded-full mr-4'>
							<div
								className={`bg-${filledColor}-500 h-3 rounded-full`}
								style={{ width: `${(rating.value / maxRating) * 100}%` }}
							></div>
						</div>
						<div className='w-8'>({rating.value})</div>
					</div>
				</div>
			))}
		</div>
	);
};

RatingBar.defaultProps = {
	maxRating: 5,
	filledColor: 'yellow',
	emptyColor: 'gray',
};

export default RatingBar;

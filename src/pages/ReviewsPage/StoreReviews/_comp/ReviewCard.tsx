import React from 'react';
import { InitialsAvatar, Rating } from 'src/app/components/optimized';

interface ReviewCardProps {
	reviewer: {
		firstName: string;
		lastName: string;
	};
	repliedDate: string;
	rating: number;
	randomColor: string;
	content: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
	reviewer,
	repliedDate,
	rating,
	randomColor,
	content,
}) => {
	return (
		<>
			<h3 className='font-bold text-lg space-y-1'>Recent</h3>

			<div
				className={`bg-white rounded-lg border overflow-hidden flex p-2 items-center mb-3 `}
			>
				<div>
					<InitialsAvatar
						style={{}}
						firstName={reviewer.firstName}
						lastName={reviewer.lastName}
						size={50}
						randomColor={randomColor}
					/>
				</div>
				<div className='flex flex-col w-full mx-3'>
					<div className='flex items-center'>
						<h3 className='text-base font-bold'>
							{reviewer.firstName} {reviewer.lastName}
						</h3>
						<p className='text-sm text-gray-500 mx-2'>{repliedDate}</p>
					</div>
					<div>
						<Rating rating={rating} size={20} /> {/* Adjust size as needed */}
						<p className='text-gray-700'>{content}</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default ReviewCard;

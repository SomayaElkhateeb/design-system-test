const Rating = ({ rating }) => {
	const stars = Array(Math.floor(rating)).fill(1);
	const halfStar = rating % 1 !== 0;

	return (
		<div className='flex items-center space-x-1 text-yellow-500 text-2xl'>
			{stars.map((_, index) => (
				<span key={index}>★</span>
			))}
			{halfStar && <span>☆</span>}
		</div>
	);
};

export default Rating;

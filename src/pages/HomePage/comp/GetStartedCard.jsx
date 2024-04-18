import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const GetStartedCard = ({ size, slides, title }) => {
	return (
		<section className='mt-6 p-5'>
			<h2 className='text-title font-semibold'>{title}</h2>
			{size == 'mini' && (
				<Splide
					options={{
						focus: 0,
						perPage: 3,
						perMove: 1,
						drag: 'free',
						type: 'loop',
						width: 1250,
						// height: 300,
						gap: '1rem',
						// padding: "8rem",
						snap: true,
						omitEnd: true,
					}}
					aria-label='My Favorite Images'
				>
					{slides?.map((slide, index) => (
						<SplideSlide key={index}>
							<HCard {...slide} />
						</SplideSlide>
					))}
				</Splide>
			)}
			{size == 'full' && (
				<Splide
					options={{
						focus: 0,
						perPage: 4,
						perMove: 1,
						drag: 'free',
						type: 'loop',
						width: 1250,
						// height: 300,
						gap: '3rem',
						snap: true,
						omitEnd: true,
					}}
					aria-label='My Favorite Images'
				>
					{slides?.map((slide, index) => (
						<SplideSlide key={index}>
							<VCard {...slide} />
						</SplideSlide>
					))}
				</Splide>
			)}
		</section>
	);
};

export default GetStartedCard;

const VCard = ({ image, title, description }) => {
	return (
		<div className={`bg-white shadow-sm rounded-lg overflow-hidden w-[250px]`}>
			<div className='w-full'>
				<img className='w-full h-full object-cover object-center' src={image} alt={title} />
			</div>
			<div className='p-4'>
				<h2 className='text-md font-semibold mb-2 text-gray-800'>{title}</h2>
				<p className='text-gray-700'>{description}</p>
			</div>
		</div>
	);
};

const HCard = ({ image, title, description }) => {
	return (
		<div className={`bg-white shadow-sm rounded-lg overflow-hidden `}>
			<div className='flex w-80 h-32'>
				<div className='w-2/4'>
					<img className='w-full h-full object-cover object-center' src={image} alt={title} />
				</div>
				<div className='full p-4'>
					<h2 className='text-md font-semibold mb-2'>{title}</h2>
					<p className='text-gray-700'>{description}</p>
				</div>
			</div>
		</div>
	);
};

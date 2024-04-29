// import { Splide, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/react-splide/css';

// const GetStartedCard = ({ size, slides, title }) => {
// 	return (
// 		<section className='mx-auto p-3'>
// 			<h2 className='text-title font-semibold'>{title}</h2>
// 			{size == 'mini' && (
// 				<Splide
// 					options={{
// 						focus: 0,
// 						perPage: 1,
// 						perMove: 1,
// 						drag: 'free',
// 						type: 'loop',
// 						// width: '100%',
// 						// height: 300,
// 						gap: '1rem',
// 						// padding: "8rem",
// 						snap: true,
// 						omitEnd: true,
// 					}}
// 					aria-label='My Favorite Images'
// 				>
// 					{slides?.map((slide, index) => (
// 						<SplideSlide key={index}>
// 							<LinkCard {...slide} />
// 						</SplideSlide>
// 					))}
// 				</Splide>
// 			)}
// 			{size == 'mid' && (
// 				<Splide
// 					options={{
// 						focus: 0,
// 						perPage: 2,
// 						perMove: 1,
// 						drag: 'free',
// 						type: 'loop',
// 						// width: 1250,
// 						// height: 300,
// 						gap: '1rem',
// 						snap: true,
// 						omitEnd: true,
// 					}}
// 					aria-label='My Favorite Images'
// 				>
// 					{slides?.map((slide, index) => (
// 						<SplideSlide key={index} className='grid grid-cols-2 gap-2 '>
// 							<Card {...slide} />
// 						</SplideSlide>
// 					))}
// 				</Splide>
// 			)}
// 			{size == 'full' && (
// 				<Splide
// 					options={{
// 						focus: 0,
// 						perPage: 3,
// 						perMove: 1,
// 						drag: 'free',
// 						type: 'loop',
// 						// width: 1250,
// 						// height: 300,
// 						gap: '1rem',
// 						snap: true,
// 						omitEnd: true,
// 					}}
// 					aria-label='My Favorite Images'
// 				>
// 					{slides?.map((slide, index) => (
// 						<SplideSlide key={index} className='grid grid-cols-3 gap-2 '>
// 							<Card {...slide} />
// 						</SplideSlide>
// 					))}
// 				</Splide>
// 			)}
// 		</section>
// 	);
// };

// export default GetStartedCard;

// const Card = ({ image, title, description }) => {
// 	return (
// 		<div className='w-96 h-24 flex'>
// 			<div>
// 				<img src={image} alt={title} className='w-40 h-24' />
// 			</div>
// 			<div className='pl-2'>
// 				<h2 className='font-semibold mb-0.5 text-title'>{title}</h2>
// 				<p className='text-subtitle'>{description}</p>
// 			</div>
// 		</div>
// 	);
// };

// const LinkCard = ({ image, title, description }) => {
// 	return (
// 		<div className={`bg-sky-400 shadow-sm rounded-lg overflow-hidden `}>
// 			<div className='flex w-80 h-32'>
// 				<div className='w-2/4'>
// 					{/* <img className='w-full h-full object-cover object-center' src={image} alt={title} /> */}
// 				</div>
// 				<div className='full p-4'>
// 					<h2 className='text-md font-semibold mb-2'>{title}</h2>
// 					<p className='text-gray-700'>{description}</p>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useTranslation } from 'react-i18next';
import { HiExternalLink } from 'react-icons/hi';

const Slider = ({ size, slides, title }) => {
	return (
		<section className='mx-auto p-3'>
			<h2 className='text-title font-semibold'>{title}</h2>

			{/* Splide Slider based on size */}
			<Splide
				options={{
					focus: 0,
					perPage: size === 'mini' ? 1 : size === 'mid' ? 2 : 3,
					perMove: 1,
					drag: 'free',
					type: 'loop',
					gap: '1rem',
					snap: true,
					omitEnd: true,
				}}
				aria-label='My Favorite Images'
			>
				{slides?.map((slide, index) => (
					<SplideSlide
						key={index}
						className={`grid grid-cols-${size === 'mini' ? 1 : size === 'mid' ? 2 : 3} gap-2 `}
					>
						{size === 'mini' ? <MiniCard {...slide} /> : <Card {...slide} />}
					</SplideSlide>
				))}
			</Splide>
		</section>
	);
};

export default Slider;

const Card = ({ image, title, description }) => {
	return (
		<div className='w-96 h-24 flex'>
			<div>
				<img src={image} alt={title} className='w-40 h-24' />
			</div>
			<div className='pl-2'>
				<h2 className='font-semibold mb-0.5 text-title'>{title}</h2>
				<p className='text-subtitle text-sm'>{description}</p>
			</div>
		</div>
	);
};

const MiniCard = ({ image, title, description }) => {
	const { t } = useTranslation();
	return (
		<div className='flex border border-constrained rounded-md overflow-hidden '>
			<div className='w-32 h-28'>
				<img src={image} alt={title} className='w-full h-full' />
			</div>
			<div className='p-2 flex flex-col justify-between'>
				<div>
					<h2 className='font-semibold mb-0.5 text-title text-sm'>{title}</h2>
					<p className='text-subtitle text-xs'>{description}</p>
				</div>
				<button className='text-sm p-0 btn-lin hover:bg-transparent'>
					<span className='flex items-center gap-2'>
						{t('Watch Video')} <HiExternalLink />
					</span>
				</button>
			</div>
		</div>
	);
};

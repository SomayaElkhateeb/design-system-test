import { useState } from 'react';
// how to use
// const ParentComponent = () => {
// 	const slides = [
// 		{ title: 'Title 1', content: <Component /> },
// 		{ title: 'Title 2', content: <Component /> },
// 		{ title: 'Title 3', content: <Component /> },
// 		{ title: 'Title 4', content: <Component /> },
// 	];

// 	return <SlideCardTabs slides={slides} />

// };

const SlideCardTabs = ({ slides, title }) => {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<div className='bg-white rounded-xl border border-borders-lines p-5 h-full min-w-[20rem] w-full grid gap-2'>
			<div className='flex justify-between items-center mb-3'>
				<h2 className='title text-lg capitalize'>{title}</h2>
			</div>
			<div className='flex items-center justify-between border-b border-borders-lines '>
				{slides.map((slide, index) => (
					<Tab
						key={index}
						title={slide.title}
						active={index === activeIndex}
						onClick={() => setActiveIndex(index)}
					/>
				))}
			</div>
			<div className='grid gap-3'>
				{slides.map((slide, index) => (
					<div key={index} className={`${index === activeIndex ? 'block' : 'hidden'}`}>
						{slide.content}
					</div>
				))}
			</div>
		</div>
	);
};
export default SlideCardTabs;

const Tab = ({ title, active, onClick }) => {
	return (
		<button
			className={`px-4 py-2 focus:outline-none ${
				active
					? 'title text-primary  border-b-2 border-primary'
					: 'paragraph text-hint hover:text-primary'
			}`}
			onClick={onClick}
		>
			{title}
		</button>
	);
};

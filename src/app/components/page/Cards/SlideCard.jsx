// @ts-nocheck
import { Button } from '@mui/material';
import { useState } from 'react';
import { BackAndroidIcon, DownIcon } from 'src/app/utils/icons';

// how to use

// const ParentComponent = () => {
// 	const slides = [
// 		{ content: <Component /> },
// 		{ content: <Component /> },
// 		{ content: <Component /> },
// 		{ content: <Component /> },
// 	];

// 	return <SlideCard slides={slides} title='Title' percentage='4.71' positive />;

// };

const SlideCard = ({ slides, title, percentage, positive }) => {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<div className='bg-white rounded-xl border border-borders-lines h-80 flex flex-col justify-between'>
			<div className='p-5 flex flex-col flex-1'>
				<div className='flex justify-between items-center mb-3'>
					<h2 className='title text-lg'>{title}</h2>
					
					{percentage ? (
						<div className='flex items-center'>
							<BackAndroidIcon className={`${positive ? 'fill-success rotate-90' : 'fill-error -rotate-90'}`} />
							<h2 className={`paragraph ${positive ? 'text-success' : 'text-error'}`}>{percentage}</h2>
						</div>
					) : select ? (
						<Button variant='link' RightIcon={DownIcon} />
					) : null}
				</div>
				{slides.map((slide, index) => (
					<div key={index} className={`flex-1 ${index === activeIndex ? 'block' : 'hidden'}`}>
						{slide.content}
					</div>
				))}
			</div>
			<div className='flex justify-center py-2'>
				{slides.map((_, index) => (
					<Bullet key={index} active={index === activeIndex} onClick={() => setActiveIndex(index)} />
				))}
			</div>
		</div>
	);
};
export default SlideCard;
// Bullet component
const Bullet = ({ active, onClick }) => (
	<button
		className={`mx-1 size-3 rounded-full ${active ? 'bg-primary' : 'border border-primary bg-white'}`}
		onClick={onClick}
	/>
);


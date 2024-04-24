// @ts-nocheck
import { useState } from 'react';

// how to use
// import { ComponentToBeUsed } from "../"
// const ParentComponent = () => {
// const data = [{ label: 'data_1' }, { label: 'data_2' }, { label: 'data_3' }, { label: 'data_4' }];
// 	return <SlideCard items={statsData} title='Title' itemsPerSlide={4} SlideComponent={ComponentToBeUsed} />;
// };

const SlideCard = ({ items, title, itemsPerSlide, SlideComponent }) => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const totalSlide = Math.ceil(items.length / itemsPerSlide);

	// Calculate the slice of items based on the current slide
	const start = currentSlide * itemsPerSlide;
	const end = (currentSlide + 1) * itemsPerSlide;
	const slicedItems = items.slice(start, end);

	// Determine the number of columns based on itemsPerSlide
	// const gridColumns = itemsPerSlide === 1 ? 'grid-cols-1' : 'grid-cols-2';
// max-w-[26rem]
	return (
		<div className='bg-white rounded-xl border border-borders-lines h-full min-w-[20rem] w-full flex flex-col justify-between p-4'>
			<div className=' flex flex-col flex-1'>
				<div className='flex justify-between items-center mb-2'>
					<h2 className='title text-lg'>{title}</h2>
				</div>
				<div
					className={`overflow-hidden flex-1 grid gap-2 `}
					style={{
						gridTemplateColumns: 'repeat(auto-fit, minmax(8rem, 1fr))',
					}}
				>
					{slicedItems.map((item, index) => (
						<SlideComponent key={index} {...item} />
					))}
				</div>
			</div>
			<div className='flex justify-center pt-2'>
				{Array.from({ length: totalSlide }, (_, index) => (
					<button
						key={index}
						className={`mx-1 size-3 rounded-full ${
							index === currentSlide ? 'bg-primary' : 'border border-primary bg-white'
						}`}
						onClick={() => setCurrentSlide(index)}
					/>
				))}
			</div>
		</div>
	);
};
export default SlideCard;
// ${gridColumns}

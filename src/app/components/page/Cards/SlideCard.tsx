import { ReactNode, useState } from 'react';

// how to use
// import { ComponentToBeUsed } from "../"
// const ParentComponent = () => {
// const data = [{ label: 'data_1' }, { label: 'data_2' }, { label: 'data_3' }, { label: 'data_4' }];
// 	return <SlideCard items={statsData} title='Title' itemsPerSlide={4} SlideComponent={ComponentToBeUsed} />;
// };

interface SlideCardProps<T> {
	items: T[];
	title: string;
	itemsPerSlide: number;
	SlideComponent: React.ComponentType<T>;
	children?: ReactNode;
}

function SlideCard<T>({
	items,
	title,
	itemsPerSlide,
	SlideComponent,
	children,
}: SlideCardProps<T>) {
	//  hooks
	const [currentSlide, setCurrentSlide] = useState(0);
	const totalSlide = Math.ceil(items.length / itemsPerSlide);

	// Calculate the slice of items based on the current slide
	const start = currentSlide * itemsPerSlide;
	const end = (currentSlide + 1) * itemsPerSlide;
	const slicedItems = items.slice(start, end);

	return (
		<div className='bg-white rounded-xl border border-borders-lines h-full min-w-[20rem] w-full flex flex-col justify-between p-4'>
			<div className='flex flex-col flex-1'>
				<div className='flex justify-between items-center mb-3'>
					<h2 className='title text-lg capitalize'>{title}</h2>
				</div>
				{children}
				<div
					className='overflow-hidden flex-1 grid gap-2'
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
}

export default SlideCard;
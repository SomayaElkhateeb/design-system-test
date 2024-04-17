import { useState } from 'react';
import { MoreIcon } from 'src/app/utils/icons';

interface Slide {
	title: string;
	content: JSX.Element;
}

interface SlideCardTabsProps {
	slides: Slide[];
}

const SlideCardTabs: React.FC<SlideCardTabsProps> = ({ slides }) => {
	const [activeIndex, setActiveIndex] = useState<number>(0);

	return (
		<>
			<div className='flex justify-between items-center border-b border-borders-lines'>
				{slides.map((slide, index) => (
					<Tab key={index} title={slide.title} active={index === activeIndex} onClick={() => setActiveIndex(index)} />
				))}
			</div>

			<div className='py-5'>
				{slides.map((slide, index) => (
					<div key={index} className={`${index === activeIndex ? 'block' : 'hidden'}`}>
						{Array.isArray(slide.content) ? (
							slide.content.map((item) => {
								const { id, title, img, qty, price, subtitle } = item || {};
								return (
									<div key={id} className='flex justify-between mb-2'>
										<div className='flex gap-2'>
											<div className='w-[3.625rem] h-[3.625rem] border border-light-3 rounded'>
												<img src={img} className='w-full h-full' />
											</div>

											<div>
												<h4 className='text-title font-semibold text-sm'>{title}</h4>
												<p className='text-subtitle text-sm'>{subtitle}</p>
												<p className='text-title text-sm'>Qty: {qty}</p>
											</div>
										</div>

										<div className='flex flex-col justify-between'>
											<span className='flex justify-end cursor-pointer'>
												<MoreIcon />
											</span>
											<p className='text-title text-sm'>SAR {price}</p>
										</div>
									</div>
								);
							})
						) : (
							<div>{slide.content}</div>
						)}
					</div>
				))}
			</div>
		</>
	);
};
export default SlideCardTabs;

interface TabProps {
	title: string;
	active: boolean;
	onClick: () => void;
}

const Tab: React.FC<TabProps> = ({ title, active, onClick }) => {
	return (
		<button
			className={`px-4 py-2 focus:outline-none ${
				active ? 'title text-primary  border-b-2 border-primary' : 'paragraph text-hint hover:text-primary'
			}`}
			onClick={onClick}
		>
			{title}
		</button>
	);
};

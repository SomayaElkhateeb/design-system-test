import { useState } from 'react';
import { Button, Menu } from 'src/app/components/optimized';
import { BackAndroidIcon, DownIcon } from 'src/app/utils/icons';

interface SlideCardProps {
	slides: any;
	text: string;
	sortMenus: any;
	btn: any;
}

const SlideCard: React.FC<SlideCardProps> = (props) => {
	const [menu, setMenu] = useState(false);
	const [activeIndex, setActiveIndex] = useState<number>(0);
	const [selectedOption, setSelectedOption] = useState('Today');
	const handleSelect = (selectedOption: string) => {
		setSelectedOption(selectedOption);
	};
	return (
		<div className='bg-white rounded-xl border p-5 border-borders-lines h-96'>
			<header className='flex justify-between items-center mb-2'>
				<h2 className='text-title font-semibold text-lg'>{props.text}</h2>
				{props.btn ? (
					<>
						<Button variant='link' RightIcon={DownIcon} onClick={() => setMenu(true)}>
							{selectedOption}
						</Button>
						{menu && <Menu options={props.sortMenus} selectedOption={selectedOption} onSelect={handleSelect} />}
					</>
				) : null}
			</header>
			<div>
				{props.slides.length < 1 ? (
					<div className='flex justify-center items-center h-full'>
						<p className='text-subtitle text-sm'>No {props.text} yet</p>
					</div>
				) : (
					<section>
						{props.slides.map((slide: any, index: number) => (
							<div key={index} className={`flex-1 ${index === activeIndex ? 'block' : 'hidden'}`}>
								<div className='grid grid-cols-2 gap-4 mt-4'>
									{Array.isArray(slide.content) ? (
										slide.content.map((item: any) => {
											const { id, title, value, percentage, positive } = item || {};
											return (
												<div key={id} className='h-32'>
													{percentage && (
														<div className='flex items-center'>
															{positive ? (
																<>
																	<BackAndroidIcon className='fill-success rotate-90' />
																	<h2 className='text-success'>{percentage}%</h2>
																</>
															) : (
																<>
																	<BackAndroidIcon className='fill-error -rotate-90' />
																	<h2 className='text-error'>{percentage}%</h2>
																</>
															)}
														</div>
													)}

													<p className='text-subtitle text-xs'>{title}</p>
													<p className='text-title font-semibold text-2xl'>{value}</p>
												</div>
											);
										})
									) : (
										<div>{slide.content}</div>
									)}
								</div>
							</div>
						))}
					</section>
				)}
			</div>

			<div className='flex justify-center py-2'>
				{props.slides.map((_: any, index: number) => (
					<Bullet key={index} active={index === activeIndex} onClick={() => setActiveIndex(index)} />
				))}
			</div>
		</div>
	);
};

export default SlideCard;

// Bullet component
interface BulletProps {
	active: boolean;
	onClick: () => void;
}

const Bullet: React.FC<BulletProps> = ({ active, onClick }) => (
	<button
		className={`mx-1 size-3 rounded-full ${active ? 'bg-primary' : 'border border-primary bg-white'}`}
		onClick={onClick}
	/>
);

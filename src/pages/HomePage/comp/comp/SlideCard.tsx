import { useState } from 'react';
import { BackAndroidIcon } from 'src/app/utils/icons';

interface SlideCardProps {
	slides: any;
}

const SlideCard: React.FC<SlideCardProps> = ({ slides }) => {
	const [activeIndex, setActiveIndex] = useState<number>(0);

	return (
		<div>
			<div>
				{slides.map((slide: any, index: number) => (
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
			</div>

			<div className='flex justify-center py-2'>
				{slides.map((_: any, index: number) => (
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

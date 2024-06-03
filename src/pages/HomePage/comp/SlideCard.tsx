import React, { useState } from 'react';
import { UseLanguage } from 'src/app/components/CustomHook/LanguageHook';
import { Button } from 'src/app/components/optimized';
import { BackAndroidIcon, DownIcon } from 'src/app/utils/icons';
import MenuOption from 'src/app/components/optimized/Menu/MenuOption';
import { cn } from 'src/app/utils';

/**
 * Props for the SlideCard component.
 */
interface SlideCardProps {
	slides: any; // Data for the slides
	text: string; // Header text
	sortMenus: any; // Sorting menu options
	btn: any; // Flag to show button
}

/**
 * Component representing a slide card with dynamic content.
 * @param {SlideCardProps} props - Props for the SlideCard component.
 */
const SlideCard: React.FC<SlideCardProps> = ({ slides, text, sortMenus, btn }) => {
	const language = UseLanguage();
	const [state, setState] = useState({
		activeIndex: 0, // Index of the active slide
		menu: false, // Flag to show/hide menu
		selectedOption: language === 'ar' ? 'اليوم' : 'Today', // Selected option for menu
	});

	const { activeIndex, menu, selectedOption } = state;

	/**
	 * Handles the selection of an option from the menu.
	 * @param {string} selectedOption - The selected option.
	 */
	const handleSelect = (selectedOption: string) => {
		setState({ ...state, selectedOption, menu: false });
	};

	/**
	 * Sets the active slide index.
	 * @param {number} index - The index of the active slide.
	 */
	const handleSetActiveIndex = (index: number) => {
		setState({ ...state, activeIndex: index });
	};

	return (
		<div className='cardDetails-sharedClass p-5 h-96'>
			<header className='flex justify-between items-center mb-2'>
				<h2 className='text-title font-semibold text-lg'>{text}</h2>
				{btn ? (
					<div className='relative'>
						<Button
							variant='link'
							RightIcon={DownIcon}
							onClick={() => setState({ ...state, menu: true })}
						>
							{selectedOption}
						</Button>
						{menu && (
							<MenuOption
								options={sortMenus}
								selectedOption={selectedOption}
								onSelect={handleSelect}
							/>
						)}
					</div>
				) : null}
			</header>
			<div>
				{slides.length < 1 ? (
					<div className='flex justify-center items-center h-full'>
						<p className='text-subtitle text-sm'>No {text} yet</p>
					</div>
				) : (
					<section>
						{slides.map((slide: any, index: number) => (
							<div
								key={index}
								className={cn('flex-1', {
									block: index === activeIndex,
									hidden: index !== activeIndex,
								})}
							>
								<div className='grid grid-cols-2 gap-4 mt-4'>
									{Array.isArray(slide.content) ? (
										slide.content.map((item: any) => {
											const { id, title, value, percentage, positive } = item || {};
											return (
												<div key={id} className='h-32'>
													{percentage && (
														<div className='flex items-center'>
															<BackAndroidIcon
																className={cn({
																	'fill-success rotate-90': positive,
																	'fill-error -rotate-90': !positive,
																})}
															/>
															<h2
																className={cn({
																	'text-success': positive,
																	'text-error': !positive,
																})}
															>
																{percentage}%
															</h2>
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
				{slides.map((_: any, index: number) => (
					<Bullet
						key={index}
						active={index === activeIndex}
						onClick={() => handleSetActiveIndex(index)}
					/>
				))}
			</div>
		</div>
	);
};

export default SlideCard;

/**
 * Bullet component representing a bullet point for slide navigation.
 * @param {BulletProps} props - Props for the Bullet component.
 */
interface BulletProps {
	active: boolean; // Flag to indicate if the bullet is active
	onClick: () => void; // Function to handle click event
}

const Bullet: React.FC<BulletProps> = ({ active, onClick }) => (
	<button
		className={cn('mx-1 size-3 rounded-full', {
			'bg-primary': active,
			'border border-primary bg-white': !active,
		})}
		onClick={onClick}
	/>
);

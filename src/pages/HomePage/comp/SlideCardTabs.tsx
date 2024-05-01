import React, { useState } from 'react';
import { UseLanguage } from 'src/app/components/CustomHook/LanguageHook';
import { Button } from 'src/app/components/optimized';
import MenuOption from 'src/app/components/optimized/Menu/MenuOption';
import { DownIcon } from 'src/app/utils/icons';
import { useTranslation } from 'react-i18next';
import MenuOptions from 'src/app/components/optimized/Menu/MenuOptions';
import PopupDelete from 'src/app/components/optimized/Popups/PopupDelete';

interface Slide {
	title: string;
	content: JSX.Element;
}

interface SlideCardTabsProps {
	slides: Slide[];
	sortMenus: any;
	text: string;
	btn: any;
	control?: any;
}

const SlideCardTabs: React.FC<SlideCardTabsProps> = (props) => {
	const language = UseLanguage();
	const { t } = useTranslation();
	const [state, setState] = useState({
		activeIndex: 0,
		menu: false,
		selectedOption: language === 'ar' ? 'اليوم' : 'Today',
		showDeletePopup: false,
		deletingItemId: null,
	});

	const { activeIndex, menu, selectedOption, showDeletePopup, deletingItemId } = state;

	const handleSelect = (selectedOption: string) => {
		setState({ ...state, selectedOption, menu: false });
	};

	const handleDeleteItem = (id: number) => {
		console.log('Deleting item:', id);
		const updatedSlides = props.slides.filter((item) => item.id !== id);
		setState({ ...state, slides: updatedSlides, showDeletePopup: false });
	};

	const options = [
		{
			id: 1,
			text: 'delete',
		},
	];

	return (
		<div className='bg-white rounded-xl border border-borders-lines p-5 h-96 flex flex-col'>
			<header className='flex justify-between items-center mb-2'>
				<h2 className='text-title font-semibold text-lg'>{props.text}</h2>

				{props.btn ? (
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
								options={props.sortMenus}
								selectedOption={selectedOption}
								onSelect={handleSelect}
							/>
						)}
					</div>
				) : null}
			</header>
			<div className='flex justify-between items-center border-b border-borders-lines'>
				{props.slides.map((slide, index) => (
					<Tab
						key={index}
						title={slide.title}
						active={index === activeIndex}
						onClick={() => setState({ ...state, activeIndex: index })}
					/>
				))}
			</div>

			{props.slides.length < 1 ? (
				<div className='flex justify-center items-center h-full'>
					<p className='text-subtitle text-sm'>No {props.text} yet</p>
				</div>
			) : (
				<div className='py-5'>
					{props.slides.map((slide, index) => (
						<div key={index} className={`${index === activeIndex ? 'block' : 'hidden'}`}>
							{Array.isArray(slide.content) ? (
								slide.content.map((item) => {
									const { id, title, img, qty, price, subtitle } = item || {};
									return (
										<div key={id} className='flex justify-between mb-2'>
											<div className='flex gap-2'>
												<div className='w-[3.625rem] h-[3.625rem] border border-light-3 rounded'>
													<img src={img} className='w-full h-full' alt={title} />
												</div>

												<div>
													<h4 className='text-title font-semibold text-sm'>{title}</h4>
													<p className='text-subtitle text-sm'>{subtitle}</p>
													<p className='text-title text-sm'>Qty: {qty}</p>
												</div>
											</div>

											<div className='flex flex-col justify-between items-end relative'>
												<MenuOptions
													options={options}
													handle={() =>
														setState({ ...state, showDeletePopup: true, deletingItemId: id })
													}
												/>
												<p className='text-title text-sm'>SAR {price}</p>
											</div>
											{showDeletePopup && deletingItemId === id && (
												<PopupDelete
													onClose={() => setState({ ...state, showDeletePopup: false })}
													onDelete={() => handleDeleteItem(id)}
												/>
											)}
										</div>
									);
								})
							) : (
								<div>{slide.content}</div>
							)}
						</div>
					))}
				</div>
			)}
		</div>
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

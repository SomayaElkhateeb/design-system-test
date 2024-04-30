import React, { useState } from 'react';
import { UseLanguage } from 'src/app/components/CustomHook/LanguageHook';
import { Button } from 'src/app/components/optimized';
import ThreeDotsButton from 'src/app/components/optimized/Buttons/ThreedotsButton';
import MenuOption from 'src/app/components/optimized/Menu/MenuOption';
import PopupDelete from 'src/app/components/optimized/Popups/PopupDelete';
import { DownIcon, MoreIcon } from 'src/app/utils/icons';

import { FaTrashAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import MenuSelect from 'src/app/components/optimized/Menu/MenuSelect';
/**
 * Interface for each slide in the SlideCardTabs component.
 */
interface Slide {
	title: string; // Title of the slide
	content: JSX.Element; // Content of the slide
}

/**
 * Props for the SlideCardTabs component.
 */
interface SlideCardTabsProps {
	slides: Slide[];
	sortMenus: any;
	text: string;
	btn: any;
	control?: any;
}

/**
 * Component representing a card with tabs and dynamic content.
 * @param {SlideCardTabsProps} props - Props for the SlideCardTabs component.
 */
const SlideCardTabs: React.FC<SlideCardTabsProps> = (props) => {
	const language = UseLanguage();
	const { t } = useTranslation();
	// State hook
	const [state, setState] = useState({
		activeIndex: 0,
		menu: false,
		menuList: false,
		selectedOption: language === 'ar' ? 'اليوم' : 'Today',
		showPopup: false,
		itemToDelete: null,
		items: props.slides,
	});

	// Destructure state variables
	const { activeIndex, menu, menuList, selectedOption, showPopup, itemToDelete, items } = state;

	/**
	 * Handles the selection of an option from the menu.
	 * @param {string} selectedOption - The selected option.
	 */
	const handleSelect = (selectedOption: string) => {
		setState({ ...state, selectedOption, menu: false });
	};

	/**
	 * Shows the delete popup when MoreIcon is clicked.
	 * @param {any} item - The item to be deleted.
	 */
	const handleShowPopupDelete = (item: any) => {
		setState({ ...state, itemToDelete: item, showPopup: true });
	};

	/**
	 * Handles the deletion of an item.
	 * @param {number} id - The ID of the item to be deleted.
	 */

	const handleDeleteItem = (id: number) => {
		console.log('Deleting item:', id);
		const updatedItems = items.filter((item) => item.id !== id);
		setState({ ...state, items: updatedItems, showPopup: false });
	};
	const options = [
		{
			id: 1,
			text: t('Delete'),
			icon: <FaTrashAlt className='text-warning' />,
			onClick: handleShowPopupDelete,
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
													<img src={img} className='w-full h-full' />
												</div>

												<div>
													<h4 className='text-title font-semibold text-sm'>{title}</h4>
													<p className='text-subtitle text-sm'>{subtitle}</p>
													<p className='text-title text-sm'>Qty: {qty}</p>
												</div>
											</div>

											<div className='flex flex-col justify-between items-end relative'>
												<button onClick={() => setState({ ...state, menuList: true })}>
													<MoreIcon />
												</button>
												{menuList && <MenuSelect options={options} />}
												<p className='text-title text-sm'>SAR {price}</p>
											</div>
											{showPopup && (
												<PopupDelete
													onClose={() => setState({ ...state, showPopup: false })}
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

/**
 * Component representing a tab in the SlideCardTabs component.
 */
interface TabProps {
	title: string; // Title of the tab
	active: boolean; // Flag to indicate if the tab is active
	onClick: () => void; // Function to handle click event
}

/**
 * Component representing a tab in the SlideCardTabs component.
 * @param {TabProps} props - Props for the Tab component.
 */
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

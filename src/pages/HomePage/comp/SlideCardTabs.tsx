import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { UseLanguage } from 'src/app/components/CustomHook/LanguageHook';
import { Button, Menu } from 'src/app/components/optimized';
import MenuOption from 'src/app/components/optimized/Menu/MenuOption';
import PopupDelete from 'src/app/components/optimized/Popups/PopupDelete';
import { DeleteExitIcon, DownIcon, MoreIcon } from 'src/app/utils/icons';

interface Slide {
	title: string;
	content: JSX.Element;
}

interface SlideCardTabsProps {
	slides: Slide[];
	sortMenus: any;
	text: string;
	btn: any;
}

const SlideCardTabs: React.FC<SlideCardTabsProps> = (props) => {
	const language = UseLanguage();
	const { t } = useTranslation();
	const [activeIndex, setActiveIndex] = useState<number>(0);
	const [menu, setMenu] = useState(false);
	const [selectedOption, setSelectedOption] = useState(language === 'ar' ? 'اليوم' : 'Today');
	const [show, setShow] = useState(false);

	const [state, setState] = useState({
		showPopup: false,
		selectedItem: [],
	});

	const { showPopup, selectedItem } = state;
	const sortMenus = [
		{ id: 1, text: t('Today') },
		{ id: 2, text: t('Last week') },
		{ id: 3, text: t('Last month') },
	];

	const handleSelect = (selectedOption) => {
		setSelectedOption(selectedOption);
	};

	const option = [
		{
			id: 1,
			text: t('Delete'),
			icon: <DeleteExitIcon />,
			onClick: () => setState({ ...state, showPopup: true }),
		},
	];

	// delete item
	const handleDeleteItem = (idToDelete: number) => {
		const updatedItems = selectedItem.filter((el) => el.id !== idToDelete);
		setState({
			...state,
			selectedItem: updatedItems,
			showPopup: false,
		});
	};
	return (
		<div className='bg-white rounded-xl border border-borders-lines p-5 h-96 flex flex-col'>
			<header className='flex justify-between items-center mb-2'>
				<h2 className='text-title font-semibold text-lg'>{props.text}</h2>

				{props.btn ? (
					<>
						<Button variant='link' RightIcon={DownIcon} onClick={() => setMenu(true)}>
							{selectedOption}
						</Button>
						{menu && (
							<Menu options={sortMenus} selectedOption={selectedOption} onSelect={handleSelect} />
						)}
					</>
				) : null}
			</header>
			<div className='flex justify-between items-center border-b border-borders-lines'>
				{props.slides.map((slide, index) => (
					<Tab
						key={index}
						title={slide.title}
						active={index === activeIndex}
						onClick={() => setActiveIndex(index)}
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

											<div className='flex flex-col justify-between relative'>
												<span className='flex justify-end cursor-pointer'>
													<MoreIcon onClick={() => setShow(true)} />
												</span>
												<p className='text-title text-sm'>SAR {price}</p>
											</div>
											{show && <MenuOption options={option} />}
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

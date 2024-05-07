import React, { useState } from 'react';
import ItemSlidTabs from './ItemSlidTabs';
import Btn from './Btn';
import { ToastContainer, toast } from 'react-toastify';
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
/**
 * SlideCardTabs component displays a tabbed view with multiple slides.
 *
 * @param {SlideCardTabsProps} props - Props for the SlideCardTabs component.
 * @returns {JSX.Element} SlideCardTabs component.
 */

const SlideCardTabs: React.FC<SlideCardTabsProps> = (props) => {
	const [state, setState] = useState({
		activeIndex: 0,
		showDeletePopup: false,
		deletingItemId: null,
	});

	const { activeIndex, showDeletePopup, deletingItemId } = state;

	const handleDeleteItem = (id: number) => {
		console.log('Deleting item:', id);
		setState({ ...state, showDeletePopup: false });
		toast.error('The product is deleted', {
			position: 'bottom-right',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: false,
			pauseOnHover: false,
			draggable: false,
			progress: undefined,
			theme: 'colored',
		});
	};

	const options = [
		{
			id: 1,
			text: 'delete',
		},
	];

	return (
		<div className='bg-white rounded-xl border border-borders-lines p-5 h-96 flex flex-col'>
			<header className='flex justify-between items-center space-y-2'>
				<h2 className='text-title font-semibold text-lg'>{props.text}</h2>

				{props.btn ? <Btn /> : null}
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
									return (
										<ItemSlidTabs
											key={item.id}
											{...item}
											options={options}
											handleDeleteItem={handleDeleteItem}
											showDeletePopup={showDeletePopup}
											deletingItemId={deletingItemId}
											setState={setState}
											state={state}
										/>
									);
								})
							) : (
								<div>{slide.content}</div>
							)}
						</div>
					))}
				</div>
			)}
			<ToastContainer />
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

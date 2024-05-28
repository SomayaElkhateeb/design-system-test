import React, { useState } from 'react';
import ItemSlidTabs from './ItemSlidTabs';
import Btn from './Btn';
import { ToastContainer, toast } from 'react-toastify';
import Tab from 'src/app/components/optimized/Tabs/Tab';
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

// import React, { useState } from 'react';
// import ItemSlidTabs from './ItemSlidTabs';
// import { ToastContainer, toast } from 'react-toastify';
// import TabPanel from '@mui/lab/TabPanel';
// import { Tab } from '@mui/material';
// import { useTranslation } from 'react-i18next';

// interface Slide {
// 	id: number;
// 	title: string;
// 	img: string;
// 	qty: number;
// 	price: number;
// 	subtitle: string;
// }

// interface SlideCardTabsProps {
// 	slides: Slide[];
// 	sortMenus: any;
// 	text: string;
// 	btn?: any;
// 	control?: any;
// }

// const SlideCardTabs: React.FC<SlideCardTabsProps> = (props) => {
// 	const [state, setState] = useState({
// 		showDeletePopup: false,
// 		deletingItemId: null,
// 	});
// 	const { t } = useTranslation();

// 	const { showDeletePopup, deletingItemId } = state;

// 	const handleDeleteItem = (id: number) => {
// 		console.log('Deleting item:', id);
// 		setState({ ...state, showDeletePopup: false });
// 		toast.error('The product is deleted', {
// 			position: 'bottom-right',
// 			autoClose: 5000,
// 			hideProgressBar: false,
// 			closeOnClick: false,
// 			pauseOnHover: false,
// 			draggable: false,
// 			progress: undefined,
// 			theme: 'colored',
// 		});
// 	};

// 	const options = [
// 		{
// 			id: 1,
// 			text: 'delete',
// 		},
// 	];

// 	return (
// 		<div className='bg-white rounded-xl border border-borders-lines p-5 h-96 flex flex-col'>
// 			<header className='flex justify-between items-center space-y-2'>
// 				<h2 className='text-title font-semibold text-lg'>{props.text}</h2>
// 				{props.btn ? <Btn /> : null}
// 			</header>

// 			<Tab label={t('Top selling')} value={'1'} />
// 			<Tab label={t('Top search')} value={'2'} />
// 			<Tab label={t('Top reviews')} value={'3'} />

// 			<div className='flex-grow'>
// 				<TabPanel value={'1'}>
// 					<ItemSlidTabs
// 						slides={props.slides}
// 						options={options}
// 						handleDeleteItem={handleDeleteItem}
// 						showDeletePopup={showDeletePopup}
// 						deletingItemId={deletingItemId}
// 						setState={setState}
// 						state={state}
// 					/>
// 				</TabPanel>
// 				<TabPanel value={'2'}>
// 					<ItemSlidTabs
// 						slides={props.slides}
// 						options={options}
// 						handleDeleteItem={handleDeleteItem}
// 						showDeletePopup={showDeletePopup}
// 						deletingItemId={deletingItemId}
// 						setState={setState}
// 						state={state}
// 					/>
// 				</TabPanel>
// 				<TabPanel value={'3'}>
// 					<ItemSlidTabs
// 						slides={props.slides}
// 						options={options}
// 						handleDeleteItem={handleDeleteItem}
// 						showDeletePopup={showDeletePopup}
// 						deletingItemId={deletingItemId}
// 						setState={setState}
// 						state={state}
// 					/>
// 				</TabPanel>
// 			</div>

// 			<ToastContainer />
// 		</div>
// 	);
// };

// export default SlideCardTabs;

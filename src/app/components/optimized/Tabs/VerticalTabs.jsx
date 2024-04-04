import { useState } from 'react';
import { Button, LayoutCard } from '..';

/**
 * VerticalTabs component renders a vertical tab navigation system.
 * @param {object} props - Props for the VerticalTabs component.
 * @param {Object[]} props.tabs - An array of tab objects containing title and content.
 */

const VerticalTabs = ({ tabs }) => {
	// Destructure the state and functions returned by useVerticalTabs hook
	const { currentTab, handleTabClick, handleNext, handlePrev } = useVerticalTabs(0, tabs);

	return (
		<div className='flex flex-col space-y-4'>
			<div className='flex flex-col space-y-4'>
				{tabs?.map((tab, index) => (
					<VTab
						key={index}
						index={index}
						currentTab={currentTab}
						title={tab.title}
						content={tab.content}
						onClick={handleTabClick}
						onNext={handleNext}
						onPrev={handlePrev}
						tabs={tabs}
					/>
				))}
			</div>
		</div>
	);
};

export default VerticalTabs;

/**
 * useVerticalTabs custom hook manages the state and functionality of vertical tabs.
 * @param {object} props - Props for the useVerticalTabs hook.
 * @param {number} props.initialTab - The initial tab index.
 * @param {Object[]} props.tabs - An array of tab objects containing title and content.
 */
const useVerticalTabs = (initialTab = 0, tabs) => {
	const [currentTab, setCurrentTab] = useState(initialTab);

	const handleTabClick = (index) => {
		setCurrentTab(index);
	};

	const handleNext = () => {
		if (currentTab < tabs.length - 1) {
			setCurrentTab((prevTab) => prevTab + 1);
		}
	};

	const handlePrev = () => {
		if (currentTab > 0) {
			setCurrentTab((prevTab) => prevTab - 1);
		}
	};

	return {
		currentTab,
		handleTabClick,
		handleNext,
		handlePrev,
	};
};

/**
 * VTab component represents an individual vertical tab.
 * @param {object} props - Props for the VTab component.
 * @param {number} props.index - The index of the tab.
 * @param {number} props.currentTab - The index of the currently active tab.
 * @param {string} props.title - The title of the tab.
 * @param {JSX.Element} props.content - The content of the tab.
 * @param {() => void} props.onClick - Function to handle tab click event.
 * @param {() => void} props.onNext - Function to handle next button click event.
 * @param {() => void} props.onPrev - Function to handle previous button click event.
 * @param {Object[]} props.tabs - An array of tab objects containing title and content.
 */

const VTab = ({ index, currentTab, title, content, onClick, onNext, onPrev, tabs }) => {
	return (
		<div className='relative'>
			<div className='flex items-center'>
				<div
					className={`z-20 w-8 h-8 rounded-full flex justify-center items-center ${
						index <= currentTab
							? 'bg-blue-500 text-white' // Active
							: currentTab >= index - 1
							? 'border-2 border-blue-500 bg-white' // Done
							: 'border-2 border-gray-500 bg-white' // Not Done
					}`}
					onClick={() => onClick(index)}
				>
					{index < currentTab ? <span className='text-sm'>&#10003;</span> : index + 1}
				</div>

				{/* Line between tabs */}
				{index < tabs.length - 1 && (
					<span
						className={`h-full w-0.5 absolute left-[15px] top-4 ${
							index === currentTab || index <= currentTab
								? 'bg-blue-600' // Blue line for active tab
								: 'bg-gray-300' // Gray line for inactive tab
						}`}
					></span>
				)}

				{/* title */}
				<div className={`flex-grow ml-2  text-md capitalize ${index === currentTab ? 'font-semibold' : ''}`}>
					{title}
				</div>
			</div>
			{index === currentTab && (
				<div className='ml-8'>
					{/* content */}
					<LayoutCard>
						{content}
						{/* Next & Prev */}
						<div className='flex justify-end mt-4'>
							{index !== 0 && (
								<Button onClick={onPrev} disabled={currentTab === 0} className='ml-5'>
									Prev
								</Button>
							)}

							<Button onClick={index === tabs.length - 1 ? () => alert('Finish') : onNext}>
								{index === tabs.length - 1 ? 'Finish' : 'Next'}
							</Button>
						</div>
					</LayoutCard>
				</div>
			)}
		</div>
	);
};

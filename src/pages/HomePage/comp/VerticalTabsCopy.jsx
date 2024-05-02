import { useState } from 'react';
import LayoutCard from './LayoutCard';
import { Button } from 'src/app/components/optimized';
import { useTranslation } from 'react-i18next';
import { UseLanguage } from 'src/app/components/CustomHook/LanguageHook';

/**
 * @typedef {{
 *  title: string;
 *  content: JSX.Element;
 * }} Tab
 */

/**
 * @param {object} props - Props for the VerticalTabs component.
 * @param {Tab[]} props.tabs - An array of tab objects containing title and content.
 * @param {function(boolean): void} props.handleFinish - Function to update the review status.
 * @description
 * VerticalTabs component renders a vertical tab navigation system.
 */

export default function VerticalTabs(props) {
	// Destructure the state and functions returned by useVerticalTabs hook
	const { currentTab, handleTabClick, handleNext, handlePrev } = useVerticalTabs(0, props.tabs);

	return (
		<div className='flex flex-col space-y-4'>
			<div className='flex flex-col space-y-4'>
				{props.tabs?.map((tab, index) => (
					<VTab
						key={index}
						index={index}
						currentTab={currentTab}
						title={tab.title}
						content={tab.content}
						onClick={handleTabClick}
						onNext={handleNext}
						onPrev={handlePrev}
						tabs={props.tabs}
						handleFinish={props.handleFinish}
					/>
				))}
			</div>
		</div>
	);
}

/**
 * @param {object} props - Props for the useVerticalTabs hook.
 * @param {number} props.initialTab - The initial tab index.
 * @param {Tab[]} tabs - An array of tab objects containing title and content.
 *
 * @description
 * useVerticalTabs custom hook manages the state and functionality of vertical tabs.
 */
function useVerticalTabs(initialTab = 0, tabs) {
	const [currentTab, setCurrentTab] = useState(initialTab);

	/** @param {number} index - The index of the tab to set as the current tab. */
	function handleTabClick(index) {
		setCurrentTab(index);
	}

	function handleNext() {
		if (currentTab < tabs.length - 1) {
			setCurrentTab((prevTab) => prevTab + 1);
		}
	}

	function handlePrev() {
		if (currentTab > 0) {
			setCurrentTab((prevTab) => prevTab - 1);
		}
	}

	return {
		currentTab,
		handleTabClick,
		handleNext,
		handlePrev,
	};
}

/**
 * VTab component represents an individual vertical tab.
 * @param {object} props - Props for the VTab component.
 * @param {number} props.index - The index of the tab.
 * @param {number} props.currentTab - The index of the currently active tab.
 * @param {string} props.title - The title of the tab.
 * @param {JSX.Element} props.content - The content of the tab.
 * @param {(index: number) => void} props.onClick - Function to handle tab click event.
 * @param {() => void} props.onNext - Function to handle next button click event.
 * @param {() => void} props.onPrev - Function to handle previous button click event.
 * @param {Tab[]} props.tabs - An array of tab objects containing title and content.
 * @param {function(boolean): void} props.handleFinish - Function to update the review status.
 */

function VTab(props) {
	const { t } = useTranslation();
	const language = UseLanguage();
	return (
		<div className='relative'>
			<div className='flex items-center'>
				<div
					className={`z-20 w-8 h-8 rounded-full flex justify-center items-center cursor-pointer ${
						props.index <= props.currentTab
							? 'bg-blue-500 text-white' // Active
							: props.currentTab >= props.index - 1
							? 'border-2 border-constrained bg-white'
							: 'border-2 border-constrained bg-white' // Not Done
					}`}
					onClick={() => props.onClick(props.index)}
				>
					{props.index < props.currentTab ? (
						<span className='text-sm'>&#10003;</span>
					) : (
						props.index + 1
					)}
				</div>

				{/* Line between tabs */}
				{props.index < props.tabs.length - 1 && (
					<span
						className={`h-full w-0.5 absolute left-[15px] top-4 ${
							language === 'ar' ? 'right-[15px]' : 'left-[15px]'
						} ${
							props.index === props.currentTab || props.index <= props.currentTab
								? 'bg-blue-600' // Blue line for active tab
								: 'bg-gray-300' // Gray line for inactive tab
						}`}
					></span>
				)}

				{/* title */}
				<div
					className={`flex-grow ml-2 mx-2 text-md capitalize ${
						props.index === props.currentTab ? 'font-semibold' : ''
					}`}
				>
					{props.title}
				</div>
			</div>
			{props.index === props.currentTab && (
				<div className='ml-8'>
					{/* content */}
					<LayoutCard>
						{props.content}
						{/* Next & Prev */}
						{/* <div className='flex justify-end mt-4'>
							{props.index !== 0 && (
								<Button onClick={props.onPrev} disabled={props.currentTab === 0} className='ml-5'>
									{t('Prev')}
								</Button>
							)}

							<Button
								onClick={
									props.index === props.tabs.length - 1 ? () => alert(t('Finish')) : props.onNext
								}
							>
								{props.index === props.tabs.length - 1 ? t('Finish') : t('Next')}
							</Button>
						</div> */}

						{/* Render next and previous buttons */}
						<div className='flex justify-end mt-4'>
							{props.index !== 0 && (
								<Button onClick={props.onPrev} disabled={props.currentTab === 0} className='ml-5'>
									{t('Prev')}
								</Button>
							)}

							<Button
								onClick={props.index === props.tabs.length - 1 ? props.handleFinish : props.onNext}
							>
								{props.index === props.tabs.length - 1 ? t('Finish') : t('Next')}
							</Button>
						</div>
					</LayoutCard>
				</div>
			)}
		</div>
	);
}

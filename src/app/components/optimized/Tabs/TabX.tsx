import React, { useContext, createContext } from 'react';
import { cn } from 'src/app/utils';
import Button from '../Buttons/Button';
import LayoutCard from '../Cards/LayoutCard';

interface Tab {
	title: string;
	content: React.ReactNode;
}

interface VerticalTabsContextType {
	currentTab: number;
	handleTabClick: (index: number) => void;
	handleNext: () => void;
	handlePrev: () => void;
}

// Create context with the specified type
export const VerticalTabsContext = createContext<VerticalTabsContextType>({
	currentTab: 0,
	handleTabClick: () => {},
	handleNext: () => {},
	handlePrev: () => {},
});

interface TabXProps {
	tabs: Tab[];
	handleFinish: (isFinished: boolean) => void;
	currentTab: number;
	handleTabClick: (index: number) => void;
	handleNext: () => void;
	handlePrev: () => void;
}

const TabX: React.FC<TabXProps> = ({
	tabs,
	handleFinish,
	currentTab,
	handleTabClick,
	handleNext,
	handlePrev,
}) => {
	return (
		<VerticalTabsContext.Provider value={{ currentTab, handleTabClick, handleNext, handlePrev }}>
			<div className='flex flex-col space-y-4'>
				<div className='flex flex-col space-y-4'>
					{tabs.map((tab, index) => (
						<VTab
							key={index}
							index={index}
							title={tab.title}
							content={tab.content}
							tabs={tabs}
							handleFinish={handleFinish}
						/>
					))}
				</div>
			</div>
		</VerticalTabsContext.Provider>
	);
};

export default TabX;

interface VTabProps {
	index: number;
	title: string;
	content: React.ReactNode;
	tabs: Tab[];
	handleFinish: (isFinished: boolean) => void;
}

const VTab: React.FC<VTabProps> = (props) => {
	const { currentTab, handleTabClick, handleNext, handlePrev } = useContext(VerticalTabsContext);

	return (
		<div className='relative'>
			<div className='flex items-center'>
				{/* Render tab indicator */}
				<div
					className={`z-20 w-8 h-8 rounded-full flex justify-center items-center ${
						props.index <= currentTab
							? 'bg-blue-500 text-white' // Active or completed tab
							: 'border-2 border-gray-500 bg-white' // Inactive tab
					}`}
					onClick={() => handleTabClick(props.index)}
				>
					{props.index < currentTab ? <span className='text-sm'>&#10003;</span> : props.index + 1}
				</div>

				{/* Line between tabs */}
				{props.index < props.tabs.length - 1 && (
					<span
						className={cn(
							'h-full w-0.5 absolute left-[15px] top-4',
							props.index <= currentTab ? 'bg-blue-600' : 'bg-gray-300',
						)}
					></span>
				)}

				{/* Title */}
				<div
					className={`flex-grow ms-2 text-md capitalize ${
						props.index === currentTab ? 'font-semibold' : ''
					}`}
				>
					{props.title}
				</div>
			</div>

			{/* Render content of the active tab */}
			{props.index === currentTab && (
				<div className='ms-8'>
					<LayoutCard>
						{props.content}
						{/* Next & Prev buttons */}
						<div className='flex justify-end mt-4 space-x-2'>
							{props.index > 0 && (
								<Button onClick={handlePrev} disabled={currentTab === 0} className='ms-5'>
									Prev
								</Button>
							)}
							<Button
								onClick={
									props.index === props.tabs.length - 1
										? () => props.handleFinish(true)
										: handleNext
								}
							>
								{props.index === props.tabs.length - 1 ? 'Finish' : 'Next'}
							</Button>
						</div>
					</LayoutCard>
				</div>
			)}
		</div>
	);
};

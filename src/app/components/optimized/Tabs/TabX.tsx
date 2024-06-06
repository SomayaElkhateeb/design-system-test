import React, { useContext, createContext } from 'react';
import { cn } from 'src/app/utils';
import Button from '../Buttons/Button';
import LayoutCard from '../Cards/LayoutCard';
import { useTranslation } from 'react-i18next';

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

const VTab: React.FC<VTabProps> = ({ index, title, content, tabs, handleFinish }) => {
	const { currentTab, handleTabClick, handleNext, handlePrev } = useContext(VerticalTabsContext);
	const { t } = useTranslation();
	const isActive = index === currentTab;
	const isLastStep = index === tabs.length - 1;
	const isCompleted = index < currentTab;

	return (
		<div className='relative'>
			<div className='flex items-center'>
				{/* Render tab indicator */}
				<div
					className={`z-20 w-8 h-8 rounded-full flex justify-center items-center ${
						index <= currentTab
							? 'bg-primary text-white' // Active or completed tab
							: 'border-2 border-inactive bg-white' // Inactive tab
					}`}
					onClick={() => handleTabClick(index)}
				>
					{isCompleted ? <span className='text-sm'>&#10003;</span> : index + 1}
				</div>

				{/* Line between tabs */}
				{index < tabs.length - 1 && (
					<span
						className={cn(
							'h-full w-0.5 absolute left-[15px] top-4',
							index <= currentTab ? 'bg-primary' : 'bg-inactive',
						)}
					></span>
				)}

				{/* Title */}
				<div className={`flex-grow ms-2 text-md capitalize ${isActive ? 'font-semibold' : ''}`}>
					{title}
				</div>
			</div>

			{/* Render content of the active tab */}
			{isActive && (
				<div className='ms-8'>
					<LayoutCard>
						{content}
						{/* Next & Prev buttons */}
						<div className='flex justify-end mt-4 space-x-2'>
							{index > 0 && (
								<Button onClick={handlePrev} disabled={currentTab === 0} className='ms-5'>
									{t('Prev')}
								</Button>
							)}
							<Button onClick={isLastStep ? () => handleFinish(true) : handleNext}>
								{isLastStep ? t('Finish') : t('Next')}
							</Button>
						</div>
					</LayoutCard>
				</div>
			)}
		</div>
	);
};

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'src/app/components/optimized';
import { InventoryIcon, ProductsIcon, SettingsIcon, SuccessIcon } from 'src/app/utils/icons';
import VerticalTabs from './VerticalTabs';

export const S = () => {
	const { t } = useTranslation();

	const basicMethod = [
		{
			id: 1,
			title: t('general settings'),
			description: t('Set your store general information'),
			Icon: SettingsIcon,
			isStepDone: false,
		},
		{
			id: 2,
			title: t('Products'),
			description: t('Add at least 1 product to your store'),
			Icon: ProductsIcon,
			isStepDone: false,
		},
		{
			id: 3,
			title: t('Inventory'),
			description: t('Create at least 1 inventory to locate and manage'),
			Icon: InventoryIcon,
			isStepDone: false,
		},
	];

	const tabs = [
		{
			title: t('Basic setup'),
			content: <Cards data={basicMethod} />,
		},
		{
			title: t('Services setup'),
			content: <Cards data={basicMethod} />,
		},
	];

	const [isFinished, setIsFinished] = useState(false);

	const handleFinish = () => {
		setIsFinished(true);
	};

	return (
		<div>
			<VerticalTabs tabs={tabs} handleFinish={handleFinish} /> {/* comp setup */}
		</div>
	);
};

const Cards = ({ data }: { data: any }) => {
	const arrayLength = data.length;
	return (
		<div>
			{data.map((item, index) => (
				<Card key={item.id} {...item} index={index} arrayLength={arrayLength} />
			))}
		</div>
	);
};

// card comp => show card
const Card = ({
	index,
	Icon,
	title,
	description,
	// isStepDone,
	arrayLength,
}: {
	index: number;
	item: any;
	arrayLength: number;
	Icon: any;
	title: string;
	description: string;
	// isStepDone: boolean;
}) => {
	const [isStepDone, setIsStepDone] = useState(false);

	const finished = true;
	// Determine button text based on index
	let buttonText = index === 0 ? 'Activate' : 'Add';

	const handleStepCompletion = () => {
		if (buttonText === 'Activate') {
			setIsStepDone(true);
		} else if (index === 1) {
			buttonText = 'Activate';
		} else if (index === 2) {
			buttonText = 'Activate';
		} else if (index === arrayLength) {
			return finished;
		}
	};

	// const handleStepCompletion = () => {
	// 	if (buttonText === 'Activate') {
	// 		isStepDone = true;
	// 	} else if (index === 1) {
	// 		buttonText = 'Activate';
	// 	} else if (index === 2) {
	// 		buttonText = 'Activate';
	// 	} else if (index === arrayLength) {
	// 		return finished;
	// 	}
	// };

	// 	useEffect(() => {
	// if(index === 0 && )
	// 	},[])
	return (
		<div
			className={`flex flex-col justify-between p-3 rounded-xl w-full ${
				isStepDone ? 'bg-brand-gradient' : 'bg-white border-2 border-light-3'
			}`}
		>
			<div>
				<div
					className={`size-[42px] rounded-full mb-1 grid place-content-center ${
						isStepDone ? 'bg-white/10 grid' : 'bg-pri-top-light'
					}`}
				>
					<Icon className={`w-8 h-8 ${isStepDone ? 'fill-white' : 'fill-primary'}`} />
				</div>
				<div className='w-full mb-3'>
					<h5 className={`font-semibold mb-1 text-sm ${isStepDone ? 'text-white' : ' text-title'}`}>
						{title}
					</h5>
					<p className={`font-normal text-sm ${isStepDone ? 'text-white' : 'text-title'}`}>
						{description}
					</p>
				</div>
			</div>
			<div>
				{isStepDone ? (
					<SuccessIcon className='fill-white' />
				) : (
					<Button
						className='text-sm place-self-start'
						onClick={handleStepCompletion}
						variant='link'
					>
						{buttonText}
					</Button>
				)}
			</div>
		</div>
	);
};

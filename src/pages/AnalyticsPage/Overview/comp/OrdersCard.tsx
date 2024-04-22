import { useState } from 'react';

import CompareButton from 'src/app/components/optimized/UiKits/CompareButton';
import { comparisonMenus } from 'src/app/utils/constants';
import { InputRow } from 'src/app/components/optimized';
import { SearchIcon } from 'src/app/utils/icons';
import Avatar from './Avatar';

// Define the type for the order object
interface Order {
	id: number;
	imageUrl?: string;
	firstName: string;
	lastName: string;
	orderStatus: string;
	orderNumber: string;
	price: number;
	currency: string;
	date: string;
}

// Define the type for the OrdersCard props
interface OrdersCardProps {
	latestOrders: Order[];
}

export default function OrdersCard({ latestOrders }: OrdersCardProps) {
	// State for selected comparison option
	const [selectedComparisonOption, setSelectedComparisonOption] = useState('Today');
	// State for search query
	const [searchQuery, setSearchQuery] = useState('');

	// Handle change of comparison option
	const handleComparisonChange = (option: string) => {
		setSelectedComparisonOption(option);
	};

	// Handle change of search query
	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(event.target.value);
	};

	// Filter orders based on search query
	const filteredOrders = latestOrders.filter((order) =>
		// Combine all searchable fields into a single string and convert to lowercase
		`${order.firstName} ${order.lastName} ${order.orderStatus} ${order.orderNumber} ${order.date}`
			.toLowerCase()
			// Check if the combined string includes the search query
			.includes(searchQuery.toLowerCase()),
	);

	return (
		<section className='grid content-start gap-2 p-4 h-full rounded-xl border border-borders-lines bg-white'>
			<Header
				selectedOption={selectedComparisonOption}
				handleSelect={handleComparisonChange}
				onSearch={handleSearchChange}
			/>
			<section className='grid gap-3 overflow-auto'>
				{filteredOrders.map((order) => (
					<OrderItem key={order.id} order={order} />
				))}
			</section>
		</section>
	);
}

// Define the type for the Header props
interface HeaderProps {
	handleSelect: (option: string) => void;
	selectedOption: string;
	onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Header({ handleSelect, selectedOption, onSearch }: HeaderProps) {
	return (
		<header className='flex justify-between items-center'>
			<h2 className='text-title font-semibold text-lg'>Latest Orders</h2>
			<div className='flex justify-between items-center gap-4'>
				<CompareButton
					sortMenus={comparisonMenus}
					selectedOption={selectedOption}
					handleSelect={handleSelect}
					variant='link'
				/>
				<InputRow leftIcon={<SearchIcon />} placeholder='Search' onChange={onSearch} />
			</div>
		</header>
	);
}

function OrderItem({ order }: { order: Order }) {
	const { id, imageUrl, firstName, lastName, orderStatus, orderNumber, price, currency, date } = order;
	return (
		<div key={id} className='flex justify-between py-0.5'>
			<div className='flex justify-between gap-3'>
				<Avatar variant='user' firstName={firstName} lastName={lastName} imageUrl={imageUrl} size='lg' />
				<div className='flex flex-col justify-between'>
					<h2 className='text-title text-sm'>
						{firstName} {lastName} <span className='text-xs text-subtitle'>{orderNumber}</span>
					</h2>
					<p
						className={`paragraph ${
							// Apply different styles based on order status
							orderStatus === 'Awaiting Payment'
								? 'text-neutral-2'
								: orderStatus === 'Canceled'
								? 'text-subtitle'
								: 'text-sec-pressed'
						}`}
					>
						{orderStatus}
					</p>
				</div>
			</div>
			<div className='flex flex-col justify-between'>
				<h4 className='text-right text-title text-sm font-semibold'>
					{price} {currency}
				</h4>
				<p className='text-subtitle text-xs'>{date}</p>
			</div>
		</div>
	);
}

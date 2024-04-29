import { useState } from 'react';

import useSelectBox from 'src/app/components/optimized/Menu/useSelectBox';
import Header from './Header';
import OrderItem, { Order } from './OrderItem';
import { Console } from 'console';

// Define the type for the OrdersCard props
interface OrdersCardProps {
	latestOrders: Order[];
}

export default function OrdersCard({ latestOrders }: OrdersCardProps) {
	// State for search query
	const [searchQuery, setSearchQuery] = useState('');

	//  custom hook for select arrang item

	const { selectedOption, handleSelect } = useSelectBox();

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
		<section className='grid content-start gap-2 p-4 h-full min-h-[22rem] rounded-xl border border-borders-lines bg-white'>
			<Header
				selectedOption={selectedOption}
				handleSelect={handleSelect}
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

import { createPortal } from 'react-dom';
import { IoMdCloseCircleOutline } from 'react-icons/io';

const RightSidebar = ({ isOpen, toggleSidebar }) => {
	return createPortal(
		<>
			{/* Sidebar */}
			<div
				className={`fixed top-0 right-0 h-full z-50 bg-gray-900  transition-transform duration-300 transform w-96 ${
					isOpen ? 'translate-x-0' : 'translate-x-full'
				}`}
			>
				{/* Sidebar Content */}
				<div className='h-full bg-white overflow-auto'>
					{/* Sidebar content */}
					<div className='flex justify-between items-center border-b py-4 p-5'>
						<h2 className='text-xl font-bold'>Orders Filters</h2>
						<button onClick={toggleSidebar}>
							<IoMdCloseCircleOutline size={24} />
						</button>
					</div>
					<ul className='p-5'>
						<li>Order status</li>
						<li>Date</li>
						<li>Payment Status</li>
						<li>Delivery Option</li>
						<li>Shipping Providers</li>
						<li>Payment Methods</li>
						<li>Location</li>
						<li>Branches</li>
					</ul>
				</div>
			</div>

			{/* Overlay */}
			{isOpen && <div className='fixed inset-0 bg-blue-200 opacity-50 z-40' onClick={toggleSidebar} />}
		</>,
		document.body,
	);
};

export default RightSidebar;

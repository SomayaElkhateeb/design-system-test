import { Avatars, Button, ClientBox, SelectItems } from 'src/app/components/optimized';
import { FaChevronRight } from 'react-icons/fa';
import { selectCustomerGroups, selectCustomers } from '../../comp/data';
import useDiscountForm from '../../comp/useDiscountForm';
import { MoreIcon } from 'src/app/utils/icons';
import { useEffect } from 'react';

console.log('selectCustomers', selectCustomers);
const OptionsCustomers = ({ optionType }) => {
	return (
		<>
			{optionType === 'All customers' && <h1>All customers</h1>}
			{optionType === 'Specific customer groups' && <SpecificCustomerGroups />}
			{optionType === 'Specific customers' && <SpecificCustomers />}
		</>
	);
};

export default OptionsCustomers;

const SpecificCustomerGroups = () => {
	const {
		showGroups,
		setShowGroups,
		hideSelectGroup,
		selectedItems,
		setSelectedItems,
		// stateGroups,
		// setStateGroups,
	} = useDiscountForm();
	// Effect to retrieve selected items from local storage when the component mounts
	useEffect(() => {
		const storedItems = JSON.parse(localStorage.getItem('selectedItems')) || [];
		setSelectedItems(storedItems);
	}, []);
	console.log('selectedItems', selectedItems);
	console.log('showGroups', showGroups);
	return (
		<div className='mt-[18px] flex flex-col gap-[18px]'>
			<div>
				<Button variant='sec' RightIcon={FaChevronRight} onClick={setShowGroups}>
					select groups
				</Button>
			</div>

			{showGroups && (
				<SelectItems onClose={hideSelectGroup} select={selectCustomerGroups} title='Select groups' varient='groups' />
			)}

			{/* Render selected items */}
			{selectedItems.length > 0 && (
				<div>
					<ul className='w-full flex flex-col gap-[18px]'>
						{selectedItems.map((item) => {
							const { count, title, subTitle } = item; // Move the destructuring assignment here
							return (
								<li key={item.id} className='flex items-center justify-between gap-[18px] h-[56px]'>
									<ClientBox
										title={title}
										details={subTitle}
										avatar={<Avatars variant='countAvatar' count={count} />}
									/>
									<MoreIcon className='cursor-pointer' />
								</li>
							);
						})}
					</ul>
				</div>
			)}
		</div>
	);
};

const SpecificCustomers = () => {
	const {
		showCustomers,
		setShowCustomers,
		hideSelectCustomers,
		// stateCustomers,
		// setStateCustomers,
		selectedItems,
		setSelectedItems,
	} = useDiscountForm();

	// Effect to retrieve selected items from local storage when the component mounts
	useEffect(() => {
		const storedItems = JSON.parse(localStorage.getItem('selectedItems')) || [];
		setSelectedItems(storedItems);
	}, []);
	console.log('selectedItems', selectedItems);
	console.log('showCustomers', showCustomers);

	return (
		<div className='mt-[18px] flex flex-col gap-[18px]'>
			<div>
				<Button variant='sec' RightIcon={FaChevronRight} onClick={setShowCustomers}>
					select customers
				</Button>
			</div>

			{showCustomers && (
				<SelectItems
					onClose={hideSelectCustomers}
					select={selectCustomers}
					title='Select customers'
					variant='customers'
				/>
			)}

			{/* Render selected items */}
			{selectedItems.length > 0 && (
				<div>
					<ul className='w-full flex flex-col gap-[18px]'>
						{selectedItems.map((item) => {
							console.log('item', item); // Log the item object to see its structure
							const { fName, lName, img, subTitle } = item; // Move the destructuring assignment here
							console.log('fName', fName);
							console.log('lName', lName);
							console.log('img', img);
							console.log('subTitle', subTitle);
							return (
								<li key={item.id} className='flex items-center justify-between gap-[18px] h-[56px]'>
									<ClientBox
										title={fName + ' ' + lName}
										details={subTitle}
										avatar={<Avatars img={img} fName={fName} lName={lName} />}
									/>
									<MoreIcon className='cursor-pointer' />
								</li>
							);
						})}
					</ul>
				</div>
			)}
		</div>
	);
};

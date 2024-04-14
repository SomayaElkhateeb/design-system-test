import React, { useEffect, useState } from 'react';
import { Button, SelectItems } from 'src/app/components/optimized';
import { FaChevronRight } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getSelectCustomers } from 'src/app/store/slices/marketing/customers/customersAsyncThunks';

const SpecificCustomers: React.FC = () => {
	const [showSelect, setShowSelect] = useState<boolean>(false);
	const dispatch = useDispatch();
	const { isLoading, customers } = useSelector((state) => state.customers);

	useEffect(() => {
		dispatch(getSelectCustomers());
	}, [dispatch]);

	console.log('customers', customers);

	return (
		<div className='mt-[18px] flex flex-col gap-[18px]'>
			<div>
				<Button variant='secondary' RightIcon={FaChevronRight} onClick={() => setShowSelect(true)}>
					select customers
				</Button>

				{showSelect && (
					<SelectItems title='Customers' variant='customers' onClose={() => setShowSelect(false)} select={customers} />
				)}
			</div>
		</div>
	);
};

export default SpecificCustomers;

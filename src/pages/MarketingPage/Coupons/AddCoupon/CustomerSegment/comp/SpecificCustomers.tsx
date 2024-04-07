import React, { useState } from 'react';
import { Button, SelectItems } from 'src/app/components/optimized';
import { FaChevronRight } from 'react-icons/fa';
import { selectCustomers } from '../../comp/data';
const SpecificCustomers: React.FC = () => {
	const [showSelect, setShowSelect] = useState<boolean>(false);

	return (
		<div className='mt-[18px] flex flex-col gap-[18px]'>
			<div>
				<Button variant='secondary' RightIcon={FaChevronRight} onClick={() => setShowSelect(true)}>
					select customers
				</Button>

				{showSelect && <SelectItems title='Customers' onClose={() => setShowSelect(false)} select={selectCustomers} />}
			</div>
		</div>
	);
};

export default SpecificCustomers;

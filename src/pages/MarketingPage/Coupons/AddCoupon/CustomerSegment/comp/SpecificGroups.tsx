import React, { useState } from 'react';
import { Button, SelectItems } from 'src/app/components/optimized';
import { FaChevronRight } from 'react-icons/fa';
import { selectCustomerGroups } from '../../comp/data';

const SpecificGroups: React.FC = () => {
	const [showSelect, setShowSelect] = useState<boolean>(false);

	return (
		<div className='mt-[18px] flex flex-col gap-[18px]'>
			<div>
				<Button variant='secondary' RightIcon={FaChevronRight} onClick={() => setShowSelect(true)}>
					select groups
				</Button>

				{showSelect && (
					<SelectItems title='Groups' onClose={() => setShowSelect(false)} select={selectCustomerGroups} />
				)}
			</div>
		</div>
	);
};

export default SpecificGroups;

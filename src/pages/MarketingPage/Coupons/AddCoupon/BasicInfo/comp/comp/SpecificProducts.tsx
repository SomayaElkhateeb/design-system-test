import React, { useState } from 'react';
import { MoreIcon } from 'src/app/utils/icons';
import { FaChevronRight } from 'react-icons/fa';
import { AiOutlinePercentage } from 'react-icons/ai';
import { Button } from 'src/app/components/optimized';
import SelectItems from 'src/app/components/optimized/SelectItems/SelectItems';

import { selectProducts } from '../../../comp/data';
interface SpecificProductsProps {}

const SpecificProducts: React.FC<SpecificProductsProps> = (props) => {
	const [showSelect, setShowSelect] = useState(false);
	return (
		<div className='mt-[18px] flex flex-col gap-[18px]'>
			<div>
				<Button variant='secondary' RightIcon={FaChevronRight} onClick={() => setShowSelect(true)}>
					select products
				</Button>

				{showSelect && <SelectItems title='products' onClose={() => setShowSelect(false)} select={selectProducts} />}
			</div>
		</div>
	);
};

export default SpecificProducts;

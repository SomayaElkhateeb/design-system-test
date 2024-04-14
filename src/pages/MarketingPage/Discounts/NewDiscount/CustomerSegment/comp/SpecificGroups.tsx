import React, { useEffect, useState } from 'react';
import { Button, SelectItems } from 'src/app/components/optimized';
import { FaChevronRight } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getSelectCustomerGroups } from 'src/app/store/slices/marketing/groups/groupsAsyncThunks';

const SpecificGroups: React.FC = () => {
	const [showSelect, setShowSelect] = useState<boolean>(false);
	const dispatch = useDispatch();
	const { groups } = useSelector((state) => state.groups);

	useEffect(() => {
		dispatch(getSelectCustomerGroups());
	}, [dispatch]);

	console.log('groups', groups);

	return (
		<div className='mt-[18px] flex flex-col gap-[18px]'>
			<div>
				<Button variant='secondary' RightIcon={FaChevronRight} onClick={() => setShowSelect(true)}>
					select groups
				</Button>

				{showSelect && (
					<SelectItems title='Groups' variant='groups' onClose={() => setShowSelect(false)} select={groups} />
				)}
			</div>
		</div>
	);
};

export default SpecificGroups;

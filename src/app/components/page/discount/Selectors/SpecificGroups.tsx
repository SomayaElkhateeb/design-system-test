import React, { useEffect, useState } from 'react';
import { Avatars, Button, SelectItems } from 'src/app/components/optimized';
import { FaChevronRight } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getSelectCustomerGroups } from 'src/app/store/slices/marketing/groups/groupsAsyncThunks';
import CategoryView from 'src/app/components/optimized/UiKits/CategoryView';

const SpecificGroups: React.FC = () => {
	const [showSelect, setShowSelect] = useState<boolean>(false);
	const [selectedItem, setSelectedItem] = useState([]);
	const dispatch = useDispatch();
	const { groups } = useSelector((state) => state.groups);

	useEffect(() => {
		dispatch(getSelectCustomerGroups());
	}, [dispatch]);

	console.log('groups', groups);

	const handleAddButtonClick = (selectedItem) => {
		setSelectedItem(selectedItem);
		setShowSelect(false);
	};
	return (
		<div className='mt-[18px] flex flex-col gap-[18px]'>
			<div>
				<Button variant='secondary' RightIcon={FaChevronRight} onClick={() => setShowSelect(true)}>
					select groups
				</Button>

				{showSelect && (
					<SelectItems
						title='Groups'
						variant='groups'
						onClose={() => setShowSelect(false)}
						select={groups}
						addBtn={handleAddButtonClick}
					/>
				)}

				{selectedItem?.map((item) => {
					console.log('selectedItem', item);
					const { count, title, id, subtitle } = item;
					return (
						<div>
							<Avatars variant='countAvatar' count={count} />
							<CategoryView key={id} description={subtitle} title={title} />;
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default SpecificGroups;

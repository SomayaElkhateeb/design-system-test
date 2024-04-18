import React, { useEffect, useState } from 'react';
import { Button, SelectItems } from 'src/app/components/optimized';
import { FaChevronRight } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getSelectCustomers } from 'src/app/store/slices/marketing/customers/customersAsyncThunks';
import { useTranslation } from 'react-i18next';
import CategoryView from 'src/pages/MarketingPage/CategoryView';

const SpecificCustomers: React.FC = () => {
	const { t } = useTranslation();
	const [showSelect, setShowSelect] = useState<boolean>(false);
	const [selectedItem, setSelectedItem] = useState([]);
	const dispatch = useDispatch();
	const { customers } = useSelector((state) => state.customers);

	useEffect(() => {
		dispatch(getSelectCustomers());
	}, [dispatch]);

	const handleAddButtonClick = (selectedItem) => {
		setSelectedItem(selectedItem);
		setShowSelect(false);
	};

	return (
		<div className='mt-[18px] flex flex-col gap-[18px]'>
			<div>
				<Button variant='secondary' RightIcon={FaChevronRight} onClick={() => setShowSelect(true)}>
					{t('select customers')}
				</Button>

				{showSelect && (
					<SelectItems
						title={t('Customers')}
						variant='customers'
						onClose={() => setShowSelect(false)}
						select={customers}
						addBtn={handleAddButtonClick}
					/>
				)}

				{selectedItem?.map((item) => {
					const { fName, lName, id, img, subtitle } = item;
					return (
						<CategoryView variant='customers' key={id} img={img} title={fName + ' ' + lName} subtitle={subtitle} />
					);
				})}
			</div>
		</div>
	);
};

export default SpecificCustomers;

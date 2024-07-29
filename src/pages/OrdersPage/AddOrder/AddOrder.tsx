import { useTranslation } from 'react-i18next';
import { SubHeader } from 'src/app/components/optimized';
import StepNavigator from 'src/app/components/optimized/Tabs/StepNavigator';
import useStepNavigator from 'src/app/components/optimized/Tabs/useStepNavigator';
import Customer from './Comp/OrderCustomer/Customer';
import Products from './Comp/OrderProducts/Products';
import { OrderAddress } from './Comp/AddOrderAddresse/OrderAddress';
import AddCheckout from './Comp/AddCheckOut/AddCheckout';
import { useAppDispatch, useAppSelector } from 'src/app/store';
import { getAllCustomersTable } from 'src/app/store/slices/customersPage/AllCustomers/customersTableAsyncThunks';
import { useEffect } from 'react';
import { getAllProductsTable } from 'src/app/store/slices/productsPage/allProducts/allProductsAsyncThunks';

export default function AddOrder() {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const { Add_Order_Data } = useAppSelector((state) => state.addOrder);
	useEffect(() => {
		dispatch(getAllCustomersTable());
		dispatch(getAllProductsTable());
	}, [dispatch]);
	console.log(Add_Order_Data);
	const { goNext, goPrevious, activeStep, setActiveStep } = useStepNavigator();

	const handleFinish = () => {
		console.log('Finish');
		// Implement additional finish logic here
	};

	const tabs = [
		{
			title: t('customer'),
			content: <Customer onNext={goNext} />,
		},
		{
			title: t('products'),
			content: <Products onNext={goNext} onBack={goPrevious} />,
		},
		{
			title: t('address'),
			content: <OrderAddress onNext={goNext} onBack={goPrevious} />,
		},
		{
			title: t('checkout'),
			content: <AddCheckout onFinish={handleFinish} onBack={goPrevious} />,
		},
	];
	return (
		<>
			<SubHeader title={t('add new order')} />
			<div className='custom_container mx-0 py-5 lg:w-3/4 sm:px-1'>
				<StepNavigator steps={tabs} activeStep={activeStep} setActiveStep={setActiveStep} />
			</div>
		</>
	);
}

import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GrUpdate } from 'react-icons/gr';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { IoPrintOutline } from 'react-icons/io5';
import { RxDotsHorizontal } from 'react-icons/rx';
import { Button, SubHeader } from 'src/app/components/optimized';
import ContactCard from 'src/app/components/optimized/Cards/ContactCard';
import useResponsive from 'src/app/utils/hooks/useResponsive';
import { EditIcon, LocationIcon } from 'src/app/utils/icons';
import { contact } from 'src/pages/SettingsPage/_comp/data';
import OrderNo from '../../OrderDetails/OrderNo';
import OrderItems from '../../OrderDetails/OrderItems';
import CustomerNote from '../../OrderDetails/CustomerNote';
import OrderHistory from '../../OrderDetails/OrderHistory';
import CustomerForm from '../../OrderDetails/Forms/CustomerForm';
import AddressForm from '../../OrderDetails/Forms/AddressForm';
import Checkout from '../../OrderDetails/Checkout';
import CheckoutDetailsForm from '../../OrderDetails/Forms/CheckoutDetailsForm';
export default function OrderDetails() {
	const { t } = useTranslation();
	const { xs } = useResponsive();
	const [state, setState] = useState({
		showCustomer: false,
		showAddress: false,
		showCheckout: false,
	});

	const { showCustomer, showAddress, showCheckout } = state;

	const handleCustomerForm = () => {
		setState({ ...state, showCustomer: !showCustomer });
	};
	const handleAddressForm = () => {
		setState({ ...state, showAddress: !showAddress });
	};
	const handleChckOutFormForm = () => {
		setState({ ...state, showCheckout: !showCheckout });
	};

	// data
	const address = [
		{ id: nanoid(), name: t('Country'), value: 'Saudi Arabia' },
		{ id: nanoid(), name: t('City'), value: 'Riyadh' },
		{ id: nanoid(), name: t('Area'), value: 'Al Jazera' },
		{ id: nanoid(), name: t('Street'), value: 'Haroon Al Rashied' },
		{ id: nanoid(), name: t('Building No'), value: 15 },
		{ id: nanoid(), name: t('Landmark'), value: 'Meed Market' },
	];

	const info = [
		{ id: nanoid(), name: `${t('IP Address')} `, value: '213.156.160.96' },
		{ id: nanoid(), name: `${t('Accepts email marketing')} `, value: 'No' },
	];

	const SubHeaderActions = () => {
		return (
			<>
				<Button onClick={() => {}} variant='tertiary' LeftIcon={<GrUpdate />}>
					{t('Update Status')}
				</Button>
				<Button onClick={() => {}} variant='tertiary' LeftIcon={<IoPrintOutline />}>
					{t('Print Invoice')}
				</Button>
				<button onClick={() => {}}>
					<RxDotsHorizontal size='20' />
				</button>

				<div className='flex items-center '>
					<button onClick={() => {}} className='border p-2 flex items-center justify-center'>
						<IoIosArrowBack />
					</button>
					<button onClick={() => {}} className='border p-2 flex items-center justify-center'>
						<IoIosArrowForward />
					</button>
				</div>
			</>
		);
	};
	return (
		<div className='flex-col-global'>
			<SubHeader title={t('Order Details')}>
				{!xs ? <SubHeaderActions /> : <RxDotsHorizontal />}
			</SubHeader>

			<div className='custom-grid-parent custom_container'>
				<div className='flex-col-global grid-left'>
					<OrderNo />
					<OrderItems />
					<CustomerNote />
					<OrderHistory />
				</div>
				<div className='flex-col-global grid-right'>
					<ContactCard
						contain={showCustomer && <CustomerForm handleCustomerForm={handleCustomerForm} />}
						form={showCustomer}
						title={t('Customer')}
						data={contact}
						contacts={true}
						children={
							<Button
								LeftIcon={EditIcon}
								variant='tertiary'
								onClick={() => setState({ ...state, showCustomer: !showCustomer })}
							>
								{t('edit')}
							</Button>
						}
					/>

					<ContactCard
						contain={showAddress && <AddressForm handleAddressForm={handleAddressForm} />}
						form={showAddress}
						title={t('Address')}
						data={address}
						contacts={false}
						isLocation={
							<Button className='pt-3' LeftIcon={LocationIcon} variant='tertiary'>
								{t('show on map')}
							</Button>
						}
						children={
							<Button
								LeftIcon={EditIcon}
								variant='tertiary'
								onClick={() => setState({ ...state, showAddress: !showAddress })}
							>
								{t('edit')}
							</Button>
						}
					/>
					<Checkout
						contain={
							showCheckout && <CheckoutDetailsForm handleChckOutFormForm={handleChckOutFormForm} />
						}
						form={showCheckout}
						title={t('Checkout')}
						children={
							<Button
								LeftIcon={EditIcon}
								variant='tertiary'
								onClick={() => setState({ ...state, showCheckout: !showCheckout })}
							>
								{t('edit')}
							</Button>
						}
					/>
					<ContactCard title={t('Additional Info')} data={info} contacts={false} />
				</div>
			</div>
			{xs && (
				<div className='flex space-x-3 justify-center bg-white p-5 absolute w-full bottom-0'>
					<SubHeaderActions />
				</div>
			)}
		</div>
	);
}

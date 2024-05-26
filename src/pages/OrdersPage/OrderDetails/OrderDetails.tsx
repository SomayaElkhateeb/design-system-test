import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Button, HeaderSettings } from 'src/app/components/optimized';
import ContactCard from 'src/app/components/optimized/Cards/ContactCard';
import {
	AddressForm,
	Checkout,
	CheckoutForm,
	CustomerForm,
	CustomerNote,
	OrderHistory,
	OrderItems,
	OrderNo,
} from 'src/app/components/page';
import { contact } from 'src/pages/SettingsPage/data';
import { address, info } from './data';
import { EditIcon, LocationIcon } from 'src/app/utils/icons';
import { useState } from 'react';

export default function OrderDetails() {
	const { t } = useTranslation();
	const navigate = useNavigate();
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
	return (
		<>
			<HeaderSettings
				variant='settingOrder'

				title={t('order details')}
				onClick={() => navigate(-1)}

				btn1={{ onClick: () => console.log('Update Status') }}
				btn2={{ onClick: () => console.log('Print Invoice') }}
				btn3={{ onClick: () => console.log('More Options') }}
				btn4={{
					onClickPrev: () => console.log('Previous'),
					onClickNext: () => console.log('Next'),
				}}
			/>

			<div className='grid gap-5 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 custom_container'>
				<div className='col-span-2 flex flex-col gap-5'>
					<OrderNo />
					<OrderItems />
					<CustomerNote />
					<OrderHistory />
				</div>
				<div className='col-span-1 flex flex-col gap-5'>
					<ContactCard
						contain={showCustomer && <CustomerForm handleCustomerForm={handleCustomerForm} />}
						form={showCustomer}
						title='Customer'
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
						title='Address'
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
						contain={showCheckout && <CheckoutForm />}
						form={showCheckout}
						title='Checkout'
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
					<ContactCard title='Additional Info' data={info} contacts={false} />
					{/* update order */}
				</div>
			</div>
		</>
	);
}

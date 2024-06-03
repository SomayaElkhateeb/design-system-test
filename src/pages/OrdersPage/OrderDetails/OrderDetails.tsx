import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { Button, HeaderSettings } from 'src/app/components/optimized';
import { EditIcon, LocationIcon } from 'src/app/utils/icons';
import { contact } from 'src/pages/SettingsPage/data';
import ContactCard from 'src/app/components/optimized/Cards/ContactCard';
import {
	AddressForm,
	Checkout,
	CheckoutDetailsForm,
	CustomerForm,
	CustomerNote,
	OrderHistory,
	OrderItems,
	OrderNo,
} from 'src/app/components/page';

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
	return (
		<div className='flex-col-top-section-pages'>
			<HeaderSettings
				variant='settingOrder'
				title={t('Order Details')}
				onClick={() => navigate(-1)}
				btn1={{ onClick: () => console.log('Update Status') }}
				btn2={{ onClick: () => console.log('Print Invoice') }}
				btn3={{ onClick: () => console.log('More Options') }}
				btn4={{
					onClickPrev: () => console.log('Previous'),
					onClickNext: () => console.log('Next'),
				}}
			/>

			<div className='custom-grid-parent custom_container'>
				<div className='flex-col-top-section-pages grid-left'>
					<OrderNo />
					<OrderItems />
					<CustomerNote />
					<OrderHistory />
				</div>
				<div className='flex-col-top-section-pages grid-right'>
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
		</div>
	);
}

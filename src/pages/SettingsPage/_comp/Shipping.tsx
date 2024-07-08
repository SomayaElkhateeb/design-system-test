import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Button, SubHeader } from 'src/app/components/optimized';
import { Switch } from 'src/app/components/ui/switch';
import { useAppDispatch, useAppSelector } from 'src/app/store';
import { getShippingList } from 'src/app/store/slices/settingsPage/shipping/shippingList/shippingListAsyncThunks';
import { getShippingMethods } from 'src/app/store/slices/settingsPage/shipping/shippingMethods/shippingMethodsAsyncThunks';
import { getTaxCategoriesList } from 'src/app/store/slices/settingsPage/tax/taxCategories/taxCategoriesList/taxCategoriesListAsyncThunks';
import { getTaxCategoriesShow } from 'src/app/store/slices/settingsPage/tax/taxCategories/taxCategoriesShow/taxCategoriesShowAsyncThunks';
import { getTaxRatesList } from 'src/app/store/slices/settingsPage/tax/taxRates/taxRatesList/taxRatesListAsyncThunks';
import { getTaxRatesShow } from 'src/app/store/slices/settingsPage/tax/taxRates/taxShow/taxRatesShowAsyncThunks';
import { EditIcon } from 'src/app/utils/icons';
import { images } from 'src/pages/SettingsPage/_comp/data';

export default function Shipping() {
	// hooks
	const { t } = useTranslation();
	const navigate = useNavigate();

	// redux
	// const dispatch = useAppDispatch();
	// const { shippingMethod, isLoading, error } = useAppSelector((state) => state.shippingMethod);

	// console.log('shippingMethods', shippingMethod); // i don't know where is show data

	// useEffect(() => {
	// 	dispatch(getShippingMethods());
	// }, [dispatch]);

	// redux
	// const dispatch = useAppDispatch();
	// const { shippingList, isLoading, error } = useAppSelector((state) => state.shippingList);

	// console.log('shippingList', shippingList); // i don't know where is show data

	// useEffect(() => {
	// 	dispatch(getShippingList());
	// }, [dispatch]);

	// // redux
	// const dispatch = useAppDispatch();
	// const { taxRatesList, isLoading, error } = useAppSelector((state) => state.taxRatesList);

	// console.log('taxRatesList', taxRatesList);

	// useEffect(() => {
	// 	dispatch(getTaxRatesList());
	// }, [dispatch]);

	// // redux
	const dispatch = useAppDispatch();
	const { taxRatesShow, isLoading, error } = useAppSelector((state) => state.taxRatesShow);

	console.log('taxRatesShow', taxRatesShow);

	useEffect(() => {
		dispatch(getTaxRatesShow());
	}, [dispatch]);

	// redux
	// const dispatch = useAppDispatch();
	// const { taxCategoriesList, isLoading, error } = useAppSelector(
	// 	(state) => state.taxCategoriesList,
	// );

	// console.log('taxCategoriesList', taxCategoriesList);

	// useEffect(() => {
	// 	dispatch(getTaxCategoriesList());
	// }, [dispatch]);

	// redux
	// const dispatch = useAppDispatch();
	// const { taxCategoriesShow, isLoading, error } = useAppSelector(
	// 	(state) => state.taxCategoriesShow,
	// );

	// console.log('taxCategoriesShow', taxCategoriesShow);

	// useEffect(() => {
	// 	dispatch(getTaxCategoriesShow());
	// }, [dispatch]);

	return (
		<div className='flex-col-global'>
			<SubHeader title={t('Shipping')} />

			<div className='flex-col-global custom_container'>
				{/* providers */}
				<CardShipping
					title={t('Third party shipping providers')}
					description={t('Providers that enable you to ship products to your customers')}
				>
					<div className='flex flex-wrap gap-2'>
						{images.map((e) => {
							return <img src={e.ImageURL} key={e.id} />;
						})}
					</div>
					<p className='text-subtitle text-sm py-3 w-[50%] leading-6'>
						{t(
							'Compare over 6 different Shipping providers and pick the one that suits your needs',
						)}
					</p>
					<div>
						<Button variant='primary' onClick={() => navigate('setupProviders')}>
							{t('setup providers')}
						</Button>
					</div>
				</CardShipping>
				{/* methods */}
				<CardShipping
					title={t('other methods')}
					description={t(
						'Shipments that are processed outside your online store. When a customer purchases an order, you need to handle the delivery yourself',
					)}
				>
					<hr />
					<div className='flexResponsive'>
						<h3 className='title text-sm'>{t('Deliver yourself')}</h3>
						<div className='flex items-center gap-4'>
							<Button
								variant='tertiary'
								LeftIcon={EditIcon}
								onClick={() => navigate('deliverYourself')}
							>
								{t('open setup')}
							</Button>
							<Switch />
						</div>
					</div>
					<hr />
					<div className='flexResponsive'>
						<h3 className='title text-sm'>{t('Self pickup')} </h3>
						<div>
							<Button variant='secondary' onClick={() => navigate('selfPickup')}>
								{t('Activate')}
							</Button>
						</div>
					</div>
				</CardShipping>
			</div>
		</div>
	);
}

function CardShipping({ title, description, buttonLabel, onClick, children }: CardShippingProps) {
	return (
		<div className='global-cards gap-2'>
			<div className='flex-col-global gap-0'>
				<h2 className='title'>{title}</h2>
				<p className='text-title text-sm py-3 w-[60%]'>{description}</p>
			</div>
			{children}
			{buttonLabel && (
				<div>
					<Button variant='primary' onClick={onClick}>
						{buttonLabel}
					</Button>
				</div>
			)}
		</div>
	);
}

interface CardShippingProps {
	title: string;
	description: string;
	buttonLabel?: string;
	onClick?: () => void;
	children: React.ReactNode;
}

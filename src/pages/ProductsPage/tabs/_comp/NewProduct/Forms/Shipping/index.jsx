import { Checkbox } from '@mui/material';
import { useWatch } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from 'src/app/components/ui/card';
import FormField from 'src/app/components/ui/form/field';
import OtherProductShippingOptions from './_comp/OtherProductShippingOptions';
import VirtualProductShippingOptions from './_comp/VirtualProductShippingOptions';
import {
	productShippingTypeMap
} from './utils';

/**
 * @template TFormStore
 *
 * @param {import('./types').Props<TFormStore>} props
 */
export default function ProductFormShippingSection(props) {
	const { t } = useTranslation();
	const shippingType = useWatch({
		control: props.formStore.control,
		name: 'shipping.type',
	});

	return (
		<Card id={props.id}>
			<CardHeader>
				<CardTitle>{t('Shipping')}</CardTitle>
			</CardHeader>
			<CardContent className='flex flex-col gap-4'>
				<FormField
					formStore={props.formStore}
					name='shipping.isShippableOrPickupable'
					container={{ className: 'gap-x-2' }}
					label={{
						children: (
							<div className='flex flex-col'>
								<p>{t('Is this product require shipping or pickup?')}</p>
								<p className='text-sm text-gray-400'>
									{t(
										"Enable this option if the product needs to be physically delivered to customers either via shipping or by self-pickup. If this product is a service or a downloadable item that doesn't require delivery, keep this option disabled.",
									)}
								</p>
							</div>
						),
						className: 'self-center mt-0.5',
					}}
					render={({ value, ...field }) => (
						<Checkbox
							{...field}
							checked={value}
							style={{ gridArea: 'input', padding: 0 }}
							className='justify-self-start'
						/>
					)}
					layout='inline-reversed'
				/>
				{shippingType === productShippingTypeMap.online ? (
					<VirtualProductShippingOptions formStore={props.formStore} />
				) : shippingType === productShippingTypeMap.pickup ? (
					<OtherProductShippingOptions formStore={props.formStore} />
				) : null}
			</CardContent>
		</Card>
	);
}

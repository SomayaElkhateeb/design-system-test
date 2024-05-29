import { Checkbox } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from 'src/app/components/ui/card';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';
import Button from '../../../../Buttons/Button';
import { FaCirclePlus } from 'react-icons/fa6';

/**
 * @template TFormStore
 *
 * @param {import('./types').Props<TFormStore>} props
 */
export default function ProductFormShippingSection(props) {
	const { t } = useTranslation();

	return (
		<Card>
			<CardHeader>
				<CardTitle>{t('Shipping')}</CardTitle>
			</CardHeader>
			<CardContent className='flex flex-col gap-4'>
				<FormField
					formStore={props.formStore}
					name='isShippableOrPickupable'
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
				<div className='flex flex-col items-start'>
					<FormField
						formStore={props.formStore}
						name='weight'
						label={t('Weight')}
						render={(field) => <Input {...field} type='number' />}
					/>
					<div className='max-w-[50%] w-full flex items-center text-gray'>
						<FormField
							formStore={props.formStore}
							name='dimensions.length'
							render={(field) => (
								<Input
									{...field}
									type='number'
									className='border-0 px-0'
									placeholder={t('Length')}
									min='0'
								/>
							)}
						/>
						<span className='me-8'>x</span>
						<FormField
							formStore={props.formStore}
							name='dimensions.width'
							render={(field) => (
								<Input
									{...field}
									type='number'
									className='border-0 px-0'
									placeholder={t('Width')}
									min='0'
								/>
							)}
						/>
						<span className='me-8'>x</span>
						<FormField
							formStore={props.formStore}
							name='dimensions.height'
							render={(field) => (
								<Input
									{...field}
									type='number'
									className='border-0 px-0'
									placeholder={t('Height')}
									min='0'
								/>
							)}
						/>
						<span className='me-8'>x</span>
						<FormField
							formStore={props.formStore}
							name='dimensionUnit'
							render={(field) => (
								<Input
									{...field}
									type='number'
									className='border-0'
									placeholder={t('Dimension unit')}
									readOnly
								/>
							)}
						/>
					</div>
				</div>
				{/* // ??? */}
				{/* // TODO: To be implemented  */}
				<Button
					variant='secondary'
					textClassName='flex items-center justify-center gap-1.5 whitespace-nowrap'
					className='px-0 border-0'
				>
					<FaCirclePlus className='size-5' />
					{t('Add more advanced shipping options')}
				</Button>
			</CardContent>
		</Card>
	);
}

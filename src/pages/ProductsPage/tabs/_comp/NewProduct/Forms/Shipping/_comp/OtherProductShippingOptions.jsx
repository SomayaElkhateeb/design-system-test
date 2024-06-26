import { useTranslation } from 'react-i18next';
import { IoClose } from 'react-icons/io5';
import FormField from 'src/app/components/ui/form/field';
import HorizontalBox from 'src/app/components/ui/horizontal-box';
import { Input } from 'src/app/components/ui/input';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from 'src/app/components/ui/select';

import {
	productDimensionUnitCollection,
	productWeightUnitCollection
} from '../utils';
import AdvancedShippingOptionsManager from './AdvancedShippingOptionsManager';


/**
 * @template TFormStore
 *
 * @param {import('../types').Props<TFormStore>} props
 */
export default function OtherProductShippingOptions(props) {
	const { t } = useTranslation();

	return (
		<>
			<div className='flex flex-col gap-4 items-start'>
				<FormField
					formStore={props.formStore}
					name='shipping.weight'
					label={t('Weight')}
					render={(field) => (
						<HorizontalBox
							end={
								<FormField
									formStore={props.formStore}
									name='shipping.weightUnit'
									render={(field) => (
										<Select
											onValueChange={(value) => {
												// @ts-ignore
												props.formStore.setValue('shipping.weightUnit', value);
											}}
											value={field.value}
										>
											<SelectTrigger
												id={field.id}
												className='border-0 rounded-none'
												style={{
													minWidth: 2 * 3.5 + 'ch',
												}}
											>
												<SelectValue />
											</SelectTrigger>
											<SelectContent>
												{productWeightUnitCollection.map((item) => {
													return (
														<SelectItem key={item} value={item}>
															{item}
														</SelectItem>
													);
												})}
											</SelectContent>
										</Select>
									)}
								/>
							}
							endSeparator
						>
							<Input {...field} type='number' className='border-0' />
						</HorizontalBox>
					)}
				/>
				<div className='flex items-center text-gray border rounded-md px-2'>
					<FormField
						formStore={props.formStore}
						name='shipping.dimensions.length'
						render={(field) => (
							<Input
								{...field}
								type='number'
								className='border-0 px-0'
								placeholder={t('Length')}
								style={{ width: t('Length').length * 1.2 + 'ch' }}
								min='0'
							/>
						)}
					/>
					<span className='me-8'>
						<IoClose />
					</span>
					<FormField
						formStore={props.formStore}
						name='shipping.dimensions.width'
						render={(field) => (
							<Input
								{...field}
								type='number'
								className='border-0 px-0'
								placeholder={t('Width')}
								style={{ width: t('Width').length * 1.2 + 'ch' }}
								min='0'
							/>
						)}
					/>
					<span className='me-8'>
						<IoClose />
					</span>
					<FormField
						formStore={props.formStore}
						name='shipping.dimensions.height'
						render={(field) => (
							<Input
								{...field}
								type='number'
								className='border-0 px-0'
								placeholder={t('Height')}
								style={{ width: t('Height').length * 1.2 + 'ch' }}
								min='0'
							/>
						)}
					/>
					<span className='me-8'>
						<IoClose />
					</span>
					<FormField
						formStore={props.formStore}
						name='shipping.dimensionUnit'
						render={(field) => (
							<Select
								onValueChange={(value) => {
									// @ts-ignore
									props.formStore.setValue('shipping.dimensionUnit', value);
								}}
								value={field.value}
							>
								<SelectTrigger id={field.id} className='border-0'>
									<SelectValue />
								</SelectTrigger>
								<SelectContent>
									{productDimensionUnitCollection.map((item) => {
										return (
											<SelectItem key={item} value={item}>
												{item}
											</SelectItem>
										);
									})}
								</SelectContent>
							</Select>
						)}
					/>
				</div>
			</div>
			<AdvancedShippingOptionsManager formStore={props.formStore} />
		</>
	);
}
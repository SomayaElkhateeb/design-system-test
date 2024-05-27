import { useTranslation } from 'react-i18next';
import { Button, CheckBox } from 'src/app/components/optimized';
import CustomPhoneInput from 'src/app/components/optimized/UiKits/CustomPhoneInput';
import { Form } from 'src/app/components/ui/form';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';
import { useForm } from 'src/app/utils/hooks/form';
import useCustomAddressForm, { addressFormInterface } from './HookAddressForm';

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from 'src/app/components/ui/select';

export default function AddressForm({ handleAddressForm }: { handleAddressForm: () => void }) {
	const { t } = useTranslation();
	// custom hook
	const { handelDefaultValue, addressSchema } = useCustomAddressForm();
	const handleSubmit = (values: addressFormInterface) => {
		console.log(values);
	};

	const { formStore, onSubmit } = useForm({
		schema: addressSchema,
		handleSubmit: handleSubmit,
		defaultValues: handelDefaultValue(),
	});

	const handleSubmitBtn = () => {
		onSubmit();
		// handleAddressForm();
	};

	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='flex-col-top-section-pages gap-4 '>
				<div className='flex-col-top-section-pages gap-4'>
					<CheckBox
						label={t('Send as a gift')}
						checked={formStore.watch('sendGift')}
						handleOnChange={(option) => {
							formStore.setValue('sendGift', option);
						}}
					/>

					<div className='flex-col-top-section-pages gap-4'>
						<FormField
							formStore={formStore}
							label={t('Name')}
							name='name'
							render={(field) => <Input {...field} placeholder={''} />}
						/>

						<FormField
							formStore={formStore}
							label={t('Country')}
							name='country'
							render={(field) => (
								
									<Select
										onValueChange={field.onChange}
										value={field.value}
										required={field.required}
										name={field.name}
									>
										<SelectTrigger onBlur={field.onBlur} disabled={field.disabled} id={field.id}>
											<SelectValue placeholder='Egypt' />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value='egypt'>Egypt</SelectItem>
											<SelectItem value='saudiArabia'>Saudi Arabia</SelectItem>
										</SelectContent>
									</Select>
								
							)}
						/>

						<FormField
							formStore={formStore}
							label={t('City')}
							name='city'
							render={(field) => (
								
									<Select
										onValueChange={field.onChange}
										value={field.value}
										required={field.required}
										name={field.name}
									>
										<SelectTrigger onBlur={field.onBlur} disabled={field.disabled} id={field.id}>
											<SelectValue placeholder='Cairo' />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value='cairo'>Cairo</SelectItem>
											<SelectItem value='riyadh'>Riyadh</SelectItem>
										</SelectContent>
									</Select>
								
							)}
						/>

						<FormField
							formStore={formStore}
							label={t('District')}
							name='district'
							render={(field) => <Input {...field} placeholder={''} />}
						/>

						<FormField
							formStore={formStore}
							label={t('Street')}
							name='street'
							render={(field) => <Input {...field} placeholder={''} />}
						/>

						<FormField
							formStore={formStore}
							label={t('Building')}
							name='building'
							render={(field) => <Input {...field} placeholder={''} />}
						/>

						<FormField
							formStore={formStore}
							label={t('Landmark')}
							name='landmark'
							render={(field) => <Input {...field} placeholder={''} />}
						/>

						<FormField
							formStore={formStore}
							label={t('Phone')}
							name='phone'
							render={(field) => (
								<CustomPhoneInput value={field.value} onHandleChange={field.onChange} />
							)}
						/>
					</div>
				</div>

				<div className='flex justify-end items-center gap-4'>
					<Button onClick={handleAddressForm} variant='secondary'>
						{t('Discard')}
					</Button>
					<Button onClick={handleSubmitBtn} variant='primary'>
						{t('Save')}
					</Button>
				</div>
			</form>
		</Form>
	);
}

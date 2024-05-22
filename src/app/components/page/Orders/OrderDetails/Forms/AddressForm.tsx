import { useTranslation } from 'react-i18next';
import { Button } from 'src/app/components/optimized';
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
import { Checkbox } from '@mui/material';

export default function AddressForm({ handleAddressForm }: { handleAddressForm: () => void }) {
	const { t } = useTranslation();
	const style = 'flex justify-between items-center w-full';
	const title = 'text-sm text-title';
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
		handleAddressForm(); // ?? check zod?
	};

	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='flex flex-col gap-3'>
				<div className='flex flex-col gap-3'>
					<div>
						<Checkbox />
						<span className='text-sm text-title'>{t('Send as a gift')}</span>
					</div>
					<div className={style}>
						<h2 className={title}>{t('Name')}</h2>
						<FormField
							formStore={formStore}
							name='name'
							render={(field) => <Input {...field} placeholder={''} />}
						/>
					</div>

					<div className={style}>
						<h2 className={title}>{t('Country')}</h2>

						<FormField
							formStore={formStore}
							name='country'
							render={(field) => (
								<div className='flex-col-top-section-pages gap-[.2rem]'>
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
								</div>
							)}
						/>
					</div>

					<div className={style}>
						<h2 className={title}>{t('City')}</h2>
						<FormField
							formStore={formStore}
							name='city'
							render={(field) => (
								<div className='flex-col-top-section-pages gap-[.2rem]'>
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
								</div>
							)}
						/>
					</div>

					<div className={style}>
						<h2 className={title}>{t('District')}</h2>
						<FormField
							formStore={formStore}
							name='district'
							render={(field) => <Input {...field} placeholder={''} />}
						/>
					</div>

					<div className={style}>
						<h2 className={title}>{t('Street')}</h2>
						<FormField
							formStore={formStore}
							name='street'
							render={(field) => <Input {...field} placeholder={''} />}
						/>
					</div>

					<div className={style}>
						<h2 className={title}>{t('Building')}</h2>
						<FormField
							formStore={formStore}
							name='building'
							render={(field) => <Input {...field} placeholder={''} />}
						/>
					</div>

					<div className={style}>
						<h2 className={title}>{t('Landmark')}</h2>
						<FormField
							formStore={formStore}
							name='landmark'
							render={(field) => <Input {...field} placeholder={''} />}
						/>
					</div>

					<div className={style}>
						<h2 className={title}>{t('Phone')}</h2>
						<FormField
							formStore={formStore}
							name='phone'
							render={(field) => (
								<CustomPhoneInput value={field.value} onHandleChange={field.onChange} />
							)}
						/>
					</div>
				</div>
				{/* btns */}
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

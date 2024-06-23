import { useTranslation } from 'react-i18next';
import FormField from 'src/app/components/ui/form/field';
import {
	Select,
	SelectContent,
	SelectTrigger,
	SelectValue,
	SelectItem,
} from 'src/app/components/ui/select';
import { FaCirclePlus } from 'react-icons/fa6';
import { Dialog, DialogContent, DialogTrigger } from 'src/app/components/ui/dialog';
import { Button } from 'src/app/components/optimized';
import BrandForm from './BrandForm';

function BrandDialog() {
	const { t } = useTranslation();

	return (
		<Dialog>
			<DialogTrigger>
				<Button
					variant='secondary'
					textClassName='flex items-center justify-center gap-1.5 whitespace-nowrap'
					className='border-input border-s-0 rounded-s-none'
				>
					<FaCirclePlus className='size-5' />
					{t('Add New')}
				</Button>
			</DialogTrigger>
			<DialogContent className='p-8'>
				<BrandForm
					handleSubmit={(values) => {
						// console.log(values);
					}}
				/>
			</DialogContent>
		</Dialog>
	);
}

/**
 * @template TFormStore
 *
 * @param {import('./types').Props<TFormStore>} props
 */
export default function ProductFormBrandField(props) {
	const { t } = useTranslation();

	return (
		<FormField
			formStore={props.formStore}
			name='brand'
			label={t('Brand')}
			render={(field) => (
				<div className='flex'>
					<Select
						onValueChange={field.onChange}
						value={field.value}
						required={field.required}
						name={field.name}
					>
						<SelectTrigger
							className='border-e-0 rounded-e-none rtl:border-e rtl:rounded-e rtl:border-s-0 rtl:rounded-s-none'
							onBlur={field.onBlur}
							disabled={field.disabled}
							id={field.value}
						>
							<SelectValue placeholder='Theme' />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value='light'>Light</SelectItem>
							<SelectItem value='dark'>Dark</SelectItem>
							<SelectItem value='system'>System</SelectItem>
						</SelectContent>
					</Select>
					<BrandDialog />
				</div>
			)}
		/>
	);
}

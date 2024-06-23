import { Link } from 'react-router-dom';

import { Form } from 'src/app/components/ui/form';
import { Input } from 'src/app/components/ui/input';
import { Button } from 'src/app/components/optimized';
import FormField from 'src/app/components/ui/form/field';
import useIdentifierForm, { IdentifierFormProps } from './useIdentifierForm';

export default function IdentifierForm({ setStep, onIdentifierChange }: IdentifierFormProps) {
	const { formStore, onSubmit, handleTypeChange } = useIdentifierForm({
		setStep,
		onIdentifierChange,
	});
	return (
		<Form {...formStore}>
			<form className='w-full' onSubmit={onSubmit}>
				<FormField
					formStore={formStore}
					name='emailOrPhone'
					render={(field) => (
						<Input
							{...field}
							placeholder='Email or phone'
							onChange={(e) => {
								handleTypeChange(e);
								field.onChange(e);
							}}
						/>
					)}
				/>
				<div className='flex  justify-end mt-2 mb-5'>
					<Link to='/forgot_password' className='paragraph text-primary'>
						Forgot Password?
					</Link>
				</div>
				<div className='flex justify-end mb-11'>
					<Button type='submit' variant='primary' text='Next' className='w-36' />
				</div>
				<p className='paragraph text-subtitle text-center'>
					Don&apos;t have an account?&nbsp;
					<Link to='/register' className='font-semibold text-primary'>
						Sign up
					</Link>
				</p>
			</form>
		</Form>
	);
}

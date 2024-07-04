import { Link } from 'react-router-dom';

import { Form } from 'src/app/components/ui/form';
import { Input } from 'src/app/components/ui/input';
import { Button } from 'src/app/components/optimized';
import FormField from 'src/app/components/ui/form/field';
import useIdentifierForm, { IdentifierFormProps } from './useIdentifierForm';
import { useTranslation } from 'react-i18next';
import { AuthApi } from 'src/app/React-Query/authApi';
import { useMutation } from 'react-query';
import PublicHandelingErrors from 'src/app/utils/AxiosUtils/PublicHandelingErrors';
import toast from 'react-hot-toast';

export default function IdentifierForm({ setStep, onIdentifierChange }: IdentifierFormProps) {
	const { formStore, onSubmit, handleTypeChange } = useIdentifierForm({
		setStep,
		onIdentifierChange,
	});
	const { t } = useTranslation();

	const { mutate } = useMutation('login', AuthApi.login, {
		onSuccess: async (response) => {
			toast.success(response?.data?.message);
			console.log(response?.data?.data.token);
		},
		onError: PublicHandelingErrors.onErrorResponse,
	});

	const handleSignIn = (values: { emailOrPhone: string }) => {
		mutate({ loginData: values.emailOrPhone });
	};

	return (
		<Form {...formStore}>
			<form className='w-full' onSubmit={onSubmit}>
				<FormField
					formStore={formStore}
					name='emailOrPhone'
					render={(field) => (
						<Input
							{...field}
							placeholder={t('Email or phone')}
							onChange={(e) => {
								handleTypeChange(e);
								field.onChange(e);
							}}
						/>
					)}
				/>
				<div className='flex  justify-end mt-2 mb-5'>
					<Link to='/forgot_password' className='paragraph text-primary'>
						{t('Forgot Password?')}
					</Link>
				</div>
				<div className='flex justify-end mb-11'>
					<Button
						type='submit'
						variant='primary'
						text={t('Next')}
						className='w-36'
						omClick={handleSignIn}
					/>
				</div>
				<p className='paragraph text-subtitle text-center'>
					{t("Don't have an account?")}&nbsp;
					<Link to='/register' className='font-semibold text-primary'>
						{t('Sign up')}
					</Link>
				</p>
			</form>
		</Form>
	);
}

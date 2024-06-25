import { capitalize } from 'src/app/utils';
import { Form } from 'src/app/components/ui/form';
import { Input } from 'src/app/components/ui/input';
import { Button } from 'src/app/components/optimized';
import FormField from 'src/app/components/ui/form/field';
import { useUserInfoForm, UserInfoProps } from './useUserInfoForm';
import { useTranslation } from 'react-i18next';

// Define the specific types for the field names
type FieldName = 'email' | 'name' | 'mobile' | 'password';

export default function UserInfo({ onNext, onPhoneChange }: UserInfoProps) {
	const { t } = useTranslation();
	const { formStore, onSubmit } = useUserInfoForm({ onNext, onPhoneChange });

	const inputData = [
		{ name: 'email', label: t('email') },
		{ name: 'admin_name', label: t('name') },
		{ name: 'mobile', label: t('phone') },
		{ name: 'password', label: 'password' },
	];
	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='grid grid-cols-1 gap-4'>
				{(inputData as { name: FieldName; label: string }[]).map((fieldName) => (
					<FormField
						key={fieldName}
						formStore={formStore}
						name={fieldName.name}
						render={(field) => (
							<Input
								{...field}
								id={fieldName}
								type={fieldName === 'password' ? 'password' : 'text'}
								placeholder={capitalize(fieldName.label)}
							/>
						)}
					/>
				))}
				<div className='flex justify-end'>
					<Button variant='primary' type='submit' text={t('Next')} />
				</div>
			</form>
		</Form>
	);
}

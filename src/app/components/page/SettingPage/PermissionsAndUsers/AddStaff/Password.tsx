import { UseFormReturn } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { addStaffInterface } from './HookForAddStaff';
import { useState } from 'react';
import PasswordToggleIcon from 'src/pages/AuthPage/_comp/PasswordToggleIcon';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';

export default function Password({ formStore }: { formStore: UseFormReturn<addStaffInterface> }) {
	//  hooks
	const { t } = useTranslation();
	const [showPassword, setShowPassword] = useState(false);
	const handlePassword = () => {
		setShowPassword(!showPassword);
	};

	return (
		<div className='global-cards gap-[1.2rem]'>
			<h3 className='title'>{t('Password')}</h3>
			<div className='flex w-full gap-4'>
				<div className='flex-grow'>
				<FormField
					formStore={formStore}
					name='password'
					render={(field) => (
						<div className='relative'>
							<Input
								{...field}
								type={showPassword ? 'text' : 'password'}
								placeholder={t('Password')}
							/>
							<PasswordToggleIcon toggle={handlePassword} isVisible={showPassword} />
						</div>
					)}
				/>
				</div>
			
				<div className='flex-grow'>
				<FormField
					formStore={formStore}
					name='password_confirmation'
					render={(field) => (
						<div className='relative'>
							<Input
								{...field}
								type={showPassword ? 'text' : 'password'}
								placeholder={t('Confirm Password')}
							/>
							<PasswordToggleIcon toggle={handlePassword} isVisible={showPassword} />
						</div>
					)}
				/>
				</div>
			</div>
		</div>
	);
}

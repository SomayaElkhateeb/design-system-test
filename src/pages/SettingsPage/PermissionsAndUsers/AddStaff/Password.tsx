import { UseFormReturn } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { addStaffInterface } from './HookForAddStaff';
import { useCallback, useState } from 'react';
import PasswordToggleIcon from 'src/pages/AuthPage/_comp/PasswordToggleIcon';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';
import useResponsive from 'src/app/utils/hooks/useResponsive';
type PasswordField = 'password' | 'password_confirmation';

export default function Password({ formStore }: { formStore: UseFormReturn<addStaffInterface> }) {
	const [isVisible, setIsVisible] = useState({
		password: false,
		password_confirmation: false,
	});
	const toggleVisibility = useCallback((field: PasswordField) => {
		setIsVisible((prev) => ({
			...prev,
			[field]: !prev[field],
		}));
	}, []);
	//  hooks
	const { t } = useTranslation();
	const [showPassword, setShowPassword] = useState(false);
	const { xs } = useResponsive();

	const handlePassword = () => {
		setShowPassword(!showPassword);
	};

	const fields: { name: PasswordField; placeholder: string }[] = [
		{ name: 'password', placeholder: t('password') },
		{ name: 'password_confirmation', placeholder: t('Confirm password') },
	];
	return (
		<div className='global-cards gap-[1.2rem]'>
			<h3 className='title'>{t('Password')}</h3>
			<div className={`w-full ${xs ? 'flex-col-global' : 'flex gap-4'}`}>

				<div className='flex-grow'>
					{/* <FormField
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
				/> */}
					{fields.map(({ name, placeholder }) => (
						<FormField
							key={name}
							formStore={formStore}
							name={name}
							render={(field) => (
								<div className='relative'>
									<Input
										{...field}
										type={isVisible[name] ? 'text' : 'password'}
										placeholder={placeholder}
									/>
									<PasswordToggleIcon
										toggle={() => toggleVisibility(name)}
										isVisible={isVisible[name]}
									/>
								</div>
							)}
						/>
					))}
				</div>

				{/* <div className='flex-grow'>
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
				</div> */}
			</div>
		</div>
	);
}

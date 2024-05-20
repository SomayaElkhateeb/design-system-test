import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useForm } from 'src/app/utils/hooks/form';
import { Form } from 'src/app/components/ui/form';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';
import SingleChoiceChips from 'src/app/components/optimized/ChoiceChips/SingleChoiceChips';
import AppliesOption from './Comp/AppliesOption';
import Rates from './Comp/Rates';
import { useNavigate } from 'react-router-dom';
import { HeaderSettings } from 'src/app/components/optimized';
import useCustomHookSetupInfo, { ISetupInfo } from './HookForSetupInfo';

export default function SetupInfo({ gap, rates }: { gap: boolean; rates: boolean }) {
	// hook
	const navigate = useNavigate();
	const { t } = useTranslation();
	const [selectedOption, setSelectedOption] = useState<string>('');
	// custom hook
	const { handelDefaultValue, SetupInfoSchema } = useCustomHookSetupInfo();
	const options = [t('All products'), t('Specific products')];

	const handleSubmit = (values: ISetupInfo) => {
		console.log(values);
	};

	const { formStore, onSubmit } = useForm({
		schema: SetupInfoSchema,
		handleSubmit: handleSubmit,
		defaultValues: handelDefaultValue(),
	});

	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='flex flex-col gap-5'>
				{/* <HeaderSettings
					variant='settingTwoBtns'
					title={t('SMSA')}
					btn1={{
						text: t('Discard'),
						onClick: () => {
							navigate(-1);
						},
					}}
					btn2={{
						text: t('Save Changes'),
						onClick: () => {},
					}}
				/> */}
				<div className='global-cards w-full  gap-4'>
					<h3 className='title'>{t('Setup info')}</h3>
					<div className='w-[50%]'>
						<FormField
							formStore={formStore}
							name='apiKey'
							label={t('Api Key')}
							render={(field) => <Input {...field} />}
						/>
						<p className='text-xs text-subtitle'>{t('You can copy it from you SMSA dashboard')}</p>
					</div>
					<div className='w-[50%]'>
						<FormField
							formStore={formStore}
							name='name'
							label={t('Name on checkout')}
							render={(field) => <Input {...field} placeholder={t('SMSA shipping')} />}
						/>
					</div>
					<section>
						<h5 className='text-sm text-pri-dark font-semibold pb-2'>{t('Applies to')}</h5>
						<SingleChoiceChips
							options={options}
							selected={selectedOption}
							setSelected={(option: string) => setSelectedOption(option)}
						/>
						<AppliesOption applyTo={selectedOption} />
					</section>
					{rates && gap === false ? <Rates addStyle={false} /> : ''}
				</div>
				<div>{rates && gap ? <Rates addStyle={true} /> : ''}</div>
			</form>
		</Form>
	);
}

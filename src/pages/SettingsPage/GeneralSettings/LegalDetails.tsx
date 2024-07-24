import { useTranslation } from 'react-i18next';
import { generalSettingsInterface } from './HookForGeneralForm';
import { UseFormReturn } from 'react-hook-form';
import FormField from 'src/app/components/ui/form/field';
import FileInput from 'src/app/components/ui/file-input';
import { TfiUpload } from 'react-icons/tfi';

import { Input } from 'src/app/components/ui/input';

import SingleChoiceChips from 'src/app/components/optimized/ChoiceChips/SingleChoiceChips';
import ImageInput from 'src/app/components/ui/form/ImageInput';

const LegalDetails = ({
	formStore,
	state,
	setState,
}: {
	state: string;
	setState: (e: string) => void;
	formStore: UseFormReturn<generalSettingsInterface>;
}) => {
	//  hooks
	const { t } = useTranslation();

	const onImageSubmit = (file: File): void => {
		formStore.setValue('CommercialRegistrationImage', file);
	};
	const onImageSubmitNationalID = (file: File): void => {
		formStore.setValue('NationalIDImage', file);
	};
	return (
		<section className='global-cards '>
			<h3 className='title'>{t('Legal details')}</h3>
			<div className='flex-col-global gap-[1rem]'>
				<div className='flex-row-global gap-[1.8rem]'>
					<SingleChoiceChips
						options={['individual', 'Business']}
						selected={state}
						setSelected={(option: string) => setState(option)}
					/>
				</div>

				<FormField
					formStore={formStore}
					name='NationalID'
					label={t('National ID')}
					render={(field) => <Input {...field} placeholder={'1111111'} />}
				/>

				{state === 'Business' && (
					<div className='flex-col-global gap-[1rem]'>
						<FormField
							formStore={formStore}
							name='CommercialRegistrationNo'
							label={t('Commercial Registration No')}
							render={(field) => <Input {...field} placeholder={'1111111'} />}
						/>

						<ImageInput<generalSettingsInterface>
							name={'CommercialRegistrationImage'}
							formStore={formStore}
						>
							<TfiUpload className='text-[1.5rem]' />
							<p className='paragraph text-center'>{t('UploadImage')}</p>
						</ImageInput>
					</div>
				)}

				{state === 'individual' && (
					<ImageInput<generalSettingsInterface> name={'NationalIDImage'} formStore={formStore}>
						<TfiUpload className='text-[1.5rem]' />
						<p className='paragraph text-center'>{t('UploadImage')}</p>
					</ImageInput>
				)}
			</div>
		</section>
	);
};

export default LegalDetails;

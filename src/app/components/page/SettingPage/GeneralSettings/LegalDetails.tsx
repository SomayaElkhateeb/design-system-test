import { useTranslation } from 'react-i18next';
import { generalSettingsInterface } from './GeneralSettings';
import { UseFormReturn } from 'react-hook-form';
import FormField from 'src/app/components/ui/form/field';
import FileInput, { getDefaultFileInputOptions } from 'src/app/components/ui/file-input';
import { TfiUpload } from 'react-icons/tfi';
import { fileClassName } from './Media';
import { Input } from 'src/app/components/ui/input';
import { Button } from 'src/app/components/optimized';
import SingleChoiceChips from 'src/app/components/optimized/ChoiceChips/SingleChoiceChips';

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

	
	

	return (
		<section className='serviceDetails-sharedClass flex-col-top-section-pages p-[1.2rem] md:w-[70%] '>
			<h3 className='title'>{t('Legal details')}</h3>
			<div className='flex-col-top-section-pages gap-[1rem]'>
				<div className='flex-row-global gap-[1.8rem]'>
					<SingleChoiceChips
						options={[t('individual'), t('Business')]}
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
					<div className='flex-col-top-section-pages gap-[1rem]'>
						<FormField
							formStore={formStore}
							name='CommercialRegistrationNo'
							label={t('Commercial Registration No')}
							render={(field) => <Input {...field} placeholder={'1111111'} />}
						/>
						<FormField
							label={t('Commercial Registration Image')}
							formStore={formStore}
							name='CommercialRegistrationImage'
							render={({ onChange, value, ...field }) => (
								<FileInput
									className={fileClassName}
									{...field}
									options={getDefaultFileInputOptions({
										accept: { 'image/*': [] },
										setError: (error) => {
											// console.log('error', error);
											formStore.setError('CommercialRegistrationImage', { message: error.message });
										},
										onFileLoad: (params) => {
											// console.log('params', params);
											onChange(params.file);
										},
									})}
								>
									<TfiUpload className='text-[1.5rem]' />
									<p>{t('UploadImage')}</p>
								</FileInput>
							)}
						/>
					</div>
				)}

				{state === 'individual' && (
					<FormField
						label={t('National ID Image')}
						formStore={formStore}
						name='NationalIDImage'
						render={({ onChange, value, ...field }) => (
							<FileInput
								className={fileClassName}
								{...field}
								options={getDefaultFileInputOptions({
									accept: { 'image/*': [] },
									setError: (error) => {
										// console.log('error', error);
										formStore.setError('NationalIDImage', { message: error.message });
									},
									onFileLoad: (params) => {
										// console.log('params', params);
										onChange(params.file);
									},
								})}
							>
								<TfiUpload className='text-[1.5rem]' />
								<p>{t('UploadImage')}</p>
							</FileInput>
						)}
					/>
				)}
			</div>
		</section>
	);
};

export default LegalDetails;

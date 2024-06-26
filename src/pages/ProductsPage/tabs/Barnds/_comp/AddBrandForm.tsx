import { GlobalDialog } from 'src/app/components/shared';
import { Form } from 'src/app/components/ui/form';
import { useForm } from 'src/app/utils/hooks/form';
import { useTranslation } from 'react-i18next';
import Tabs from 'src/app/components/optimized/Tabs/Tabs';
import TabPanel from '@mui/lab/TabPanel';
import { Tab } from '@mui/material';
import { Button } from 'src/app/components/optimized';
import SpecificAutoCompleteInput from 'src/app/components/ui/SpecificAutoCompleteInput';
import TabbedFormField from 'src/app/components/ui/form/tabbed-field';
import { Input } from 'src/app/components/ui/input';
import FormSwitchField from 'src/app/components/ui/form/FormSwitchField';
import FormField from 'src/app/components/ui/form/field';
import FileInput, { getDefaultFileInputOptions } from 'src/app/components/ui/file-input';
import { fileClassName } from 'src/app/components/page/SettingPage/GeneralSettings/GeneralSettingsMedia';
import { TfiUpload } from 'react-icons/tfi';
import { AddBrandSchemaValues, addBrandFormSchema } from '../_hook/AddbrandsFormSchema';

interface AddBrandFormProps {
	openDialog: boolean;
	handleClose: () => void;
	handleBrandSubmit?: (values: AddBrandSchemaValues) => void;
}

export default function AddBrandForm({
	openDialog,
	handleClose,
	handleBrandSubmit,
}: AddBrandFormProps) {
	const { t } = useTranslation();

	const { formStore, onSubmit } = useForm({
		schema: addBrandFormSchema,
		handleSubmit: (values: AddBrandSchemaValues) => {
			if (handleBrandSubmit) {
				handleBrandSubmit(values);
			}
		},
		defaultValues: {
			brandNameEn: '',
			brandNameAr: '',
			brandDescribtionEn: '',
			brandDescribtionAr: '',
			brandLinkEn: '',
			brandLinkAr: '',
			image: undefined,
			available: false,
			products: [],
		},
	});

	const style = {
		height: { md: '35.8rem', xs: '27.5rem' },
		width: { md: '40rem', xs: '25.8rem' },
	};

	return (
		<GlobalDialog style={style} openDialog={openDialog} handleClose={handleClose}>
			<Form {...formStore}>
				<form onSubmit={onSubmit} className='flex-col-global'>
					<Tabs
						body={
							<>
								<TabPanel value='1'>
									<div className='flex md:flex-row items-start flex-col gap-[2rem]'>
										<FormField
											formStore={formStore}
											name='image'
											render={({ onChange, value, ...field }) => (
												<FileInput
													className={fileClassName}
													{...field}
													options={getDefaultFileInputOptions({
														accept: { 'image/*': [] },
														setError: (error) => {
															formStore.setError('image', { message: error.message });
														},
														onFileLoad: (params) => {
															onChange(params.file);
														},
													})}
												>
													<TfiUpload className='text-[1.5rem]' />
													<p>{t('Brand logo')}</p>
												</FileInput>
											)}
										/>
										<div className='flex-col-global md:w-[80%] w-full'>
											<TabbedFormField
												formStore={formStore}
												keys={[
													{ name: 'brandNameEn', label: 'En' },
													{ name: 'brandNameAr', label: 'عربي' },
												]}
												label={t('Brand name')}
												renderer={(field) => <Input {...field} />}
											/>
											<TabbedFormField
												formStore={formStore}
												keys={[
													{ name: 'brandLinkEn', label: 'En' },
													{ name: 'brandLinkAr', label: 'عربي' },
												]}
												label={t('Brand link (Slug)')}
												renderer={(field) => <Input {...field} />}
											/>
											<TabbedFormField
												formStore={formStore}
												keys={[
													{ name: 'brandDescribtionEn', label: 'En' },
													{ name: 'brandDescribtionAr', label: 'عربي' },
												]}
												label={t('Brand description')}
												renderer={(field) => <Input {...field} />}
											/>
											<div className='flex-col-global gap-2'>
												<p>{t('Availability')}</p>
												<div className='flex-row-global gap-2'>
													<FormSwitchField<AddBrandSchemaValues>
														formStore={formStore}
														name='available'
														enable
													/>
													<p>{formStore.watch('available') ? 'On' : 'Off'}</p>
												</div>
											</div>
										</div>
									</div>
								</TabPanel>
								<TabPanel value='2'>
									<SpecificAutoCompleteInput<AddBrandSchemaValues>
										label={t('Products')}
										name='products'
										formStore={formStore}
									/>
								</TabPanel>
							</>
						}
					>
						<Tab label={t('General Info')} value='1' />
						<Tab label={t('Products')} value='2' />
					</Tabs>
					<div className='flex justify-end items-center gap-4'>
						<Button onClick={handleClose} variant='tertiary'>
							{t('cancel')}
						</Button>
						<Button onClick={onSubmit} variant='primary'>
							{t('Save')}
						</Button>
					</div>
				</form>
			</Form>
		</GlobalDialog>
	);
}

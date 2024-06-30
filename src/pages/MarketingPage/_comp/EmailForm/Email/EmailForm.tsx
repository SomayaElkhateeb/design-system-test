import { useState } from 'react';
import { Button, SubHeader } from 'src/app/components/optimized';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import EmailContent from './_comp/EmailContent';
import EmailOptions from './_comp/EmailOptions';
import useCustomHookEmailForm, { IEmailForm } from './_comp/HookEmailForm';
import { useForm } from 'src/app/utils/hooks/form';
import { Form } from 'src/app/components/ui/form';

function EmailForm() {
	const { t } = useTranslation();
	const [_, setSearchParams] = useSearchParams();
	const { handelDefaultValue, emailFormSchema } = useCustomHookEmailForm();
	const handleSubmit = (values: IEmailForm) => {
		console.log(values);
	};
	const { formStore, onSubmit } = useForm({
		schema: emailFormSchema(),
		handleSubmit: handleSubmit,
		defaultValues: handelDefaultValue(),
	});

	// const handleSubmitEmail = () => {
	// 	setSearchParams({ subscribe: 'active' });
	// 	onSubmit();
	// };

	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit}>
				<SubHeader title={t('Email Form')}>
					<Button variant='primary' onClick={onSubmit}>
						{t('submit emails')}
					</Button>
				</SubHeader>

				<section className='custom_container custom-grid-parent gap-32 py-5'>
					<div className='grid-left'>
						<EmailContent formStore={formStore} />
					</div>
					<div className='grid-right'>
						<EmailOptions />
					</div>
				</section>
			</form>
		</Form>
	);
}

export default EmailForm;

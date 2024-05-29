import { z } from 'zod';
import { useTranslation } from 'react-i18next';
import { useForm } from 'src/app/utils/hooks/form';
import { Button } from 'src/app/components/optimized';
import { Form } from 'src/app/components/ui/form';
import FormField from 'src/app/components/ui/form/field';
import Textarea from 'src/app/components/optimized/InputsFields/Textarea';

export interface INoteForm {
	note: string;
}

export default function CustomerNoteForm({ onClose }: { onClose: () => void }) {
	const { t } = useTranslation();
	const noteSchema = {
		note: z.string().min(5, { message: 'Customer note is required' }),
	};

	const handelDefaultValue = () => {
		return {
			note: '',
		};
	};

	const handleSubmit = (values: INoteForm) => {
		console.log(values);
	};

	const { formStore, onSubmit } = useForm({
		schema: noteSchema,
		handleSubmit: handleSubmit,
		defaultValues: handelDefaultValue(),
	});
	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='flex-col-top-section-pages gap-3 p-3'>
				<div className='lg:w-[65%] w-full'>
					<FormField
						formStore={formStore}
						name='note'
						label={t('Customer note')}
						render={(field) => <Textarea {...field} placeholder={'Type a note'} />}
					/>
				</div>
				<div className='flex-row-global justify-end  gap-4'>
					<Button onClick={onClose} variant='secondary'>
						{t('Discard')}
					</Button>
					<Button onClick={onSubmit} variant='primary'>
						{t('Save')}
					</Button>
				</div>
			</form>
		</Form>
	);
}

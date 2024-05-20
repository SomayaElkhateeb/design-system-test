import { useTranslation } from 'react-i18next';
import { useForm } from 'src/app/utils/hooks/form';
import { Form } from 'src/app/components/ui/form';
import TextFields from './TextFields';
import { Button } from 'src/app/components/optimized';
import AppliesBasedOn from '../Rate/AppliesBasedOn';
import useCustomHookAddRate, { IAddRate } from './HookForAddRate';

export default function AddRate({ saudi, onClose }: { saudi?: boolean; onClose: () => void }) {
	// hook
	const { t } = useTranslation();
	//custom hook
	const { handelDefaultValue, rateSchema } = useCustomHookAddRate();
	const handleSubmit = (values: IAddRate) => {
		console.log(values);
	};

	const { formStore, onSubmit } = useForm({
		schema: rateSchema,
		handleSubmit: handleSubmit,
		defaultValues: handelDefaultValue(),
	});

	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit}>
				<div className='fixed inset-0 z-50 items-center justify-center flex'>
					{/* Overlay */}
					<div className='fixed inset-0 bg-black opacity-50' onClick={onClose}></div>
					<div className='lg:w-[50%] md:w-[80%] relative cardDetails-sharedClass p-5 '>
						<h2 className='text-title font-semibold pb-5'>{t('Add rate')}</h2>
						<TextFields formStore={formStore} saudi={saudi} />
						<AppliesBasedOn formStore={formStore} />

						<div className='flex items-center justify-end pt-5 gap-5'>
							<Button variant='tertiary' onClick={onClose}>
								{t('cancel')}
							</Button>
							<Button variant='primary' onClick={onSubmit}>
								{t('add')}
							</Button>
						</div>
					</div>
				</div>
			</form>
		</Form>
	);
}

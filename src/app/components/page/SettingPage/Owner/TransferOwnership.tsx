import { z } from 'zod';
import { useForm } from 'src/app/utils/hooks/form';
import { Form } from 'src/app/components/ui/form';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { HeaderSettings } from 'src/app/components/optimized';
import NewOwner from './NewOwner';

export interface addOwnerInterface {
	name: string;
	email: string;
	password: string;
}

const ownerSchema = {
	name: z.string().min(5, { message: 'Full name is required' }),
	email: z.string().min(1, { message: 'Stuff email is required' }).email(),
	password: z.string().min(8, { message: 'Password must be at least 8 characters long' }),
	//   password: z.string().min(8, { message: 'Password must be at least 8 characters long' }).regex(/.*[!@#$%&^()-+{}|[|]\\:";'<>?,./].*/, { message: 'Password should contain at least 1 special character' })
};

export default function TransferOwnership() {
	const { t } = useTranslation();
	const navigate = useNavigate();

	const handleSubmit = (values: addOwnerInterface) => {
		console.log(values);
	};
	const handelDefaultValue = () => {
		return {
			name: '',
			email: '',
			password: '',
		};
	};

	const { formStore, onSubmit } = useForm({
		schema: ownerSchema,
		handleSubmit: handleSubmit,
		defaultValues: handelDefaultValue(),
	});

	return (
		<>
			<Form {...formStore}>
				<form onSubmit={onSubmit}>
					<HeaderSettings
						variant='settingTwoBtns'
						submit
						title={t('Transfer ownership')}
						btn1={{
							text: t('Discard'),
							onClick: () => {
								navigate(-1);
							},
						}}
						btn2={{
							text: t('Transfer ownership'),
							onClick: () => {},
						}}
					/>
					<div className='p-4  w-3/4 '>
						<NewOwner formStore={formStore} />
					</div>
				</form>
			</Form>
		</>
	);
}

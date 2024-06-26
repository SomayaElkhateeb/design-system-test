import { z } from 'zod';
import { useForm } from 'src/app/utils/hooks/form';
import { Form } from 'src/app/components/ui/form';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SubHeader } from 'src/app/components/optimized';
import NewOwner from './NewOwner';
import useResponsive from 'src/app/utils/hooks/useResponsive';
import {
	SubHeaderDefaultBtns,
	SubHeaderMobileBtns,
} from 'src/app/components/optimized/UiKits/SubHeaderActionBtns';

export interface addOwnerInterface {
	name: string;
	email: string;
	password: string;
}

const ownerSchema = {
	name: z.string().min(5, { message: 'Full name is required' }),
	email: z.string().min(1, { message: 'Stuff email is required' }).email(),
	password: z.string().min(8, { message: 'Password must be at least 8 characters long' }),
};

export default function TransferOwnership() {
	//  hooks
	const { t } = useTranslation();

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
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='flex-col-global gap-5 h-screen'>
				<SubHeader title={t('Transfer Ownership')}>
					<SubHeaderDefaultBtns onSubmit={onSubmit} />
				</SubHeader>
				<div className='custom-grid-parent'>
					<div className='custom_container flex flex-col gap-5 grid-left'>
						<NewOwner formStore={formStore} />
						<SubHeaderMobileBtns onSubmit={onSubmit} />
					</div>
				</div>
			</form>
		</Form>
	);
}

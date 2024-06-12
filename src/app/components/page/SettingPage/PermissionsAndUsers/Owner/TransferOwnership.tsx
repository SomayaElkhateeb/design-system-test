import { z } from 'zod';
import { useForm } from 'src/app/utils/hooks/form';
import { Form } from 'src/app/components/ui/form';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SubHeader, Button } from 'src/app/components/optimized';
import NewOwner from './NewOwner';
import { RxDotsHorizontal } from 'react-icons/rx';
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
	const navigate = useNavigate();
	const { xs } = useResponsive();

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
				<form onSubmit={onSubmit} className='flex-col-global gap-3'>
					<SubHeader title={t('Transfer Ownership')}>
						<SubHeaderDefaultBtns onSubmit={onSubmit} />
					</SubHeader>
					<div className='custom_container '>
						<NewOwner formStore={formStore} />
					</div>
					<SubHeaderMobileBtns onSubmit={onSubmit} />
				</form>
			</Form>
		</>
	);
}

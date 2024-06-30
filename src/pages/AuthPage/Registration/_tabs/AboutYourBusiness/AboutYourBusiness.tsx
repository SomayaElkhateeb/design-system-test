import { Link } from 'react-router-dom';
import { UseFormReturn } from 'react-hook-form';
import { Form } from 'src/app/components/ui/form';
import { Input } from 'src/app/components/ui/input';
import FormField from 'src/app/components/ui/form/field';
import { Button, CheckBox } from 'src/app/components/optimized';
import useAboutYourBusiness, { AboutYourBusinessInterface } from './useAboutYourBusiness';
import SelectFormField from '../../_comp/SelectFormField';

export default function AboutYourBusiness({ onFinish }: { onFinish: () => void }) {
	const { formStore, onSubmit, industryOptions } = useAboutYourBusiness({onFinish});

	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='grid grid-cols-1 gap-4'>
				<FormField
					formStore={formStore}
					name='storeName'
					render={(field) => (
						<Input {...field} id='storeName' type='text' placeholder='Store name' />
					)}
				/>
				<FormField
					formStore={formStore}
					name='storeLink'
					render={(field) => (
						<div className='flex mt-1'>
							<Input
								{...field}
								id='storeLink'
								type='text'
								placeholder='Store link (in English)'
								className='flex-grow'
							/>
							<span className='inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm'>
								.dookan.net
							</span>
						</div>
					)}
				/>
				<SelectFormField formStore={formStore} name='industry' options={industryOptions} />
				<AgreementTerms formStore={formStore} />
				<div className='flex justify-end'>
					<Button variant='primary' type='submit' text='Create Store' className='w-36' />
				</div>
			</form>
		</Form>
	);
}

interface AgreementCheckboxProps {
	formStore: UseFormReturn<AboutYourBusinessInterface>;
}

function AgreementTerms({ formStore }: AgreementCheckboxProps) {
	return (
		<label className='flex gap-2 items-start'>
			<CheckBox
				label={
					<span className='paragraph text-subtitle'>
						I agree to&nbsp;
						<Link to='' className='text-primary'>
							Terms and Conditions
						</Link>
						,&nbsp;
						<Link to='' className='text-primary'>
							Privacy Policy
						</Link>
						&nbsp; and &nbsp;
						<Link to='' className='text-primary'>
							Selling policy
						</Link>
					</span>
				}
				checked={formStore.watch('agreementTerms')}
				handleOnChange={(option) => {
					formStore.setValue('agreementTerms', option);
				}}
			/>
		</label>
	);
}

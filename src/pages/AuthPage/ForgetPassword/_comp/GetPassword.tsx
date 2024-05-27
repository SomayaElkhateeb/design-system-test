import { FC } from 'react';
import { Button } from 'src/app/components/optimized';
import { getImageUrl } from 'src/app/utils';
import { Form } from 'src/app/components/ui/form';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';
import { useForm } from 'src/app/utils/hooks/form';
import { z, ZodObject, ZodRawShape } from 'zod';

interface GetPasswordProps {
	setIsCodeSent: (isCodeSent: boolean) => void;
	setUsePhone: (usePhone: boolean | ((prev: boolean) => boolean)) => void;
	usePhone: boolean;
}

const getPasswordSchema: ZodObject<ZodRawShape> = z.object({
	contact: z.string().min(3, 'This field is required'),
});

type GetPasswordSchemaType = z.infer<typeof getPasswordSchema>;

const GetPassword: FC<GetPasswordProps> = ({ setIsCodeSent, setUsePhone, usePhone }) => {
	const { formStore, onSubmit } = useForm<GetPasswordSchemaType>({
		schema: getPasswordSchema.shape,
		handleSubmit: (validatedData) => {
			console.log(validatedData);
			setIsCodeSent(true);
		},
		defaultValues: { contact: '' },
	});

	const handleToggle = () => {
		setUsePhone((prev) => !prev);
	};

	return (
		<section className='flex justify-between w-full items-center'>
			<div className='w-2/6'>
				<div className='w-full max-w-sm bg-white p-8 rounded-md shadow-md'>
					<h2 className='mb-6 text-2xl font-semibold text-gray-800'>Forgot password</h2>
					<Form {...formStore}>
						<form onSubmit={onSubmit}>
							<div className='mb-4'>
								<FormField
									container={{ className: 'mb-4' }}
									formStore={formStore}
									name='contact'
									render={(field) => (
										<Input
											{...field}
											id={usePhone ? 'phone' : 'email'}
											type={usePhone ? 'tel' : 'email'}
											placeholder={usePhone ? 'Phone Number' : 'Email Address'}
											autoComplete={usePhone ? 'tel' : 'email'}
										/>
									)}
								/>
							</div>
							<div className='flex items-center justify-end'>
								<Button type='submit' variant='primary'>
									Send Code
								</Button>
							</div>
						</form>
					</Form>
					<div className='mt-4 text-center'>
						<p className='text-sm text-gray-600'>
							No access to your {usePhone ? 'phone' : 'email'}?{' '}
							<button
								onClick={handleToggle}
								className='text-blue-600 hover:underline focus:outline-none'
							>
								Use your {usePhone ? 'email' : 'phone'}
							</button>
						</p>
					</div>
				</div>
			</div>
			<div className='w-3/6 flex justify-center'>
				<img src={getImageUrl('images/register_2.svg')} alt='Forgot password illustration' />
			</div>
		</section>
	);
};

export default GetPassword;

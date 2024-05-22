import { Button } from 'src/app/components/optimized';
import { getImageUrl } from 'src/app/utils';

const StepOne = ({ onNext }) => {
	return (
		<section className='flex justify-between w-full items-center'>
			<div className='w-2/6'>
				<RegistrationForm onNext={onNext} />
			</div>
			<div className='w-3/6'>
				<img src={getImageUrl('images/register_2.svg')} alt='' />;
			</div>
		</section>
	);
};

export default StepOne;

const RegistrationForm = ({ onNext }) => {
	return (
		<div className='flex justify-center items-center '>
			<form className='bg-white  rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg'>
				<div className='mb-4'>
					<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
						Email Address
					</label>
					<input
						className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						id='email'
						type='email'
						placeholder='Email Address'
					/>
				</div>
				<div className='mb-4'>
					<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
						Name
					</label>
					<input
						className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						id='name'
						type='text'
						placeholder='Ahmed Mohamed Mahmoud'
					/>
				</div>
				<div className='mb-4'>
					<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='phone'>
						Phone number
					</label>
					<input
						className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						id='phone'
						type='tel'
						placeholder='Phone number'
					/>
				</div>
				<div className='mb-4'>
					<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
						Password
					</label>
					<div className='relative'>
						<input
							className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							id='password'
							type='password'
							placeholder='Password'
						/>
						<div className='absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5'>
							<svg
								className='h-5 text-gray-500'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M15 12l-3 3m0 0l-3-3m3 3V9m3 3a9 9 0 11-18 0 9 9 0 0118 0z'
								/>
							</svg>
						</div>
					</div>
				</div>
				<div className='flex  items-center justify-end'>
					<Button variant='primary' type='button' onClick={() => onNext()}>
						Next
					</Button>
				</div>
			</form>
		</div>
	);
};

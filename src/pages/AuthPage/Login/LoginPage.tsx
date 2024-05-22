import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Button } from 'src/app/components/optimized';
import { getImageUrl } from 'src/app/utils';
import { FaChevronLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const LoginPage = () => {
	const [step, setStep] = useState(1);

	const SignInUsername = () => {
		return (
			<div className='flex items-center justify-center bg-gray-100'>
				<div className='w-full'>
					<form className='bg-white rounded px-8 pt-6 pb-8 mb-4'>
						<div className='mb-4'>
							<label
								className='block text-gray-700 text-sm font-semibold mb-2'
								htmlFor='emailOrPhone'
							>
								Email or phone
							</label>
							<input
								className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
								id='emailOrPhone'
								type='text'
								placeholder='Email or phone'
							/>
						</div>
						<div className='flex items-center justify-end mb-4'>
							<a
								className='inline-block align-baseline font-semibold text-primary text-sm text-blue-500 hover:text-blue-800'
								href='#'
							>
								Forgot Password?
							</a>
						</div>
						<div className='flex items-center justify-end'>
							<Button variant='primary' type='button' onClick={() => setStep(2)}>
								Next
							</Button>
						</div>
						<div className='text-center mt-4'>
							<p className='text-gray-600 text-sm'>
								Don’t have an account?{' '}
								<Link
									to='/auth/register'
									className='font-semibold text-blue-500 hover:text-blue-800 text-primary'
								>
									Sign up
								</Link>
							</p>
						</div>
					</form>
				</div>
			</div>
		);
	};

	const SignInPassword = () => {
		const [passwordVisible, setPasswordVisible] = useState(false);

		const togglePasswordVisibility = () => {
			setPasswordVisible(!passwordVisible);
		};

		return (
			<div className='flex items-center justify-center bg-gray-100'>
				<div className='w-full'>
					<form className='bg-white rounded px-8 pt-6 pb-8 mb-4'>
						<div className='mb-4 text-primary flex space-x-1 items-center'>
							<FaChevronLeft />

							<a href='#' className='text-blue-500 text-sm'>
								Ahmed@gmail.com
							</a>
						</div>
						<div className='mb-4'>
							<h2 className='text-2xl font-semibold text-gray-700'>Sign in</h2>
						</div>
						<div className='mb-4 relative'>
							<label className='block text-gray-700 text-sm font-semibold mb-2' htmlFor='password'>
								Password
							</label>
							<div className='relative'>
								<input
									className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
									id='password'
									type={passwordVisible ? 'text' : 'password'}
									placeholder='Password'
								/>
								<button
									type='button'
									className='absolute inset-y-0 right-0 pr-3 flex items-center text-gray-700'
									onClick={togglePasswordVisibility}
								>
									{passwordVisible ? <FaEyeSlash /> : <FaEye />}
								</button>
							</div>
						</div>
						<div className='flex items-center justify-between mb-4'>
							<a
								className='inline-block align-baseline font-semibold text-sm text-blue-500 hover:text-blue-800'
								href='#'
							>
								Forgot Password?
							</a>
						</div>
						<div className='flex items-center justify-between'>
							<button
								className='bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
								type='button'
							>
								Sign In
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	};

	return (
		<section className='bg-white h-screen w-full flex justify-center'>
			<div className='flex justify-between items-center w-4/5'>
				<div className='w-2/6'>{step === 1 ? <SignInUsername /> : <SignInPassword />}</div>
				<div className='w-3/6'>
					<img src={getImageUrl('images/register_3.svg')} alt='' />
				</div>
			</div>
		</section>
	);
};

export default LoginPage;

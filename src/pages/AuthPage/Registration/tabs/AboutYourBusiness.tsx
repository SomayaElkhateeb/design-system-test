import React, { useState } from 'react';
import { getImageUrl } from 'src/app/utils';

const AboutYourBusiness = () => {
	return (
		<section className='flex  justify-between items-center'>
			<div>{CreateStoreForm()}</div>
			<div className='w-3/6'>
				<img src={getImageUrl('images/register_2.svg')} alt='' />;
			</div>
		</section>
	);
};

export default AboutYourBusiness;

const CreateStoreForm = () => {
	const [storeName, setStoreName] = useState('');
	const [storeLink, setStoreLink] = useState('');
	const [industry, setIndustry] = useState('Select industry');
	const [agreed, setAgreed] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission logic here
	};

	return (
		<form onSubmit={handleSubmit} className='max-w-md mx-auto p-4 bg-white rounded-md'>
			<div className='mb-4'>
				{/* <label htmlFor='storeName' className='block text-sm font-medium text-gray-700'>
					Store name
				</label> */}
				<input
					placeholder='Store name'
					type='text'
					id='storeName'
					className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
					value={storeName}
					onChange={(e) => setStoreName(e.target.value)}
					required
				/>
			</div>

			<div className='mb-4'>
				{/* <label htmlFor='storeLink' className='block text-sm font-medium text-gray-700'>
					Store link (in English)
				</label> */}
				<div className='flex mt-1'>
					<input
						placeholder='Store link (in English)'
						type='text'
						id='storeLink'
						className='flex-grow px-3 py-2 border border-gray-300 rounded-l-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
						value={storeLink}
						onChange={(e) => setStoreLink(e.target.value)}
						required
					/>
					<span className='inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm'>
						.dookan.net
					</span>
				</div>
			</div>

			<div className='mb-4'>
				{/* <label htmlFor='industry' className='block text-sm font-medium text-gray-700'>
					Select industry
				</label> */}
				<select
					id='industry'
					className='mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
					value={industry}
					onChange={(e) => setIndustry(e.target.value)}
					required
				>
					<option selected disabled className='text-gray-500'>
						Select industry
					</option>
					<option value='fashion'>Fashion</option>
					<option value='electronics'>Electronics</option>
					<option value='groceries'>Groceries</option>
				</select>
			</div>

			<div className='mb-4'>
				<label className='flex items-center'>
					<input
						type='checkbox'
						className='h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500'
						checked={agreed}
						onChange={(e) => setAgreed(e.target.checked)}
						required
					/>
					<span className='ml-2 text-sm text-gray-600'>
						I agree to{' '}
						<a href='#' className='text-indigo-600 hover:underline'>
							Terms and Conditions
						</a>
						,{' '}
						<a href='#' className='text-indigo-600 hover:underline'>
							Privacy Policy
						</a>
						, and{' '}
						<a href='#' className='text-indigo-600 hover:underline'>
							Selling policy
						</a>
					</span>
				</label>
			</div>

			<div>
				<button
					type='submit'
					className='w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
				>
					Create Store
				</button>
			</div>
		</form>
	);
};

// src/components/PackageSelector.jsx
import React, { useState } from 'react';
import '../../_comp/custom-radio.css';

const packages = [
	{ id: 1, emails: '20,000', price: 'SAR 50', selected: false },
	{ id: 2, emails: '50,000', price: 'SAR 50', selected: true },
];

const PackageSelector = () => {
	const [selectedPackage, setSelectedPackage] = useState(packages[1].id);

	const handlePackageSelect = (pkgId) => {
		setSelectedPackage(pkgId);
	};

	return (
		<div className='max-w-sm mx-auto shadow border p-6 rounded-lg text-black'>
			<h2 className='text-xl font-semibold mb-2'>Select package</h2>
			<p className='mb-4'>Choose one of our packages for more emails</p>
			<div className='flex flex-col space-y-4 mb-6'>
				{packages.map((pkg) => (
					<label
						key={pkg.id}
						className={`flex items-center p-4 border rounded-lg cursor-pointer ${
							selectedPackage === pkg.id ? 'bg-success text-white' : ''
						}`}
					>
						<input
							type='radio'
							name='subscription'
							value={pkg.id}
							checked={selectedPackage === pkg.id}
							onChange={() => handlePackageSelect(pkg.id)}
							className='form-radio h-5 w-5 text-green-500 :checked-bg-white'
						/>
						<div className='ml-3'>
							<span className='block text-md font-semibold'>{pkg.emails} emails/month</span>
							<span className='block text-md'>{pkg.price}</span>
						</div>
					</label>
				))}
			</div>
		</div>
	);
};

export default PackageSelector;

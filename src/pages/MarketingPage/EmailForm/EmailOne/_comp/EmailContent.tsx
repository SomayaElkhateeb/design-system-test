const EmailContent = ({ emailContent, setEmailContent }) => {
	const handleChange = (e) => {
		const { name, value } = e.target;
		setEmailContent((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	return (
		<div>
			<h2 className='text-xl font-bold mb-4'>Email Content</h2>
			<label className='block mb-4'>
				<span className='block text-sm font-medium text-gray-700'>To:</span>
				<input
					type='text'
					name='to'
					value={emailContent.to}
					onChange={handleChange}
					className='p-2 border mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
				/>
			</label>
			<label className='block mb-4'>
				<span className='block text-sm font-medium text-gray-700'>Subject:</span>
				<input
					type='text'
					name='subject'
					value={emailContent.subject}
					onChange={handleChange}
					className='p-2 border mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
				/>
			</label>
			<label className='block mb-4'>
				<span className='block text-sm font-medium text-gray-700'>From:</span>
				<input
					type='text'
					name='from'
					value={emailContent.from}
					onChange={handleChange}
					className='p-2 border mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
				/>
			</label>
			<label className='block mb-4'>
				<span className='block text-sm font-medium text-gray-700'>Body:</span>
				<textarea
					name='body'
					value={emailContent.body}
					onChange={handleChange}
					className='p-2 border mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
				/>
			</label>
		</div>
	);
};

export default EmailContent;

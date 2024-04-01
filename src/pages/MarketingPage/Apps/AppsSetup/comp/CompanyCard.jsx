import { Button } from 'src/app/components/optimized';

function CompanyCard({ imageUrl, subtitle, name, id }) {
	return (
		<div className='border-t  flex items-center justify-between'>
			<div className='py-3 overflow-hidden flex items-center'>
				<img className='size-12 object-cover' src={imageUrl} alt='' />
				<div className='p-4'>
					<div className='flex space-x-3 items-center'>
						<h5 className='text-md font-bold tracking-tight text-gray-900'>
							{name}
						</h5>
						<p className='text-sm text-gray-500'>{subtitle}</p>
					</div>
					<p>{id}</p>
				</div>
			</div>
			<Button text='Connect' />
		</div>
	);
}

export default CompanyCard;

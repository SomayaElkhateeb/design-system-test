import { Button } from 'src/app/components/optimized';

function PartnerCard({ imageUrl, subtitle, name, id }) {
	return (
		<div className='flex items-center justify-between border-t'>
			<div className='flex items-center py-3 overflow-hidden'>
				<img className='object-cover size-12' src={imageUrl} alt='' />
				<div className='p-4'>
					<div className='flex items-center space-x-3'>
						<h5 className='font-bold tracking-tight text-gray-900 text-md'>
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

export default PartnerCard;

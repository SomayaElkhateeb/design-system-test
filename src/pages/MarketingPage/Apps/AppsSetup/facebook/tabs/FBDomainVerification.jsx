import { Button } from 'src/app/components/optimized';

const FBDomainVerification = ({ data }) => {
	return (
		<div className='flex items-center justify-between'>
			<p>{data.description}</p>
			<div className='flex justify-end'>
				<Button>Verify domain</Button>
			</div>
		</div>
	);
};

export default FBDomainVerification;

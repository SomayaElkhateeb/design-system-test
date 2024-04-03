import { Button } from 'src/app/components/optimized';

/** @param {{ data: { description: string } }} props */
export default function GoConnectAccount(props) {
	return (
		<div className='flex items-center justify-between'>
			<p>{props.data.description}</p>

			<Button>Connect Account</Button>
		</div>
	);
}

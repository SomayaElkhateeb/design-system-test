import { Button } from 'src/app/components/optimized';

/** @param {{ data: { description: string } }} props */
export default function FBTerms(props) {
	return (
		<div>
			<p>{props.data.description}</p>
			<div className='flex justify-end space-x-3'>
				<Button variant='secondaryBtn'>Read Terms</Button>
				<Button>Accept anyway</Button>
			</div>
		</div>
	);
}

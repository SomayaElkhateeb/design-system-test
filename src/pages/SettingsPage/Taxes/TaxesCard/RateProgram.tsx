
import RateRow from './RateRow';
import ActionRow from './ActionRow';
import { Rate } from './useTaxPrograms';

interface RateProgramProps {
	rates: Rate[];
	program: string;
}

export default function RateProgram({ rates, program }: RateProgramProps) {

	return (
		<div className='grid gap-2'>
			<ActionRow general={program === 'General'} />
			<div className='divide-y'>
				{rates.map((rate, index) => (
					<RateRow key={index} rate={rate} />
				))}
			</div>
		</div>
	);
}

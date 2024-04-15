import { VerticalTabs } from 'src/app/components/optimized';
import { tabs } from '../data';

const Setups = () => {
	return (
		<div>
			<>
				<h2 className='text-title text-lg font-semibold'>Get ready for your first sale.</h2>
				<p className='text-title text-sm mb-4'>
					There are only 2 main steps to launch your store,
					<span className='btn-lin px-0 hover:bg-transparent cursor-pointer'>Follow our tips</span> to get started.
				</p>
			</>
			<VerticalTabs tabs={tabs} />
		</div>
	);
};

export default Setups;

import { Switch } from '../../ui/switch';

export default function QuickActions() {
	return (
		<div className='global-cards w-72'>
			<h3 className='text-title font-semibold'>Quick actions</h3>
			<div className='flex items-center gap-3'>
				<Switch /> <p>Quick actions</p>
			</div>

			<div className='flex items-center gap-3'>
				<Switch /> <p>Quick actions</p>
			</div>

			<div className='flex items-center gap-3'>
				<Switch /> <p>Quick actions</p>
			</div>
		</div>
	);
}

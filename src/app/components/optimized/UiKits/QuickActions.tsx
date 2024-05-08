import { Switch } from '../../ui/switch';

// Define the type for the data array
type Data = {
	id: number;
	title: string;
};

// Define the type for the props of the QuickActions component
type QuickActionsProps = {
	data: Data[];
};

// Define the QuickActions component with the specified props
export default function QuickActions({ data }: QuickActionsProps) {
	return (
		<div className='global-cards w-72'>
			<h3 className='text-title font-semibold'>Quick actions</h3>
			{data.map((item: Data) => {
				// Assuming Data is the correct type for each item
				return (
					<div className='flex items-center gap-3' key={item.id}>
						<Switch />
						<p>{item.title}</p>
					</div>
				);
			})}
		</div>
	);
}

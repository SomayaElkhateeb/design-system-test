import CheckMenuButton from 'src/app/components/optimized/Buttons/CheckMenuButton';
interface Option {
	name: string;
	socialApps: string[];
}

const category: Option[] = [
	{ name: 'Marketing', socialApps: ['Facebook', 'TikTok', 'Snapchat', 'Mailchimp', 'SendGrid'] },
	{ name: 'Sales', socialApps: ['WhatsApp', 'Telegram', 'Google'] },
	{ name: 'Support', socialApps: ['Twitter'] },
	{ name: 'Chat', socialApps: ['WhatsApp', 'Telegram'] },
	{ name: 'Service', socialApps: ['SMS', 'Email'] },
	{ name: 'Design', socialApps: [] },
];
const price: Option[] = [
	{
		name: 'Free',
		socialApps: ['Telegram', 'WhatsApp', 'Snapchat', 'TikTok', 'Mailchimp', 'SendGrid'],
	},
	{ name: 'Paid', socialApps: ['SMS', 'Email', 'Google', 'Twitter', 'Facebook'] },
];
interface FilterBarProps {
	selectedCategories: string[];
	selectedPrices: string[];
	setSelectedCategories: (options: string[]) => void;
	setSelectedPrices: (options: string[]) => void;
}

export default function FilterBar(props: FilterBarProps) {
	const Categories: string[] = category.map((item) => item.name);
	const prices: string[] = price.map((item) => item.name);

	return (
		<div className='flex gap-5'>
			<CheckMenuButton
				text={'Category'}
				options={Categories}
				selected={props.selectedCategories}
				setSelected={props.setSelectedCategories}
			/>

			<CheckMenuButton
				text={'Price'}
				options={prices}
				selected={props.selectedPrices}
				setSelected={props.setSelectedPrices}
			/>
		</div>
	);
}

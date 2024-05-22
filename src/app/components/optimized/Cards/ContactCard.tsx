interface Data {
	id: string | number;
	icon?: React.ReactNode;
	contact?: string | number;
	name?: string;
	value?: number | string;
}

interface IData {
	data: Data[];
	title: string;
	contacts: boolean;
	isLocation?: React.ReactNode;
	children?: React.ReactNode;
	form?: boolean;
	contain?: React.ReactNode;
}

const ContactCard: React.FC<IData> = ({
	data,
	title,
	contacts,
	isLocation,
	children,
	form,
	contain,
}) => {
	return (
		<div className='cardDetails-sharedClass p-5'>
			<div className='flex justify-between items-center'>
				<h3 className='text-title font-semibold'>{title}</h3>
				{form ? ' ' : children}
			</div>

			{form ? (
				contain
			) : contacts ? (
				<div className='flex flex-col gap-3 pt-4'>
					{data.map((e) => (
						<div className='flex items-center gap-2' key={e.id}>
							{e.icon}
							<p className='text-title text-sm'>{e.contact}</p>
						</div>
					))}
				</div>
			) : (
				<div className='flex flex-col gap-1.5 pt-4'>
					{data.map((e) => (
						<p className='flex items-center justify-between' key={e.id}>
							<span className='text-subtitle text-sm'>{e.name}:</span>
							<span className='text-title text-sm'>SAR {e.value}</span>
						</p>
					))}
					{isLocation}
				</div>
			)}
		</div>
	);
};

export default ContactCard;

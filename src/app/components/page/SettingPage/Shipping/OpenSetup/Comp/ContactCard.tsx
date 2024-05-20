interface IData {
	data: Data[];
	title: string;
	icon?: React.ReactNode;
	contact?: string | number;
	name?: string;
	price?: number;
	id: string | number;
	contacts: boolean;
}

const ContactCard: React.FC<IData> = ({ data, title, contacts }) => {
	return (
		<div className='cardDetails-sharedClass p-5'>
			<h3 className='title'>{title}</h3>

			{contacts ? (
				<div className='flex flex-col gap-3 pt-4'>
					{data.map((e) => (
						<div className='flex items-center gap-2' key={e.id}>
							{e.icon}
							<p className='text-title text-sm'>{e.contact}</p>
						</div>
					))}
				</div>
			) : (
				<div className='flex flex-col gap-1 pt-4'>
					{data.map((e) => (
						<p className='flex items-center justify-between' key={e.id}>
							<span className='text-subtitle text-sm'>{e.name}:</span>
							<span className='text-title text-sm'>SAR {e.price}</span>
						</p>
					))}
				</div>
			)}
		</div>
	);
};

export default ContactCard;

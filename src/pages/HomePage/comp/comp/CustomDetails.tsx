import { Avatars } from '../../../../app/components/optimized';

interface ItemData {
	id: number;
	img: string;
	fName: string;
	lName: string;
	status: string;
	color: string;
	price: number;
	currency: string;
	date: string;
}

interface Props {
	data: ItemData[];
}

const CustomDetails: React.FC<Props> = ({ data }) => {
	return (
		<div>
			{data.length < 1 ? (
				<div className='flex justify-center items-center h-full'>
					<p className='text-subtitle text-sm'>No orders yet</p>
				</div>
			) : (
				<section className='flex flex-col gap-4 mt-4 overflow-auto h-[16.5rem]'>
					{data.map((item) => {
						const { id, img, fName, lName, status, color, price, currency, date } = item;
						return (
							<div key={id} className='flex justify-between'>
								<div className='flex justify-between gap-4'>
									<Avatars src={img} fName={fName} lName={lName} />
									<div>
										<h4 className='text-title text-sm'>
											{fName} {lName} <span className='text-xs text-subtitle'>{color}</span>
										</h4>
										<p
											className={`text-sm ${
												status === 'Awaiting Payment'
													? 'text-neutral-2'
													: status === 'Canceled'
													? 'text-subtitle'
													: 'text-sec-pressed'
											}`}
										>
											{status}
										</p>
									</div>
								</div>

								<div>
									<h4 className='text-right text-title text-sm font-semibold mb-2'>
										{price} {currency}
									</h4>
									<p className='text-subtitle text-xs'>{date}</p>
								</div>
							</div>
						);
					})}
				</section>
			)}
		</div>
	);
};

export default CustomDetails;

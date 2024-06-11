import { GoStarFill } from 'react-icons/go';
import Avatar from 'src/app/components/optimized/UiKits/Avatar';
import { getImageUrl } from 'src/app/utils';

export const ReviewsCard = ({
	header,
	body,
	children,
	publish,
	reply,
	submitReply,
}: {
	header: React.ReactNode;
	body: React.ReactNode;
	children: React.ReactNode;
	publish: React.ReactNode;
	reply: boolean;
	submitReply: boolean;
}) => {
	return (
		<div>
			{/* header */}
			<div className='topTable p-5'>
				<div className='flex items-center gap-2'>
					<div className='size-10 rounded overflow-hidden'>
						<img src={getImageUrl('product/product.png')} />
					</div>

					<div className='flex flex-col'>
						<h3 className='title text-sm'>DJI Mavic Pro 2</h3>
					</div>
				</div>

				{/* children header*/}
				{header}
			</div>
			{reply ? ' ' : <hr />}

			{/* body */}
			<div className='topTable p-5 '>
				<div className='flex items-start gap-2'>
					<div>
						<Avatar variant='user' fullName='walied sayed' />
					</div>
					<div className='flex-col-global gap-1'>
						<div className='flex-row-global gap-2'>
							<h3 className='title'>Walied Sayed</h3>
							<p className='subtitle text-sm'>5/6/2021</p>
						</div>
						<div className='flex-row-global'>
							<GoStarFill size={14} color='gold' />
							<GoStarFill size={14} color='gold' />
							<GoStarFill size={14} color='gold' />
							<GoStarFill size={14} color='gold' />
							<GoStarFill size={14} color='gold' />
						</div>
						<p className='text-title text-sm'>Nice & Good Product</p>
					</div>
				</div>
				{reply ? '' : body}
			</div>
			{reply && children}

			{submitReply && !reply ? publish : ''}
		</div>
	);
};

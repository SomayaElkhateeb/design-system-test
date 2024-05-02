import { Link } from 'react-router-dom';

const LinkCards = ({ to, title, Icon }: { to: string; title: string; Icon: any }) => {
	return (
		<Link to={to}>
			<div className='rounded-lg bg-brand-gradient w-[8.7rem] p-px '>
				<div className='rounded-[calc(0.5rem-1px)] p-2 bg-white flex flex-col'>
					<div className='size-10 rounded-full bg-light-1 flex justify-center items-center'>
						<Icon className='fill-pri-dark' />
					</div>
					<p className='font-semibold text-title mt-1'>{title}</p>
				</div>
			</div>
		</Link>
	);
};

export default LinkCards;

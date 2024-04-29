import { Link } from 'react-router-dom';

const LinkCards = ({ to, title, Icon }: { to: string; title: string; Icon: any }) => {
	return (
		<Link to={to}>
			{/* <div
				className='p-3 flex flex-col gap-2 rounded-lg'
				style={{
					borderWidth: '2px',
					borderColor: 'linear-gradient(45deg, #0d53fc -2.74%, #55c397 140.56%)',
				}}
			>
				<div className='size-10 rounded-full bg-light-1 flex justify-center items-center'>
					<Icon className='fill-pri-dark' />
				</div>
				<p className='font-semibold text-title'>{title}</p>
			</div> */}

			<div
				style={{
					background: 'linear-gradient(45deg, #0d53fc -2.74%, #55c397 140.56%)',
					padding: '2px',
				}}
				className='rounded-lg'
			>
				<div className='bg-white p-2 rounded-lg'>
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

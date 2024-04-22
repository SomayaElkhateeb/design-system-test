import React from 'react';
import { TbMessage2Question } from 'react-icons/tb';
import { AskQuery } from '../../_comp/data';

interface Props {
	image: string;
	name: string;
	ask_queries: AskQuery[];
}

const QueryHeader: React.FC<Props> = ({ image, name, ask_queries }) => {
	return (
		<div className='bg-white rounded-lg border-b overflow-hidden px-4'>
			<div className='flex justify-between items-center'>
				<div className='flex items-center'>
					<img className='size-12 object-cover rounded' src={image} alt={name} />
					<h3 className='text-md font-semibold mx-3'>{name}</h3>
				</div>
				<div className='flex flex-col py-4 justify-between'>
					<div className=' flex items-center justify-between text-md mt-2'>
						<div className='flex items-center text-md'>
							<TbMessage2Question size={25} color='#797878' />
							<p>
								<span className='mx-1'>{ask_queries.length}</span>
								queries
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default QueryHeader;

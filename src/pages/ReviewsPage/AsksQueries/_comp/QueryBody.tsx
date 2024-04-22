import React, { useState } from 'react';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { PiArrowBendUpRightFill } from 'react-icons/pi';
import { Button, InitialsAvatar, LayoutCard } from 'src/app/components/optimized';
import { useTranslation } from 'react-i18next';
import { Response } from '../../_comp/data';
import { ContextValue, useAsksQueriesContext } from './AsksQueriesContext';
import { getCurrentDate, randomColor } from 'src/app/utils';
import { FaRegTrashCan } from 'react-icons/fa6';
import TweetCard from '../../_comp/TweetCard';

interface Props {
	id: string;
	productId: string;
	reviewer: {
		firstName: string;
		lastName: string;
	};
	repliedDate: string;
	question: string;
	isResponded: boolean;
	response: Response | null;
}

const QueryBody: React.FC<Props> = ({ id, reviewer, repliedDate, question, isResponded, productId, response }) => {
	const { deleteAskQueryResponse, addAskQueryResponse, editAskQueryResponse, deleteAskQuery } =
		useAsksQueriesContext() as ContextValue;

	const [showActionCard, setShowActionCard] = useState(false);
	const [isReplyForm, setIsReplyForm] = useState(false);
	const [newResponse, setNewResponse] = useState<Response>({
		reviewer: {
			firstName: 'Fan',
			lastName: 'Al Taalouq',
		},
		repliedDate: getCurrentDate(),
		content: '',
	});

	const { t } = useTranslation();

	const onDelete = () => {
		deleteAskQueryResponse(productId, id);
	};

	const onEdit = (value: string) => {
		editAskQueryResponse(productId, id, {
			reviewer: {
				firstName: 'Fan',
				lastName: 'Fan Al Taalouq',
			},
			repliedDate: getCurrentDate(),
			content: value,
		});
	};

	const handleReply = () => {
		if (newResponse.content.trim() !== '') {
			addAskQueryResponse(productId, id, newResponse);
			setIsReplyForm(false);
		}
	};

	const handleDelete = () => {
		setShowActionCard(false);
		deleteAskQuery(productId, id);
	};

	return (
		<div className='flex flex-col bg-white mb-5 shadow-sm'>
			<div className='flex flex-col justify-between px-4 py-4'>
				<div className='flex items-center justify-between'>
					<div className='flex'>
						<InitialsAvatar
							style={{}}
							firstName={reviewer.firstName}
							lastName={reviewer.lastName}
							size={50}
							randomColor={randomColor}
						/>

						<div className='flex flex-col mb-2 mx-3'>
							<div className='flex'>
								<span className='text-sm font-bold'>
									{reviewer.firstName} {reviewer.lastName}
								</span>
								<span className='text-sm text-gray-500 mx-2'>{repliedDate}</span>
							</div>
							<p className='text-gray-700'>{question}</p>
						</div>
					</div>
					<div className='flex flex-col space-y-3 justify-end'>
						<div className='flex justify-end'>
							<button onClick={() => setShowActionCard(!showActionCard)}>
								<HiOutlineDotsHorizontal size={24} />
							</button>
							{!isResponded && (
								<Button
									LeftIcon={<PiArrowBendUpRightFill />}
									variant='secondary'
									onClick={() => setIsReplyForm(true)}
									className='mx-1'
								>
									{t('Reply')}
								</Button>
							)}
						</div>
						{showActionCard && (
							<div>
								<LayoutCard>
									<button className='flex space-x-2 items-center p-2' onClick={handleDelete}>
										<span>
											<FaRegTrashCan />
										</span>
										<span>Delete Permanently</span>
									</button>
								</LayoutCard>
							</div>
						)}
					</div>
				</div>
				{isReplyForm && (
					<div className='px-4 pt-5'>
						<div>
							<label htmlFor=''>Reply</label>
							<textarea
								value={newResponse.content}
								onChange={(e) => setNewResponse((prev) => ({ ...prev, content: e.target.value }))}
								rows={4}
								className='w-full px-3 py-2 border rounded-md'
							/>
						</div>
						<div className='flex justify-end my-3'>
							<Button variant='secondary' onClick={() => setIsReplyForm(false)} className='mx-1'>
								{t('Discard')}
							</Button>
							<Button onClick={handleReply} className='mx-1'>
								{t('Submit')}
							</Button>
						</div>
					</div>
				)}
				{isResponded && <TweetCard size='w-[93%]' {...response} onDelete={onDelete} onEdit={onEdit} />}
			</div>
		</div>
	);
};

export default QueryBody;

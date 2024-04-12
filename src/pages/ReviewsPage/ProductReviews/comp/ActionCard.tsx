import React from 'react';
import { FaRegTrashCan } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';

interface Props {
	unpublishAction: () => void;
	deleteAction: () => void;
	isPublished: boolean;
}

const ActionCard: React.FC<Props> = ({ unpublishAction, deleteAction, isPublished }) => {
	const handleUnpublish = () => {
		const confirmed = window.confirm('Are you sure you want to unpublish this card?');
		if (confirmed) {
			unpublishAction();
		}
	};

	const handleDelete = () => {
		const confirmed = window.confirm('Are you sure you want to delete this card permanently?');
		if (confirmed) {
			deleteAction();
		}
	};

	return (
		<div className='flex flex-col bg-white rounded-lg shadow-md py-2 px-2 w-full'>
			{isPublished && (
				<button className='flex space-x-2 items-center p-2' onClick={handleUnpublish}>
					<span>
						<IoClose />
					</span>
					<span>Unpublish</span>
				</button>
			)}

			<button className='flex space-x-2 items-center p-2' onClick={handleDelete}>
				<span>
					<FaRegTrashCan />
				</span>
				<span>Delete Permanently</span>
			</button>
		</div>
	);
};

export default ActionCard;

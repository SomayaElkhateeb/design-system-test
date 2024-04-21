import React, { useState } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';
import { InitialsAvatar } from 'src/app/components/optimized';
import { randomColor } from 'src/app/utils';

interface Props {
	size: string;
	content: string;
	reviewer: {
		firstName: string;
		lastName: string;
	};
	repliedDate: string;
	onEdit: (content: string) => void;
	onDelete: () => void;
}

const TweetCard: React.FC<Props> = ({ size, content, reviewer, repliedDate, onEdit, onDelete }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [editedContent, setEditedContent] = useState(content);

	const handleSaveClick = () => {
		if (editedContent.trim() !== '') {
			onEdit(editedContent);
			setIsEditing(false);
		}
	};

	const handleCancelEdit = () => {
		setIsEditing(false);
		setEditedContent(content);
	};

	return (
		<div className={`bg-white rounded-lg border overflow-hidden flex p-2 items-center mb-3 m-auto ${size}`}>
			<InitialsAvatar
				style={{}}
				firstName={reviewer.firstName}
				lastName={reviewer.lastName}
				size={50}
				randomColor={randomColor}
			/>
			<div className='flex flex-col w-full mx-3'>
				<div className='flex items-center justify-between'>
					<div className='flex items-center'>
						<h3 className='text-base font-bold'>
							{reviewer.firstName} {reviewer.lastName}
						</h3>
						<p className='text-sm text-gray-500 mx-2'>{repliedDate}</p>
					</div>
					<div className='flex space-x-1 p-3'>
						{!isEditing && (
							<>
								<button onClick={() => setIsEditing(true)}>
									<FiEdit size={20} />
								</button>
								<button onClick={() => onDelete()}>
									<FaRegTrashAlt size={20} />
								</button>
							</>
						)}
						{isEditing && (
							<>
								<button className='text-green-600 hover:underline mr-2' onClick={handleSaveClick}>
									Save
								</button>
								<button className='text-gray-600 hover:underline' onClick={handleCancelEdit}>
									Cancel
								</button>
							</>
						)}
					</div>
				</div>
				<div>
					{isEditing ? (
						<textarea
							className='w-full border border-gray-300 rounded-md p-2'
							value={editedContent}
							cols={300}
							rows={1}
							onChange={(e) => setEditedContent(e.target.value)}
						/>
					) : (
						<p className='text-gray-700'>{editedContent}</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default TweetCard;

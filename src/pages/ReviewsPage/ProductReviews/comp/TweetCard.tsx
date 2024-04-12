import React, { useState } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';

interface Props {
	content: string;
	author?: string;
	date?: string;
	onEdit: (content: string) => void;
	onDelete: (content: string) => void;
	markAsNotReplied: () => void;
}

const TweetCard: React.FC<Props> = ({
	content,
	author = 'Muhammed',
	date = 'Today',
	onEdit,
	onDelete,
	markAsNotReplied,
}) => {
	const [isEditing, setIsEditing] = useState(false);
	const [editedContent, setEditedContent] = useState(content);
	const [isDelete, setIsDelete] = useState(false);

	const handleEditClick = () => {
		setIsEditing(true);
	};

	const handleDeleteClick = () => {
		// onDelete(content);
		setIsDelete(true);
		markAsNotReplied();
	};

	const handleSaveClick = () => {
		// onEdit(editedContent);
		setIsEditing(false);
	};

	const handleCancelEdit = () => {
		setIsEditing(false);
		setEditedContent(content);
	};

	return (
		!isDelete && (
			<div className='bg-white rounded-lg border overflow-hidden w-[98%] flex p-2 items-center my-5 m-auto'>
				<img className='w-10 h-10 rounded-full mr-2' src='https://ui-avatars.com/api/?name=John+Doe' alt='Avatar' />

				<div className='flex flex-col w-full'>
					<div className='flex items-center justify-between'>
						<div className='flex items-center space-x-2'>
							<h3 className='text-base font-bold'>{author}</h3>
							<span className='text-sm text-gray-500'>{date}</span>
						</div>
						<div className='flex space-x-1 p-3'>
							{!isEditing && (
								<>
									<button onClick={handleEditClick}>
										<FiEdit size={20} />
									</button>
									<button onClick={handleDeleteClick}>
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
		)
	);
};

export default TweetCard;

// import { CopyIcon, EditIcon, MoreIcon, NextIcon, ViewIcon } from 'src/app/utils/icons';

// /** @param {{ variant?: "edit" | "copy" }} props */
// export default function GroupIcons(props) {
// 	if (props.variant === 'edit') {
// 		return (
// 			<div className='flex items-center gap-4'>
// 				<EditIcon className='fill-subtitle p-0.5 cursor-pointer' />
// 				<MoreIcon className='mt-1 cursor-pointer fill-subtitle' />
// 				<NextIcon className='mt-1 cursor-pointer fill-subtitle' />
// 			</div>
// 		);
// 	}

// 	return (
// 		<div className='flex gap-3'>
// 			<ViewIcon className='cursor-pointer fill-pri-dark' />
// 			<CopyIcon className='cursor-pointer fill-pri-dark' />
// 			<MoreIcon className='cursor-pointer fill-pri-dark' />
// 		</div>
// 	);
// }

// //////////////////////////////////////
import { CopyIcon, EditIcon, MoreIcon, NextIcon, ViewIcon } from 'src/app/utils/icons';

/** @param {{ variant?: "edit" | "copy", onClick?: Function }} props */
export default function GroupIcons(props) {
	const { variant, onClick } = props;

	const handleEditClick = () => {
		if (onClick) onClick('edit');
	};

	const handleViewClick = () => {
		if (onClick) onClick('view');
	};

	const handleCopyClick = () => {
		if (onClick) onClick('copy');
	};

	const handleMoreClick = () => {
		if (onClick) onClick('more');
	};

	const handleNextClick = () => {
		if (onClick) onClick('next');
	};
	return (
		<div className={`flex items-center gap-4 ${variant === 'edit' ? '' : 'gap-3'}`}>
			{variant === 'edit' ? (
				<>
					<EditIcon className='fill-subtitle p-0.5 cursor-pointer' onClick={handleEditClick} />
					<MoreIcon className='mt-1 cursor-pointer fill-subtitle' onClick={handleMoreClick} />
					<NextIcon className='mt-1 cursor-pointer fill-subtitle' onClick={handleNextClick} />
				</>
			) : (
				<>
					<ViewIcon className='cursor-pointer fill-pri-dark' onClick={handleViewClick} />
					<CopyIcon className='cursor-pointer fill-pri-dark' onClick={handleCopyClick} />
					<MoreIcon className='cursor-pointer fill-pri-dark' onClick={handleMoreClick} />
				</>
			)}
		</div>
	);
}

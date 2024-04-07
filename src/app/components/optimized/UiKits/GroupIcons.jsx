import { CopyIcon, EditIcon, MoreIcon, NextIcon, ViewIcon } from 'src/app/utils/icons';

/** @param {{ variant?: "edit" | "copy" }} props */
export default function GroupIcons(props) {
	if (props.variant === 'edit') {
		return (
			<div className='flex items-center gap-4'>
				<EditIcon className='fill-subtitle p-0.5 cursor-pointer' />
				<MoreIcon className='mt-1 cursor-pointer fill-subtitle' />
				<NextIcon className='mt-1 cursor-pointer fill-subtitle' />
			</div>
		);
	}

	return (
		<div className='flex gap-3'>
			<ViewIcon className='cursor-pointer fill-pri-dark' />
			<CopyIcon className='cursor-pointer fill-pri-dark' />
			<MoreIcon className='cursor-pointer fill-pri-dark' />
		</div>
	);
}

import { ClientBox } from 'src/app/components/optimized';
import PopupDelete from 'src/app/components/optimized/Popups/PopupDelete';
import Avatar from 'src/app/components/optimized/UiKits/Avatar';
import { MoreIcon } from 'src/app/utils/icons';

export default function CategoryViewSelect(props) {
	const title = props.title ?? `${props.fName} ${props.lName ?? ''}`;
	const {
		variant,
		subTitle,
		img,
		fName,
		lName,
		count,
		handleDelete,
		handleDeleteItem,
		onClose,
		showPopup,
	} = props;
	switch (variant) {
		case 'customers':
			return (
				<div className='w-full h-[3.5rem] flex items-center justify-between px-[1rem] mt-4'>
					<ClientBox
						title={title}
						details={subTitle}
						avatar={<Avatar variant='user' imageUrl={img} firstName={fName} lastName={lName} />}
					/>
					<button className='cursor-pointer' onClick={handleDelete}>
						<MoreIcon />
					</button>

					{showPopup && <PopupDelete onClose={onClose} onDelete={handleDeleteItem} />}
				</div>
			);

		case 'groups':
			return (
				<div className='w-full h-[3.5rem] flex items-center justify-between px-[1rem] mt-4'>
					<ClientBox
						title={title}
						details={subTitle}
						avatar={<Avatar variant='group' groupCount={count} />}
					/>
					<button className='cursor-pointer' onClick={handleDelete}>
						<MoreIcon />
					</button>

					{showPopup && <PopupDelete onClose={onClose} onDelete={handleDeleteItem} />}
				</div>
			);

		default:
			return (
				<div className='w-full h-[3.5rem] flex items-center justify-between px-[1rem] mt-4'>
					<div className='flex items-center gap-[1rem]'>
						<div className='w-[46px] h-[46px] rounded overflow-hidden'>
							<img src={img} alt='' className='w-full h-full' />
						</div>

						<div>
							<h4 className='text-sm font-semibold capitalize text-title'>{title}</h4>
							<p className='text-sm text-subtitle'>{subTitle}</p>
						</div>
					</div>
					<button className='cursor-pointer' onClick={handleDelete}>
						<MoreIcon />
					</button>

					{showPopup && <PopupDelete onClose={onClose} onDelete={handleDeleteItem} />}
				</div>
			);
	}
}

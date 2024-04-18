import { Avatars, ClientBox } from 'src/app/components/optimized';
import { MoreIcon } from 'src/app/utils/icons';

/**
 * @param {{
 *   id: string | number;
 *   title?: string;
 *   subTitle?: string;
 *   img?: string;
 *   fName?: string;
 *   lName?: string;
 *   count?: number;
 *   variant?: "customers" | "groups";
 * }} props
 */
export default function CategoryView(props) {
	const title = props.title ?? `${props.fName} ${props.lName ?? ''}`;

	switch (props.variant) {
		case 'customers':
			return (
				<div className='w-full h-[3.5rem] flex items-center justify-between px-[1rem] mt-4'>
					<ClientBox
						title={title}
						details={props.subTitle}
						avatar={<Avatars src={props.img} fName={props.fName} lName={props.lName} />}
					/>
					<button
						className='cursor-pointer'
						//  onClick={props.onClick}
					>
						<MoreIcon />
					</button>
				</div>
			);

		case 'groups':
			return (
				<div className='w-full h-[3.5rem] flex items-center justify-between px-[1rem] mt-4'>
					<ClientBox
						title={title}
						details={props.subTitle}
						avatar={<Avatars variant='countAvatar' count={props.count} />}
					/>
					<button className='cursor-pointer'>
						<MoreIcon />
					</button>
				</div>
			);

		default:
			return (
				<div className='w-full h-[3.5rem] flex items-center justify-between px-[1rem] mt-4'>
					<div className='flex items-center gap-[1rem]'>
						<div className='w-[46px] h-[46px] rounded overflow-hidden'>
							<img src={props.img} alt='' className='w-full h-full' />
						</div>

						<div>
							<h4 className='text-sm font-semibold capitalize text-title'>{title}</h4>
							<p className='text-sm text-subtitle'>{props.subTitle}</p>
						</div>
					</div>
					<button className='cursor-pointer'>
						<MoreIcon />
					</button>
				</div>
			);
	}
}

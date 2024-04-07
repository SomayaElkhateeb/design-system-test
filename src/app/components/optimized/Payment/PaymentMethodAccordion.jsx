// Done refactoring to type
import { DownIcon } from 'src/app/utils/icons';
/**
 * @param {import('react').PropsWithChildren<{
 *  title: string;
 *  isOpen: boolean;
 *  onToggle: () => void;
 * }>} props
 */
export default function PaymentMethodAccordion(props) {
	return (
		<div className={`border border-border-color rounded mb-4  ${props.isOpen ? 'bg-light-1' : 'bg-white'}`}>
			<button
				type='button'
				className='flex items-center justify-between w-full p-4 text-left focus:outline-none'
				onClick={props.onToggle}
			>
				<h2 className='title'>{props.title}</h2>
				<DownIcon className={`transition-all fill-hint ${props.isOpen ? 'rotate-180' : 'bg-white'}`} />
			</button>

			<div className={`p-4 ${!props.isOpen && 'hidden'}`}>{props.children}</div>
		</div>
	);
}

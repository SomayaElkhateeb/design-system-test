import { Link } from 'react-router-dom';
import { GroupIcons } from '..';
import { BackIcon, LinkIcon, LoadUpdateIcon, MoreIcon, PrintIcon } from 'src/app/utils/icons';
import { useTranslation } from 'react-i18next';
import { UseLanguage } from '../../CustomHook/LanguageHook';
import { IoIosArrowForward } from 'react-icons/io';

/**
 *
 * @param {{
 *  to: string;
 *  variant: 'settingIcons' | 'settingOrder' | 'settingOneBtn' | 'settingTwoBtns' | 'settingThreeBtns' | 'settingWithIcons';
 *  title: string | null;
 *  btn1: { text: string; onClick: () => void };
 *  btn2: { text: string; onClick: () => void };
 *  btn3: { text: string; onClick: () => void };
 * }} props
 */
export default function HeaderSettings(props) {
	//  hooks
	const { t } = useTranslation();
	const language = UseLanguage();
	return (
		<div className='flex items-center justify-between pl-2 pr-4 bg-white h-14'>
			<div className='flex items-center gap-1'>
				<Link to={props.to}>{language === 'ar' ? <IoIosArrowForward /> : <BackIcon />}</Link>
				<h2 className='font-semibold capitalize text-title'>{props.title}</h2>
			</div>

			<div className='flex items-center gap-6'>
				{props.variant === 'settingIcons' && (
					<>
						<IconButton onClick={props.btn1.onClick}>
							<LinkIcon className='p-1 mb-2 fill-title' />
						</IconButton>
						<IconButton onClick={props.btn2.onClick}>
							<MoreIcon className='fill-pri-dark' />
						</IconButton>
					</>
				)}
				{props.variant === 'settingOrder' && (
					<>
						<ButtonWithIcon onClick={props.btn1.onClick} icon={<LoadUpdateIcon className='p-0.5 fill-pri-dark' />}>
							{t('Update Status')}
						</ButtonWithIcon>
						<ButtonWithIcon onClick={props.btn2.onClick} icon={<PrintIcon className='p-0.5 fill-pri-dark' />}>
							{t('Print Invoice')}
						</ButtonWithIcon>
						<IconButton onClick={props.btn3.onClick}>
							<MoreIcon />
						</IconButton>
					</>
				)}
				{props.variant === 'settingOneBtn' && (
					<Button onClick={props.btn1.onClick} variant='pri'>
						{props.btn1.text}
					</Button>
				)}
				{props.variant === 'settingTwoBtns' && (
					<>
						<Button onClick={props.btn1.onClick} variant='sec'>
							{props.btn1.text}
						</Button>
						<Button onClick={props.btn2.onClick} variant='pri'>
							{props.btn2.text}
						</Button>
					</>
				)}
				{props.variant === 'settingThreeBtns' && (
					<>
						<Button onClick={props.btn1.onClick} variant='ter'>
							{props.btn1.text}
						</Button>
						<Button onClick={props.btn2.onClick} variant='sec'>
							{props.btn2.text}
						</Button>
						<Button onClick={props.btn3.onClick} variant='pri'>
							{props.btn3.text}
						</Button>
					</>
				)}
				{props.variant === 'settingWithIcons' && (
					<>
						<GroupIcons />
						<Button onClick={props.btn1.onClick} variant='sec'>
							{props.btn1.text}
						</Button>
						<Button onClick={props.btn2.onClick} variant='pri'>
							{props.btn2.text}
						</Button>
					</>
				)}
			</div>
		</div>
	);
}

/**
 * @param {import("react").ButtonHTMLAttributes<HTMLButtonElement>} props
 */
function IconButton({ ...props }) {
	return (
		<button {...props} className='p-1'>
			{props.children}
		</button>
	);
}

/**
 * @param {{
 *  icon: import("react").ReactNode
 * } & import("react").ButtonHTMLAttributes<HTMLButtonElement>} props
 */
function ButtonWithIcon({ ...props }) {
	return (
		<button {...props} className='flex items-center gap-2'>
			{props.icon}
			<span className='text-sm font-semibold text-title'>{props.children}</span>
		</button>
	);
}

/**
 * @param {{
 *  variant?: "pri" | "sec" | "ter"
 * } & import("react").ButtonHTMLAttributes<HTMLButtonElement>} props
 */
function Button({ ...props }) {
	return (
		<button {...props} className={`btn-${props.variant}`}>
			{props.children}
		</button>
	);
}

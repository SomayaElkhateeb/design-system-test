import { Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

const ButtonX = ({
	leftIcon,
	rightIcon,
	loading,
	disabled,
	children,
	variant,
	className,
	...props
}) => {
	const iconPadding = `${leftIcon ? 'pl-10' : ''} ${rightIcon ? 'pr-10' : ''}`;
	console.log(leftIcon);
	// const shearedStyles = `${
	//   !disabled &&
	//   "pl-10 pr-10 min-w-28 relative inline-flex items-center justify-center px-4 py-2 border font-medium rounded-md hover:outline-none hover:border-none active:outline-none active:border-none focus:outline-none focus:border-none disabled:shadow-none appearance-none"
	// }`;
	const classNames = {
		primary: ` ${iconPadding} btn-pri`,

		secondary: ` ${iconPadding} btn-sec`,

		tertiary: ` ${iconPadding} btn-ter`,

		link: `btn-lin`,

		// Define icon, disabled and loading styles
		leftIcon: 'absolute left-2',
		rightIcon: 'absolute right-1 border-l border-gray-50 pl-1',
		loading:
			'cursor-not-allowed flex item-center focus:outline-none active:outline-none',
		disabled:
			'bg-gray-400 hover:bg-gray-400 cursor-not-allowed focus:outline-none active:outline-none'
	};

	let baseStyles;
	switch (variant) {
		case 'secondary':
			baseStyles = classNames.secondary;
			break;
		case 'tertiary':
			baseStyles = classNames.tertiary;
			break;
		case 'link':
			baseStyles = classNames.link;
			return (
				<Link
					to={props.to}
					className={`${baseStyles} ${disabled ? 'cursor-not-allowed' : ''}`}
				>
					{children}
				</Link>
			);
		default:
			baseStyles = classNames.primary;
			break;
	}

	return (
		<button
			className={`${baseStyles} ${
				disabled && classNames.disabled
			} ${className}`}
			{...props}
		>
			{/* leftIcon */}
			{leftIcon && (
				<span className={`${leftIcon && classNames.leftIcon}`}>{leftIcon}</span>
			)}

			{/* children */}
			{!loading && children}

			{/* rightIcon */}
			{!loading && rightIcon && (
				<span className={`${rightIcon && classNames.rightIcon}`}>
					{rightIcon}
				</span>
			)}

			{/* loading */}
			{loading && (
				<span className={`${loading && classNames.loading} `}>
					<ClipLoader color={variant ? '#000' : '#fff'} size={25} />
				</span>
			)}
		</button>
	);
};

export default ButtonX;

// className loading ?
// icons

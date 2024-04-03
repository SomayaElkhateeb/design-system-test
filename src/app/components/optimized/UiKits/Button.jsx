/**
 * Button component for various button styles with optional icons and loading spinner.
 * @param {{
 *  variant?: string,
 *  LeftIcon?: ((props: { className?: string }) => import("react").ReactNode) | JSX.Element,
 *  RightIcon?: ((props: { className?: string }) => import("react").ReactNode) | JSX.Element,
 *  loading?: boolean,
 *  text?: never
 * } & import("react").ButtonHTMLAttributes<HTMLButtonElement>} props - Props for the Button component.
 *
 * @example
 *
 * ```jsx
 * export default function ExampleComponent() {
 *
 *   const handleClick = () => {
 *     console.log("Button clicked!");
 *   };
 *
 *   return (
 *     <div>
 *       <Button variant="primary" onClick={handleClick}>
 *         Primary Button
 *       </Button>
 *
 *       <Button variant="secondary" LeftIcon={LeftIcon} onClick={handleClick}>
 *         Secondary Button
 *       </Button>
 *
 *       <Button variant="tertiary" RightIcon={RightIcon} onClick={handleClick}>
 *         Tertiary Button
 *       </Button>
 *
 *       <Button variant="link" onClick={handleClick}>
 *         Link Button
 *       </Button>
 *
 *       <Button variant="primary" loading onClick={handleClick}>
 *         Loading Button
 *       </Button>
 *     </div>
 *   );
 * };
 * ```
 */
export default function Button({
	variant,
	children,
	LeftIcon,
	RightIcon,
	loading,
	className,
	text,
	// onClick
	...props
}) {
	// Define variables for class names
	let buttonClass = className ?? '';
	let iconClass = '';
	let textClass = '';

	// Switch case to determine button styling based on variant
	switch (variant) {
		case 'link':
			// Link variant styling
			buttonClass += ' text-primary flex flex-row justify-center items-center capitalize';
			iconClass = 'fill-primary p-0.5 mb-1 ml-1';
			break;
		case 'secondary':
			// Secondary variant styling
			buttonClass += ' btn-sec flex items-center gap-1 p-2';
			iconClass = 'fill-pri-dark h-3 w-3 ml-1';
			textClass = 'fill-pri-dark ';
			break;
		case 'tertiary':
			// Tertiary variant styling
			buttonClass +=
				' text-title text-sm capitalize font-semibold flex items-center gap-1.5 px-[15px] py-2 rounded hover:bg-light-3';
			iconClass = 'fill-pri-dark ml-1 h-3 w-3';
			textClass = 'fill-pri-dark';
			break;
		default:
			// Primary variant styling
			buttonClass += ' relative btn-pri flex px-1 items-center ml-1';
			iconClass = 'fill-white';
			textClass = 'mx-1 text-sm';
			break;
	}

	return (
		<button {...props} className={buttonClass}>
			{/* Render loading spinner if loading is true */}
			{loading ? (
				<div className='flex items-center justify-center px-6 py-1'>
					<div className='border-2 border-white rounded-full border-t-transparent animate-spin' />
				</div>
			) : (
				// Render button content with LeftIcon, text, and RightIcon
				<>
					{LeftIcon && (typeof LeftIcon === 'function' ? <LeftIcon className={textClass} /> : LeftIcon)}
					<span className={textClass}>{children ?? text}</span>
					{RightIcon && (typeof RightIcon === 'function' ? <RightIcon className={iconClass} /> : RightIcon)}
				</>
			)}
		</button>
	);
}

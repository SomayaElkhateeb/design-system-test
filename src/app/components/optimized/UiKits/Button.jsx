/**
 * Button component for various button styles with optional icons and loading spinner.
 * @param {Object} props - Props for the Button component.
 * @param {string} props.variant - The variant of the button. Can be "lin", "sec", "ter", or default.
 * @param {string} props.children - The text content of the button.
 * @param {JSX.Element} props.LeftIcon - Optional left icon component.
 * @param {JSX.Element} props.RightIcon - Optional right icon component.
 * @param {boolean} props.loading - Indicates whether the button is in a loading state.
 * @param {Function} props.onClick - Click event handler for the button.
 * @returns {JSX.Element} Button component.
 */

const Button = ({
	variant,
	children,
	LeftIcon,
	RightIcon,
	loading,
	onClick
}) => {
	// Define variables for class names
	let buttonClass = '';
	let iconClass = '';
	let textClass = '';

	// Switch case to determine button styling based on variant
	switch (variant) {
		case 'link':
			// Link variant styling
			buttonClass =
				'text-primary flex flex-row justify-center items-center capitalize';
			iconClass = 'fill-primary p-0.5 mb-1 ml-1';
			break;
		case 'secondary':
			// Secondary variant styling
			buttonClass = 'btn-sec flex items-center gap-1 p-2';
			iconClass = 'fill-pri-dark h-3 w-3 ml-1';
			textClass = 'fill-pri-dark ';
			break;
		case 'tertiary':
			// Tertiary variant styling
			buttonClass =
				'text-title text-sm capitalize font-semibold flex items-center gap-1.5 px-[15px] py-2 rounded hover:bg-light-3';
			iconClass = 'fill-pri-dark ml-1 h-3 w-3';
			textClass = 'fill-pri-dark';
			break;
		default:
			// Primary variant styling
			buttonClass = 'relative btn-pri flex px-1 items-center ml-1';
			iconClass = 'fill-white';
			textClass = 'mx-1 text-sm';
			break;
	}

	return (
		<button onClick={onClick} className={buttonClass}>
			{/* Render loading spinner if loading is true */}
			{loading ? (
				<div className='flex items-center justify-center px-6 py-1'>
					<div className='border-2 border-white rounded-full  border-t-transparent animate-spin' />
				</div>
			) : (
				// Render button content with LeftIcon, text, and RightIcon
				<>
					{LeftIcon && <LeftIcon className={textClass} />}
					<span className={textClass}>{children}</span>
					{RightIcon && <RightIcon className={iconClass} />}
				</>
			)}
		</button>
	);
};

export default Button;

/*  Example usage of Button component

const ExampleComponent = () => {

  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div>
      <Button variant="primary" onClick={handleClick}>
        Primary Button
      </Button>

      <Button variant="secondary" LeftIcon={LeftIcon} onClick={handleClick}>
        Secondary Button
      </Button>

      <Button variant="tertiary" RightIcon={RightIcon} onClick={handleClick}>
        Tertiary Button
      </Button>

      <Button variant="link" onClick={handleClick}>
        Link Button
      </Button>

      <Button variant="primary" loading onClick={handleClick}>
        Loading Button
      </Button>
    </div>
  );
};

export default ExampleComponent; 
*/

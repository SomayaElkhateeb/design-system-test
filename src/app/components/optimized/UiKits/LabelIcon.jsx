import { useTranslation } from 'react-i18next';

/**
 * LabelIcon component displays an icon with optional text.
 * @param {Object} props - The props object.
 * @param {string} props.text - The text to display next to the icon.
 * @param {JSX.Element|null} props.icon - The icon element to display.
 * @param {string} [props.textColor='#F3F7FF'] - The color of the text.
 * @param {string} [props.backgroundColor] - The background color of the component.
 * @returns {JSX.Element} React element representing the LabelIcon.
 */
const LabelIcon = ({ text, icon, textColor, backgroundColor }) => {
	const { t } = useTranslation();

	return (
		<div
			className={`flex items-center px-3 py-1 rounded-full text-white mt-2`}
			style={{ backgroundColor }}
		>
			{icon}
			{text && (
				<span
					className='ml-1 text-sm capitalize text-center items-center flex justify-center m-auto'
					style={{ color: textColor }}
				>
					{t(text)}
				</span>
			)}
		</div>
	);
};

export default LabelIcon;

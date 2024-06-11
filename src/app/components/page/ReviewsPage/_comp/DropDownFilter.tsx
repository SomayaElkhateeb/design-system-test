import DropDownMenu from '../../Orders/FilterOrder/DropDownMenu';

export const DropDownFilter = ({
	children,
	title,
}: {
	children?: React.ReactNode;
	title: string;
}) => {
	return (
		<>
			<DropDownMenu title={title}>{children}</DropDownMenu>
			<hr />
		</>
	);
};

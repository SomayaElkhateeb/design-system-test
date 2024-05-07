import { useTranslation } from 'react-i18next';
import { InputRow } from 'src/app/components/optimized';
import CompareButton from 'src/app/components/optimized/UiKits/CompareButton';
import { SearchIcon } from 'src/app/utils/icons';

// Define the type for the Header props
interface HeaderProps {
	handleSelect: (option: string) => void;
	selectedOption: string;
	onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
	dropdown?: any;
	title: string;
}

export default function Header({
	handleSelect,
	selectedOption,
	onSearch,
	title,
	dropdown = false,
}: HeaderProps) {
	// hooks
	const { t } = useTranslation();
	const comparisonMenus = [
		{ text: t('Today') },
		{ text: t('Last week') },
		{ text: t('Last month') },
		{ text: t('Specify date') },
	];
	return (
		<header className='flex justify-between items-center'>
			<h2 className='text-title font-semibold text-lg'>{title}</h2>
			<div className='flex justify-between items-center gap-4'>
				{dropdown && (
					<CompareButton
						sortMenus={comparisonMenus}
						selectedOption={selectedOption}
						handleSelect={handleSelect}
						variant='link'
					/>
				)}
				<InputRow leftIcon={<SearchIcon />} placeholder='Search' onChange={onSearch} />
			</div>
		</header>
	);
}

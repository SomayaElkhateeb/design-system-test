import { useTranslation } from 'react-i18next';
import { FaTrashAlt } from 'react-icons/fa';
import HorizontalBox from 'src/app/components/ui/horizontal-box';
import { optionTypeMap } from '../utils';

function OptionsList({ options, onDelete }) {
	const { t } = useTranslation();

	return (
		<div className='flex flex-col gap-y-3'>
			{options.map((option, index) => (
				<HorizontalBox
					key={index}
					className='border-title/10 border rounded-lg py-3.5 pe-6 ps-4 items-center'
					end={
						<button
							type='button'
							className='inline-block text-danger-400'
							onClick={() => onDelete(option)}
						>
							<FaTrashAlt className='size-4' />
							<span className='sr-only'>{t('Delete')}</span>
						</button>
					}
					endSeparator
				>
					<div className='flex flex-col gap-1'>
						<div className='flex items-center gap-1 text-title'>
							<span className='text-sm font-bold'>{t(option.name)}</span>
							<span className='text-sm'>({t(optionTypeMap[option.type])})</span>
						</div>
						{option.values.length > 0 ? (
							<div className='flex flex-wrap items-center gap-1.5'>
								{option.values.map((item) => (
									<div
										key={item.tempId}
										className='rounded-md text-primary-500 bg-gray-700 text-white py-0.5 px-2 flex items-center gap-2'
									>
										<div
											className='size-4 rounded-full'
											style={{
												backgroundColor: item.value,
											}}
										/>
										<span className='text-xs'>{item.nameEn}</span>
									</div>
								))}
							</div>
						) : (
							<div className='flex flex-col'>
								<span className='text-xs italic'>{t('No values')}</span>
							</div>
						)}
					</div>
				</HorizontalBox>
			))}
		</div>
	);
}

export default OptionsList;

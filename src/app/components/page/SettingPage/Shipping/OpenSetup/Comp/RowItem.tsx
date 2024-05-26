import { useTranslation } from 'react-i18next';
import { RiDeleteBin5Line } from 'react-icons/ri';
import MenuOptions from 'src/app/components/optimized/Menu/MenuOptions';
import { MoreIcon } from 'src/app/utils/icons';
export default function RowItem({
	type,
	order,
	period,
}: {
	type: string;
	order: string;
	period: string;
}) {
	const { t } = useTranslation();

	const options = [
		{
			id: 1,
			text: t('delete rate'),
			icon: <RiDeleteBin5Line color='pri-dark' />,
		},
	];
	return (
		<div className='flex justify-between items-center py-2'>
			<div className='flex-col-top-section-pages  gap-[.3rem]'>
				<h3 className='text-title font-semibold text-sm pt-2'>
					{t('Standard')} ({type})
				</h3>
				<p className='text-subtitle text-sm'>
					{t('Order')}: {order}
				</p>
			</div>

			<div>
				<div className='flex justify-end pb-2'>
					<MenuOptions
						btn={<MoreIcon className='fill-subtitle' />}
						options={options}
						handle={() => console.log('uninstall')}
					/>
				</div>
				<p className='text-subtitle text-sm'>{period}</p>
			</div>

		</div>
	);
}

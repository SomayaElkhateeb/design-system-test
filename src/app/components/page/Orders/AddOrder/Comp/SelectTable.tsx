import { TableCell } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { getImageUrl } from 'src/app/utils';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';
import { UseFormReturn } from 'react-hook-form';
import { IQuantity } from '../Products';
import { LiaTrashAlt } from 'react-icons/lia';
import BaseTable from 'src/app/components/optimized/TableLayoutGlobal/base.table';

interface IData {
	id: number;
	imageUrl: string;
	text: string;
	color: string;
	size: string;
	description: string;
	quantity: number;
	total: number;
}
const data = [
	{
		id: 1,
		imageUrl: 'product/product.png',
		text: 'DJI Mavic Pro 2',
		color: 'Red',
		size: 'XL',
		description: 'Blankets',
		quantity: 15,
		total: 1000,
	},
];

export default function SelectTable({ formStore }: { formStore: UseFormReturn<IQuantity> }) {
	//  hooks
	const { t } = useTranslation();

	//  headers
	const headers = [
		{ title: t('Product & Category') },
		{ title: t('Quantity') },
		{ title: t('Price') },
		{ title: t('Actions') },
	];
	// footer elements

	return (
		<BaseTable
			color='#55607A'
			headers={headers.map((h) => h)}
			rows={data.map((e: IData) => ({
				item: e,
				elements: [
					<TableCell>
						<div className='flex items-start gap-2'>
							<div className='size-[2.625rem] rounded-md overflow-hidden'>
								<img src={getImageUrl(e.imageUrl)} alt={e.text} />
							</div>
							<div>
								<h3 className='title text-sm'>
									{e.text}
									<span className='text-subtitle font-normal'>
										/ {e.color} / {e.size}
									</span>
								</h3>
								<p className='text-subtitle text-sm'>{e.description}</p>
							</div>
						</div>
					</TableCell>,
					<TableCell>
						<FormField
							formStore={formStore}
							name='quantity'
							render={(field) => <Input type='number' {...field} placeholder='' />}
						/>
					</TableCell>,
					<TableCell>
						<p className='text-title text-sm'>SAR {e.total}.00</p>
					</TableCell>,
					<TableCell>
						<button>
							<LiaTrashAlt size='28' className='text-pri-dark' />
						</button>
					</TableCell>,
				],
			}))}
		/>
	);
}
// footers={[
// 				<TableCell colSpan={2}>
// 					<p className='text-title text-sm'>Total</p>
// 				</TableCell>,
// 				<TableCell>
// 					<p className='text-title text-sm'>
// 						SAR {data.reduce((acc, item) => acc + item.total, 0)}.00
// 					</p>
// 				</TableCell>,
// 			]}

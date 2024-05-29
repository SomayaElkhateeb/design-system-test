import { UseFormReturn } from 'react-hook-form';
import { getImageUrl } from 'src/app/utils';
import { RemoveIcon } from 'src/app/utils/icons';
import { IOrderItemForm } from '../Forms/HookOrderItem';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';

export default function ProductItem({ formStore }: { formStore: UseFormReturn<IOrderItemForm> }) {
	const title = 'Solid Anti-Pilling Sweatshirt with Round Sweatshirt';
	return (
		<div className='grid lg:grid-cols-5 md:grid-cols-3 sm:cols-1 gap-4'>
			<div className='lg:col-span-3 md:col-span-3 sm:col-span-1'>
				<div className='flex justify-between '>
					<div className='flex items-start gap-2'>
						<div className='size-[4.6875rem] rounded-md overflow-hidden'>
							<img src={getImageUrl('product/product.png')} />
						</div>
						<div className='flex-col-top-section-pages gap-2'>
							<h3 className='title text-sm text-ellipsis overflow-hidden w-[24rem]'>
								{/* text-ellipsis ?? */}
								{title.slice(0, 24)}...
							</h3>
							<p className='text-subtitle text-sm'>SKU: SF1133569600-1</p>
						</div>
					</div>
				</div>
			</div>
			<div className='lg:col-span-1 md:col-span-2 sm:col-span-1 '>
				<FormField
					formStore={formStore}
					name='quantity'
					render={(field) => <Input type='number' {...field} placeholder={''} />}
				/>
			</div>
			<div className='lg:col-span-1  lg:flex-end flex items-center gap-2'>
				<RemoveIcon className='fill-pri-dark cursor-pointer' />
				<p className='text-title text-sm '>SAR 450.00</p>
			</div>
		</div>
	);
}

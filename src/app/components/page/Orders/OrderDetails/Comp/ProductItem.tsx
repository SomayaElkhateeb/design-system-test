import { UseFormReturn } from 'react-hook-form';
import { getImageUrl } from 'src/app/utils';
import { RemoveIcon } from 'src/app/utils/icons';
import { IOrderItemForm } from '../Forms/HookOrderItem';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';

export default function ProductItem({ formStore }: { formStore: UseFormReturn<IOrderItemForm> }) {
	return (
		<div className='grid grid-cols-5'>
			<div className='col-span-3'>
				<div className='flex justify-between pt-2'>
					<div className='flex items-start gap-2'>
						<div className='size-[4.6875rem] rounded-md overflow-hidden'>
							<img src={getImageUrl('product/product.png')} />
						</div>
						<div className='flex flex-col gap-2'>
							<h3 className='title text-sm text-ellipsis overflow-hidden w-[24rem]'>
								{/* text-ellipsis ?? */}
								Solid Anti-Pilling Sweatshirt with Round Sweatshirt
							</h3>
							<p className='text-subtitle text-sm'>SKU: SF1133569600-1</p>
						</div>
					</div>
				</div>
			</div>
			<div className='col-span-1'>
				<FormField
					formStore={formStore}
					name='quantity'
					render={(field) => <Input type='number' {...field} placeholder={''} />}
				/>
			</div>
			<div className='col-span-1 flex flex-col justify-between items-end'>
				<RemoveIcon className='fill-pri-dark' />
				<p className='text-title text-sm '>SAR 450.00</p>
			</div>
		</div>
	);
}

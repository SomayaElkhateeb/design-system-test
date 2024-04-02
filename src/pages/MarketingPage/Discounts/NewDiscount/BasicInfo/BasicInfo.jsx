import SingleChoiceChips from 'src/app/components/optimized/ChoiceChips/SingleChoiceChips';
import { InputRow } from 'src/app/components/optimized';
import useDiscountForm from './useDiscountForm';
import { applyToOptions, discountTypesOptions } from './comp/data';
import ApplyToOptions from './comp/ApplyToOptions';
import DiscountTypesOptions from './comp/DiscountTypesOptions';

const BasicInfo = () => {
	const {
		discountName,
		setDiscountName,
		discountType,
		setDiscountType,
		applyTo,
		setApplyTo
	} = useDiscountForm();

	console.log('discountName', discountName);
	console.log('discountType', discountType);
	console.log('applyTo', applyTo);

	return (
		<div className='bg-white w-full border border-constrained rounded-md p-[18px]'>
			<h3 className='mb-2 font-semibold text-title'>Basic info</h3>
			<div className='flex flex-col gap-[18px]'>
				<div className='w-[390px]'>
					<InputRow
						id='discountName'
						value={discountName}
						onChange={setDiscountName}
						label='Discount name'
					/>
				</div>
			</div>

			<section className='mt-[18px]'>
				<h5 className='mb-2 text-sm font-semibold text-pri-dark'>
					Discount Type
				</h5>
				<SingleChoiceChips
					options={discountTypesOptions}
					setSelected={setDiscountType}
					selected={discountType}
				/>

				<DiscountTypesOptions discountType={discountType} />
			</section>

			<section className='mt-[18px]'>
				<h5 className='mb-2 text-sm font-semibold text-pri-dark'>Apply to</h5>
				<SingleChoiceChips
					options={applyToOptions}
					setSelected={setApplyTo}
					selected={applyTo}
				/>
				<ApplyToOptions applyTo={applyTo} />
			</section>
		</div>
	);
};

export default BasicInfo;

// <div>
//   {applyTo === "specific_products" && (
//     <div className="flex flex-col space-y-4">
//       <label htmlFor="products" className="font-medium text-gray-700">
//         Select products
//       </label>
//       <div className="grid grid-cols-2 gap-4">
//         {/* Replace with your product data and rendering logic */}
//         <ul>
//           <li
//             className={`cursor-pointer hover:bg-gray-100 p-2 rounded-md ${
//               selectedProducts.includes("product1") ? "bg-blue-100" : ""
//             }`}
//             onClick={() => handleProductSelect("product1")}
//           >
//             Product 1
//           </li>
//           {/* Add more product list items here */}
//         </ul>
//       </div>
//     </div>
//   )}
// </div>;

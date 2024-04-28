// @ts-nocheck
import { forwardRef } from 'react';
import { getImageUrl } from 'src/app/utils';

const ProductTable = forwardRef(({ data, headers }) => {
	const formattedHeaders = headers.map((header) => header.replace(/\s+/g, '_'));
	return (
		<table className='w-full table-auto border-separate border-spacing-y-3 print-only'>
			<thead>
				<tr className='text-left bg-white'>
					{headers.map((header, index) => (
						<th
							key={header}
							className={`px-4 py-3 ${
								index === 0
									? 'rounded-tl-xl rounded-bl-xl'
									: index === headers.length - 1
									? 'rounded-tr-xl rounded-br-xl'
									: ''
							}`}
						>
							{header}
						</th>
					))}
				</tr>
			</thead>

			<tbody>
				{data.map((row, index) => (
					<tr key={index} className='rounded-xl bg-white'>
						{formattedHeaders.map((header, index) => (
							<td
								key={header}
								className={`px-4 py-3 text-title ${
									index === 0
										? 'rounded-tl-xl rounded-bl-xl title'
										: index === formattedHeaders.length - 1
										? 'rounded-tr-xl rounded-br-xl paragraph'
										: ''
								}`}
							>
								{index === 0 ? (
									<div className='flex flex-1 gap-3'>
										<div className='overflow-hidden border rounded-lg size-10 border-light-2'>
											<img
												src={getImageUrl(row.imageUrl)}
												alt={row.product_name}
												className='object-cover size-full'
											/>
										</div>
										<div className='flex flex-col justify-around'>
											<h2 className='title'>{row.product_name}</h2>
											<p className='paragraph text-subtitle'>{row.category}</p>
										</div>
									</div>
								) : (
									row[header]
								)}
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
});
export default ProductTable;
// {formattedHeaders.map((header, index) => (
//   <td
//     key={header}
//     className={`px-4 py-3 text-title ${
//       index === 0
//         ? 'rounded-tl-xl rounded-bl-xl title'
//         : index === formattedHeaders.length - 1
//         ? 'rounded-tr-xl rounded-br-xl paragraph'
//         : ''
//     }`}
//   >
//     {index === 0 ? (
//       <div>
//         <img src={row[header].imageUrl} alt={row[header].altText} />
//         <h2>{row[header].title}</h2>
//         <span>{row[header].subtitle}</span>
//       </div>
//     ) : (
//       row[header]
//     )}
//   </td>
// ))}

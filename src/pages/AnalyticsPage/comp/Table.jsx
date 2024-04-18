// @ts-nocheck
import { forwardRef } from 'react';

const Table = forwardRef(({ data, headers }, ref) => {
	const formattedHeaders = headers.map((header) => header.replace(/\s+/g, '_'));
	return (
		<table ref={ref} className='w-full table-auto rounded-lg'>
			<thead>
				<tr className='text-left bg-white'>
					{headers.map((header) => (
						<th key={header} className='px-4 py-4 subtitle uppercase'>
							{header}
						</th>
					))}
				</tr>
			</thead>

			<tbody>
				{data.map((row, index) => (
					<tr key={index} className='rounded-xl bg-white'>
						{formattedHeaders.map((header) => (
							<td key={header} className='px-4 py-4 paagraph text-title'>
								{row[header]}
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
});
export default Table;

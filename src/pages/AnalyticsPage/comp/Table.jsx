
const Table = ({ data, headers }) => {
	const formattedHeaders = headers.map((header) => header.toLowerCase().replace(/\s+/g, '_'));
	return (
		<table className='table-auto w-full border border-collapse shadow-md'>
			<thead>
				<tr className='bg-gray-800 text-white'>
					{headers.map((header) => (
						<th key={header} className='px-4 py-2'>
							{header}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{data.map((row, index) => (
					<tr key={index} className='border-b hover:bg-gray-100'>
						{formattedHeaders.map((header) => (
							<td key={header} className='px-4 py-2'>
								{row[header]}
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
};
export default Table;

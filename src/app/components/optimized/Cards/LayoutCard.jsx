/** @param {{ children: import("react").ReactNode }} props  */
export default function LayoutCard({ children }) {
	return (
		<div className='w-full p-5 overflow-hidden bg-white rounded-lg shadow-md'>
			<div className='px-4 py-2'>{children}</div>
		</div>
	);
}

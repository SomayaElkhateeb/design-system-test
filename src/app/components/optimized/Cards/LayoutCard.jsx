/**
 * @param {{ children: import("react").ReactNode }} props
 *
 * @description
 *
 * ```jsx
 * Usage Example:
 *
 *
 * import LayoutCard from "./LayoutCard";
 *
 * export default function MyComponent() {
 *   return (
 *     <LayoutCard>
 *       <div>
 *         <h1>This is a Layout Card</h1>
 *         <p>It can contain any content you want!</p>
 *       </div>
 *     </LayoutCard>
 *   );
 * };
 * ```
 */
export default function LayoutCard(props) {
	return <div className='flex flex-col w-full p-2 overflow-hidden bg-white rounded-md shadow-md'>{props.children}</div>;
}

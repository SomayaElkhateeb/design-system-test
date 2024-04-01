// Done refactoring to type
import { capitalizeFirstLetter } from 'src/app/utils';

/**
 * @param {object} props - Props for the ClientBox component
 * @param {string} props.title - The title of the client box
 * @param {import("react").ReactNode} props.avatar - The avatar or image component for the client
 * @param {string} props.details - Additional details about the client
 *
 * @description
 *
 * Usage Example:
 *
 * ```jsx
 *
 * import { AvatarComponent } from "./AvatarComponent";
 *
 * export default function MyComponent() {
 *   return (
 *     <ClientBox
 *       title="Title"
 *       avatar={<AvatarComponent />}
 *       details="Description"
 *     />
 *   );
 * };
 * ```
 */
export default function ClientBox(props) {
	return (
		<div className='flex items-center justify-between'>
			<div className='flex items-center gap-2'>
				{props.avatar}
				<div>
					<h5 className='text-sm font-semibold text-title'>
						{capitalizeFirstLetter(props.title)}
					</h5>
					<p className='text-sm text-subtitle'>{props.details}</p>
				</div>
			</div>
		</div>
	);
}

// Default props
ClientBox.defaultProps = {
	title: 'top clients',
	details: 'This group is high niche'
};

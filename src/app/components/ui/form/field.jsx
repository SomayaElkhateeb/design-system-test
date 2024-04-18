import { useId } from 'react';
import { FormControl, FormDescription, FormFieldController, FormItem, FormLabel, FormMessage } from '.';

/**
 * @template {import("react-hook-form").FieldValues} Values
 * @template {import("react-hook-form").FieldPath<Values> } [Key=import("react-hook-form").FieldPath<Values>]
 *
 * @typedef {{
 *  formStore: import("react-hook-form").UseFormReturn<Values>;
 *  name: Key;
 *  label?: import("react").ReactNode;
 *  description?: string;
 *  render: (
 *  	field: import("react-hook-form").ControllerRenderProps<Values, Key> & {
 *  		id: string;
 *  		required?: boolean;
 *  	},
 *  ) => import("react").ReactNode;
 *  controlId?: string;
 *  required?: boolean;
 *  hideError?: boolean;
 *  container?: import("react").HTMLAttributes<HTMLDivElement>;
 * }} FormFieldProps
 */

/**
 * @template {import("react-hook-form").FieldValues} Values
 * @template {import("react-hook-form").FieldPath<Values> } [Key=import("react-hook-form").FieldPath<Values>]
 * @param {FormFieldProps<Values, Key>} props
 * @returns
 */
function FormField(props) {
	const reactId = useId();
	const controlId = `${props.controlId ?? props.name}-${reactId}`;

	return (
		<FormFieldController
			control={props.formStore.control}
			name={props.name}
			render={({ field }) => {
				return (
					<FormItem {...props.container}>
						{typeof props.label !== 'undefined' && (
							<FormLabel htmlFor={controlId} className='mb-1 text-sm capitalize text-zinc-700'>
								{props.label}
							</FormLabel>
						)}
						<FormControl>
							{props.render({
								...field,
								id: controlId,
								required: props.required,
							})}
						</FormControl>
						{props.description && <FormDescription>{props.description}</FormDescription>}
						{!props.hideError && <FormMessage />}
					</FormItem>
				);
			}}
		/>
	);
}

export default FormField;

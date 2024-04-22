import { useState, useRef, useId } from 'react';
import { useFormContext } from 'react-hook-form';
import { cn } from 'src/app/utils';
import FormField from './field';

/** @param {{ name: string; baseId: string; label: string; }} props */
function CustomFormMessage(props) {
	const { getFieldState, formState } = useFormContext();

	const fieldState = getFieldState(props.name, formState);
	const id = props.baseId;
	const formMessageId = `${id}-form-item-message`;
	const error = fieldState.error;
	const body = error ? String(error?.message) : null;

	if (!body) {
		return null;
	}

	return (
		<p id={formMessageId} className='text-sm font-medium text-destructive'>
			{props.label}: {body}
		</p>
	);
}

/**
 * @template {import('react-hook-form').FieldValues} Values
 * @template {import('react-hook-form').FieldPath<Values>} Keys {import('react-hook-form').FieldPath<Values>}
 *
 * @param {{
 *  keys: ({ [Key in Keys]: { name: Key; label: string; } })[Keys][];
 *  formStore: import('react-hook-form').UseFormReturn<Values>;
 *  defaultName?: Keys;
 *  label: string;
 *  renderer: (field: Parameters<import('./field').FormFieldProps<Values, Keys>['render']>[0] & { className: string }) => JSX.Element
 * }} props
 *
 * @example
 *
 * ```jsx
 *	<IntlFormFields
 *		formStore={formStore}
 *		keys={[
 *			{ name: 'nameEn', label: 'En' },
 *			{ name: 'nameAr', label: 'عربي' },
 *		]}
 *		label={t('Name')}
 *		renderer={(field) => <Input {...field} />}
 *	/>
 *
 *	<TabbedFormField
 *		formStore={formStore}
 *		keys={[
 *			{ name: 'descriptionEn', label: 'En' },
 *			{ name: 'descriptionAr', label: 'عربي' },
 *		]}
 *		label={t('Description')}
 *		renderer={(field) => <Textarea {...field} className={cn(field.className, 'size-full')} />}
 *	/>
 * ```
 */
export default function TabbedFormField(props) {
	const [activeName, setActiveName] = useState(/** @type {Keys} */ (props.defaultName ?? props.keys[0]?.name));
	const controlRef = useRef(/** @type {HTMLInputElement | null} */ (null));
	const reactId = useId();
	const getUniqueClassName = /** @param {string} prefix */ (prefix) => `${reactId.replace(/:/g, '')}-${prefix}`;

	return (
		<FormField
			// This is needed because react consider it to have the same value
			key={activeName}
			formStore={props.formStore}
			name={activeName}
			hideError
			container={{
				onKeyDown:
					props.keys.length <= 1
						? undefined
						: (event) => {
								if (event.altKey && event.key.toUpperCase() === 'T') {
									event.preventDefault();
									const currentActiveNameIndex = props.keys.findIndex((item) => item.name === activeName);

									if (currentActiveNameIndex === -1) {
										return;
									}

									const nextKey = props.keys[(currentActiveNameIndex + 1) % props.keys.length];

									if (!nextKey) {
										return;
									}

									setActiveName(nextKey.name);
									setTimeout(() => {
										const elem = /** @type {HTMLInputElement | null} */ (
											document.querySelector(`.${getUniqueClassName(nextKey.name)}`)
										);
										elem?.focus();
									}, 0);
								}
								// eslint-disable-next-line no-mixed-spaces-and-tabs
						  },
			}}
			label={
				<div className='flex justify-between'>
					<span>{props.label}</span>
					<div className='flex text-black bg-gray-200/70 p-0.5 -mb-2 rounded-t-lg me-2'>
						{props.keys.map((key) => (
							<button
								key={key.name}
								type='button'
								className={cn('cursor-pointer min-w-8 py-0.5 px-4', {
									'bg-white text-slate-900 rounded': activeName === key.name,
								})}
								onClick={() => {
									setActiveName(key.name);
									controlRef.current?.focus();
								}}
							>
								{key.label}
							</button>
						))}
					</div>
				</div>
			}
			render={(field) => (
				<>
					{props.renderer({ ...field, className: cn(getUniqueClassName(activeName), 'relative z-[1]') })}
					{props.keys.map((item) => (
						<CustomFormMessage key={item.name} label={item.label} name={item.name} baseId={field.id} />
					))}
				</>
			)}
		/>
	);
}
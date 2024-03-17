import React, { useState } from "react";
import { useField } from "formik";
import { ClipLoader } from "react-spinners";

const InputField = ({
  label,
  leadingIcon,
  trailingIcon,
  helperText,
  isLoading,
  validationSchema,
  textarea,
  ...props
}) => {
  const [field, meta] = useField(props);
  const [isFocused, setIsFocused] = useState(false);

  const inputClasses = `w-full p-2 rounded border flex items-center justify-center ${
    meta.touched && meta.error && !props.disabled && !isLoading
      ? "border-red-500"
      : meta.touched && !meta.error
      ? "border-green-500"
      : "border-gray-300"
  } ${props.disabled ? "bg-gray-200" : ""} ${isLoading ? "opacity-50" : ""} ${
    isFocused ? "focus:border-blue-500" : ""
  } ${!field.value && !isFocused && leadingIcon ? "pl-8" : ""}`;

  const containerClasses = `mb-4 ${
    props.disabled ? "opacity-50" : ""
  } relative`;

  const handleBlur = (e) => {
    // Use Yup validation schema to validate the input value on blur
    if (validationSchema) {
      validationSchema
        .validateAt(field.name, { [field.name]: e.target.value })
        .then(() => {})
        .catch((error) => {
          // Set Formik field error
          meta.setError(error.errors[0]);
        });
    }

    // Call the original onBlur handler if it exists
    if (props.onBlur) {
      props.onBlur(e);
    }
  };
  return (
    <div className={containerClasses}>
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <div className="relative">
        {!field.value && !isFocused && leadingIcon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none ">
            {leadingIcon}
          </div>
        )}

        {textarea ? (
          <textarea
            {...field}
            {...props}
            className={inputClasses}
            onBlur={(e) => {
              setIsFocused(false);
              handleBlur(e);
            }}
            onFocus={() => setIsFocused(true)}
          />
        ) : (
          <input
            {...field}
            {...props}
            className={inputClasses}
            onBlur={(e) => {
              setIsFocused(false);
              handleBlur(e);
            }}
            onFocus={() => setIsFocused(true)}
          />
        )}
        {isLoading && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <ClipLoader size={20} color="#6B7280" loading={isLoading} />
          </div>
        )}
      </div>
      {!field.value && !isFocused && trailingIcon && !isLoading && (
        <div
          className={`absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none ${
            props.disabled ? "mt-5" : ""
          }`}
        >
          {trailingIcon}
        </div>
      )}
      {meta.touched && meta.error && !props.disabled && !isLoading && (
        <div className="text-red-500 text-sm mt-1">{meta.error}</div>
      )}
      {!meta.error && field.value && !isFocused && !props.disabled && (
        <div className="text-green-500 text-sm mt-1">Success!</div>
      )}
      {isLoading && (
        <div className="text-gray-500 text-sm mt-1">Loading...</div>
      )}
      {helperText && !meta.error && !field.value && !props.disabled && (
        <div className="text-gray-500 text-sm mt-1">{helperText}</div>
      )}
    </div>
  );
};

export default InputField;

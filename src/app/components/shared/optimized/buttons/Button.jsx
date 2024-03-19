import React from "react";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const Button = ({
  leftIcon,
  rightIcon,
  loading,
  disabled,
  children,
  variant,
  className,
  ...props
}) => {
  const shearedStyles = `${
    !disabled &&
    "bg-blue-500 active:ring-2 active:ring-blue-600 focus:ring-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-blue-400"
  }`;

  const primaryStyles = `${leftIcon && `pl-10`}  ${
    rightIcon && `pr-10`
  } ${shearedStyles} min-w-28 relative text-white inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md`;

  const secondaryStyles = `${leftIcon && `pl-10`}  ${
    rightIcon && `pr-10`
  } min-w-28 relative bg-gray-200 text-gray-800 inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md active:ring-2 active:ring-gray-600 focus:ring-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-gray-300`;

  const tertiaryStyles = `${leftIcon && `pl-10`}  ${
    rightIcon && `pr-10`
  } min-w-28 relative bg-white text-gray-800 inline-flex items-center justify-center px-4 py-2 border border-gray-300 font-medium rounded-md active:ring-2 active:ring-gray-600 focus:ring-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-gray-100`;

  const linkStyles = `text-blue-500 hover:underline focus:outline-none`;

  // Define icon, disabled and loading styles
  const leftIconStyles = "absolute left-2";
  const rightIconStyles = "absolute right-1 border-l border-gray-50 pl-1";
  const loadingStyles =
    "cursor-not-allowed flex item-center focus:outline-none active:outline-none";
  const disabledStyles =
    "bg-gray-400 hover:bg-gray-400 cursor-not-allowed focus:outline-none active:outline-none";

  let baseStyles;
  switch (variant) {
    case "secondary":
      baseStyles = secondaryStyles;
      break;
    case "tertiary":
      baseStyles = tertiaryStyles;
      break;
    case "link":
      baseStyles = linkStyles;
      return (
        <Link
          to={props.to}
          className={`${baseStyles} ${disabled ? "cursor-not-allowed" : ""}`}
        >
          {children}
        </Link>
      );
    default:
      baseStyles = primaryStyles;
      break;
  }

  return (
    <button
      className={`${baseStyles} ${disabled && disabledStyles} ${className}`}
      {...props}
    >
      {/* leftIcon */}
      {!loading && leftIcon && (
        <span className={`${leftIcon && leftIconStyles}`}>{leftIcon}</span>
      )}

      {/* children */}
      {!loading && children}

      {/* rightIcon */}
      {!loading && rightIcon && (
        <span className={`${rightIcon && rightIconStyles}`}>{rightIcon}</span>
      )}

      {/* loading */}
      {loading && (
        <span className={`${loading && loadingStyles} `}>
          <ClipLoader color={variant ? "#000" : "#fff"} size={25} />
        </span>
      )}
    </button>
  );
};

export default Button;

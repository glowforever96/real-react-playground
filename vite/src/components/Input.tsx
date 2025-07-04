import { forwardRef, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  wrapperClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      wrapperClassName = "",
      labelClassName = "",
      inputClassName = "",
      ...inputProps
    },
    ref
  ) => {
    return (
      <div className={`flex flex-col gap-1 ${wrapperClassName}`}>
        {label && (
          <label
            className={`text-sm font-medium text-gray-700 ${labelClassName}`}
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${inputClassName}`}
          {...inputProps}
        />
      </div>
    );
  }
);

export default Input;

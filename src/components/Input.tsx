import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  type: string;
  placeholder?: string;
  label: string;
  id: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disabled?: boolean;
  step?: number;
}

const Input = ({
  type,
  placeholder,
  label,
  id,
  disabled,
  register,
  required,
  errors,
  step,
}: InputProps) => {
  return (
    <div>
      <label htmlFor={id} className="font-semibold leading-6 text-neutral-500">
        {label}
      </label>
      <div className="mt-2.5">
        {type === "textarea" ? (
          <textarea
            id={id}
            disabled={disabled}
            placeholder={placeholder}
            {...register(id, { required })}
            className={`w-full focus:border-sky-700 focus-visible:outline-none px-3 py-2 placeholder:text-neutral-500 text-neutral-900 rounded-md bg-transparent border-neutral-300 border 
            ${errors[id] && "border-red-600"}
            ${disabled && "opacity-50 cursor-default"}`}
            rows={4}
          ></textarea>
        ) : (
          <input
            type={type}
            placeholder={placeholder}
            id={id}
            step={step}
            autoComplete={id}
            disabled={disabled}
            {...register(id, { required })}
            className={`w-full focus:border-sky-700 focus-visible:outline-none px-3 py-2 placeholder:text-neutral-500 text-neutral-900 rounded-md bg-transparent border-neutral-300 border
          ${errors[id] && "border-red-600"}
          ${disabled && "opacity-50 cursor-default"}`}
          />
        )}
        {errors[id]?.type === "required" && (
          <p role="alert" className="text-red-500">
            {label} is required
          </p>
        )}
      </div>
    </div>
  );
};

export default Input;

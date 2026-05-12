import { ChangeEvent, JSX, memo } from "react";
import { IconProps } from "@/assets/icons/icon.types";

export type InputProps = {
  label: string;
  placeholder: string;
  value: string;
  error?: string;
  type?: string;
  Icon: (props: IconProps) => JSX.Element;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const InputField = memo(
  ({
    label,
    placeholder,
    value,
    error,
    type = "text",
    Icon,
    onChange,
  }: InputProps) => {
    return (
      <div className="flex flex-col gap-2">
        <label className="text-text-secondary text-sm font-semibold">
          {label}
        </label>

        <div className="relative">
          <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`placeholder:text-text-disabled text-text-primary h-10 w-full rounded-2xl border bg-[#f9f9f9] pr-12 pl-4 text-xs transition-all outline-none focus:border-black ${
              error ? "border-red-500" : "border-border"
            }`}
          />

          <Icon className="absolute top-1/2 right-4 size-6 -translate-y-1/2" />
        </div>

        {error && <span className="text-xs text-red-500">{error}</span>}
      </div>
    );
  },
);

InputField.displayName = "InputField";

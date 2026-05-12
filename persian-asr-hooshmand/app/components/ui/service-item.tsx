import { memo } from "react";
import { ServiceOption } from "@/app/components/sections/consultation/consultation-form.types";

export type ServiceProps = {
  label: ServiceOption;
  checked: boolean;
  onToggle: (value: ServiceOption) => void;
};

export const ServiceItem = memo(
  ({ label, checked, onToggle }: ServiceProps) => {
    return (
      <button
        type="button"
        onClick={() => onToggle(label)}
        className={`flex h-10 items-center gap-1 rounded-2xl border px-2 text-xs font-semibold transition-all md:gap-2 md:px-4 ${
          checked
            ? "border-text-secondary bg-text-secondary text-white"
            : "text-text-secondary border-border hover:border-border-hover bg-[#f9f9f9]"
        }`}
      >
        <input
          type="checkbox"
          checked={checked}
          readOnly
          className="pointer-events-none"
        />

        <span>{label}</span>
      </button>
    );
  },
);

ServiceItem.displayName = "ServiceItem";

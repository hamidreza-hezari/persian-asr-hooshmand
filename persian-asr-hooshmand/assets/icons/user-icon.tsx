import type { IconProps } from "./icon.types";

export default function UserIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="12" cy="12" r="9" stroke="#EF4444" strokeWidth="1.5" />
      <circle cx="12" cy="9" r="3" stroke="#EF4444" strokeWidth="1.5" />
      <path
        d="M17.5 18C16.5 16 14.5 14.5 12 14.5C9.5 14.5 7.5 16 6.5 18"
        stroke="#EF4444"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

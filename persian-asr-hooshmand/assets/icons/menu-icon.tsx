import type { IconProps } from "./icon.types";

export default function MenuIcon({ className, ...props }: IconProps) {
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
      <path
        d="M3 7H21"
        stroke="#111827"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <path
        d="M3 12H21"
        stroke="#111827"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <path
        d="M3 17H21"
        stroke="#111827"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

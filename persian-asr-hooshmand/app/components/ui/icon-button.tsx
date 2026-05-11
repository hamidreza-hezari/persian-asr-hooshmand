import { cn } from "@/utils/cn";

type IconButtonProps = {
  icon: React.ReactNode;
  label: string;
  className?: string;
};

export default function IconButton({
  icon,
  label,
  className,
}: IconButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      className={cn(
        "flex h-11 w-11 items-center justify-center rounded-xl",
        "border-border border bg-white",
        "text-text-primary",
        className,
      )}
    >
      {icon}
    </button>
  );
}

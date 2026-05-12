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
        "flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-200 md:h-11 md:w-11",
        "border-border border bg-white",
        "text-text-primary",
        className,
      )}
    >
      <div className="flex h-5 w-5 items-center justify-center md:h-6 md:w-6">
        {icon}
      </div>
    </button>
  );
}

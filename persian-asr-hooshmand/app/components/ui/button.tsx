import Link from "next/link";
import { cn } from "@/utils/cn";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  className?: string;
};

export default function Button({ children, href, className }: ButtonProps) {
  const styles = cn(
    "inline-flex items-center justify-center rounded-md",
    "bg-[linear-gradient(90deg,#6D28D9_0%,#8B5CF6_100%)]",
    "px-6 py-3.5",
    "text-sm font-bold text-white md:text-base",
    "transition-all duration-300",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return <button className={styles}>{children}</button>;
}

import Link from "next/link";

import { navConstants } from "@/app/constants/nav.constants";
import { cn } from "@/utils/cn";

type DesktopNavProps = {
  activePath: string;
};

export default function DesktopNav({ activePath = "/" }: DesktopNavProps) {
  return (
    <nav aria-label="Desktop navigation" className="hidden lg:block">
      <ul className="flex items-center gap-8 xl:gap-10">
        {navConstants.map((item) => {
          const isActive = item.href === activePath;

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "relative text-sm font-semibold transition-colors duration-300",
                  isActive
                    ? "text-text-primary"
                    : "text-text-disabled hover:text-text-secondary",
                )}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

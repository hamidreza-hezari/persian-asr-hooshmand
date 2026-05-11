import Link from "next/link";

import { navItems } from "../layout/nav-bar/nav-items";
import { cn } from "@/utils/cn";

type DesktopNavProps = {
  activePath: string;
};

export default function DesktopNav({ activePath }: DesktopNavProps) {
  return (
    <nav aria-label="Desktop navigation" className="hidden lg:block">
      <ul className="flex items-center gap-8 xl:gap-10">
        {navItems.map((item) => {
          const isActive = item.href === activePath;

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "relative text-sm font-medium transition-colors duration-300",
                  isActive
                    ? "text-text-primary"
                    : "text-text-secondary hover:text-text-primary",
                )}
              >
                {item.label}

                {isActive && (
                  <span
                    aria-hidden="true"
                    className="bg-primary absolute inset-x-0 -bottom-2 mx-auto h-0.5 w-full rounded-full"
                  />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

import Link from "next/link";

import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";

import ProfileIcon from "@/assets/icons/profile-icon";
import SearchIcon from "@/assets/icons/search-icon";
import IconButton from "@/app/components/ui/icon-button";

export default function Navbar() {
  return (
    <header className="sticky top-2 z-99 bg-(--navbar-background) md:top-0">
      <div className="page-container">
        <div className="xs:h-(--navbar-height-mobile) flex items-center justify-between gap-4 md:h-(--navbar-height-desktop)">
          <div className="flex items-center gap-3">
            <MobileNav />

            <Link
              href="/"
              className="text-text-primary inline-flex h-8 w-18 items-center justify-center rounded-4xl bg-(--logo-background) px-6 text-xs font-medium transition-all duration-200 md:h-10 md:w-25 md:text-lg"
            >
              logo
            </Link>
          </div>
          <DesktopNav activePath="/campaigns" />
          <div className="flex items-center gap-3 md:gap-4">
            <IconButton icon={<SearchIcon />} label="Search" />
            <IconButton icon={<ProfileIcon />} label="Profile" />
          </div>
        </div>
      </div>
    </header>
  );
}

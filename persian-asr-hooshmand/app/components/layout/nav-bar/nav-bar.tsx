import Link from "next/link";

import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";

import ProfileIcon from "@/assets/icons/profile-icon";
import SearchIcon from "@/assets/icons/search-icon";
import IconButton from "@/app/components/ui/icon-button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-99 bg-(--navbar-background)">
      <div className="page-container">
        <div className="flex h-(--navbar-height) items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="text-text-primary inline-flex h-12 min-w-28 items-center justify-center rounded-4xl bg-(--logo-background) px-6 text-lg font-medium"
            >
              logo
            </Link>

            <MobileNav />
          </div>
          <DesktopNav activePath="/campaigns" />
          <div className="flex items-center gap-3 lg:gap-4">
            <IconButton
              icon={<SearchIcon className="h-6 w-6" />}
              label="Search"
            />
            <IconButton
              icon={<ProfileIcon className="h-6 w-6" />}
              label="Profile"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

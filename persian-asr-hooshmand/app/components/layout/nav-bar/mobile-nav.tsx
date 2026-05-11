import MenuIcon from "@/assets/icons/menu-icon";
import IconButton from "@/app/components/ui/icon-button";

export default function MobileNav() {
  return (
    <div className="flex items-center lg:hidden">
      <IconButton icon={<MenuIcon className="h-6 w-6" />} label="Open menu" />
    </div>
  );
}

import MenuIcon from "@/assets/icons/menu-icon";
import IconButton from "@/app/components/ui/icon-button";

export default function MobileNav() {
  return (
    <div className="flex items-center lg:hidden">
      <IconButton icon={<MenuIcon />} label="Open menu" />
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

import MobileNav from "./mobile-nav";
import { ModeToggle } from "./mode-toggle";
import { NavigationMenu } from "./ui/navigation-menu";
import { MainNavigationMenu } from "./menu-link";

export function Header() {
  return (
    <header className="flex gap-8 items-center bg-background/95 p-4 border-b border-border sticky top-0 z-10 backdrop-blur-sm">
      <Link href="/" className="no-underline">
        <Image
          src="/others/CV.png"
          alt="Connectwell ventures"
          width={40}
          height={40}
          className="rounded-full"
        />
      </Link>
      <NavigationMenu className="hidden md:block">
        <MainNavigationMenu />
      </NavigationMenu>
      <div className="flex items-center gap-1 ml-auto" >
        <ModeToggle />
        <MobileNav />
      </div>
    </header>
  );
}
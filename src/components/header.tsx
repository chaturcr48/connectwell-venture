import Image from "next/image";
import Link from "next/link";

import { Button } from "./ui/button";
import MobileNav from "./mobile-nav";
import { ModeToggle } from "./mode-toggle";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu";

export function Header() {
  return (
    <header className="flex gap-8 items-center bg-background p-4 border-b border-border sticky top-0 z-10 backdrop-blur-sm">
      <Link href="/" className="no-underline">
        <Image
          src="/others/CV.png"
          alt="Connectwell ventures"
          width={40}
          height={40}
          className="rounded-full"
        />
      </Link>
      <nav className="hidden md:block">
        <NavigationMenu>
          <NavigationMenuList className="flex gap-1">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/about">About</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="relative group">
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <div className="absolute mt-2 w-48 bg-white rounded-md shadow-lg hidden group-hover:block">
                <NavigationMenuLink asChild>
                  <Link href="/products/electrical" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Electrical Products</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/products/instrumentation" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Instrumentation Products</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/products/mechanical" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Mechanical Products</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/products/automation" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Automation Products</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/products/safety" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Safety Products</Link>
                </NavigationMenuLink>
              </div>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/contact">Contact</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
      <ModeToggle />
      <MobileNav />
    </header>
  );
}
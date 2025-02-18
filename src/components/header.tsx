import Image from "next/image";
import Link from "next/link";

import { Button } from "./ui/button";
import MobileNav from "./mobile-nav";
import { ModeToggle } from "./mode-toggle";

export function Header() {
  return (
    <header className="flex gap-8 items-center bg-background p-4 border-b border-border sticky top-0 z-10 backdrop-blur-sm">
      <Link href="/" className="no-underline">
        <Image
          src="/CV.png"
          alt="Connectwell ventures"
          width={40}
          height={40}
          className="rounded-full"
        />
      </Link>
      <nav className="hidden md:block">
        <ul className="flex gap-1">
          <li>
            <Button asChild variant="link">
              <Link href="/">Home</Link>
            </Button>
          </li>
          <li>
            <Button asChild variant="link">
              <Link href="/about">About</Link>
            </Button>
          </li>
          <li>
            <Button asChild variant="link">
              <Link href="/products">Products</Link>
            </Button>
          </li>
          <li>
            <Button asChild variant="link">
              <Link href="/contact">Contact</Link>
            </Button>
          </li>
        </ul>
      </nav>
      <ModeToggle />
      <MobileNav />
    </header>
  );
}

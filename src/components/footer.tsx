import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { buttonVariants } from "./ui/button"
import { cn } from "@/lib/utils"

export default function Footer() {
  return (
    <footer className="bg-background border-border/70 dark:border-border">
      <div className="container">
        <nav aria-label="Connectwell ventures directpry" className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
            <h3 className="font-bold text-lg text-primary">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products/electrical" className={cn(buttonVariants({ variant: "link", className: "px-0 text-sm text-primary/85" }))}>
                  Electrical
                </Link>
              </li>
              <li>
                <Link href="/products/automation" className={cn(buttonVariants({ variant: "link", className: "px-0 text-sm text-primary/85" }))}>
                  Automation
                </Link>
              </li>
              <li>
                <Link href="/products/mechanical" className={cn(buttonVariants({ variant: "link", className: "px-0 text-sm text-primary/85" }))}>
                  Mechanical
                </Link>
              </li>
              <li>
                <Link href="/products/spill-pallet" className={cn(buttonVariants({ variant: "link", className: "px-0 text-sm text-primary/85" }))}>
                  Spill Pallet
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-primary">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className={cn(buttonVariants({ variant: "link", className: "px-0 text-sm text-primary/85" }))}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className={cn(buttonVariants({ variant: "link", className: "px-0 text-sm text-primary/85" }))}>
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/" className={cn(buttonVariants({ variant: "link", className: "px-0 text-sm text-primary/85" }))}>
                  Press
                </Link>
              </li>
              <li>
                <Link href="/" className={cn(buttonVariants({ variant: "link", className: "px-0 text-sm text-primary/85" }))}>
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="mt-12 pt-8 border-t border-zinc-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-primary">&copy; {new Date().getFullYear()} Connectwell Ventures. All rights reserved.</p>
            </div>
            <div className="flex space-x-2">
              <Link  target="_blank" rel="noreferrer" href="https://facebook.com" className={buttonVariants({ variant: "ghost" })}>
                <Facebook size={24} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link target="_blank" rel="noreferrer" href="https://twitter.com" className={buttonVariants({ variant: "ghost" })}>
                <Twitter size={24} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link target="_blank" rel="noreferrer" href="https://instagram.com" className={buttonVariants({ variant: "ghost" })}>
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link target="_blank" rel="noreferrer" href="https://linkedin.com" className={buttonVariants({ variant: "ghost" })}>
                <Linkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}


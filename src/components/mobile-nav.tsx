"use client";

import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { Button } from "./ui/button";
  

export default function MobileNav() {
  const [open, setOpen] = useState(false)

  const handleClose = () => setOpen(false)

  return (
    <Dialog open={open} onOpenChange={(isOpen) => setOpen(isOpen)} >
        <DialogTrigger asChild >
            <Button variant="ghost" className="block md:hidden ml-auto">
              <MenuIcon />
            </Button>
        </DialogTrigger>
        <DialogContent className="left-0 top-0 translate-x-0 translate-y-0 max-w-screen" >
          <DialogTitle className="sr-only" >Navigation menus</DialogTitle>
          <nav>
            <ul className="flex flex-col gap-1 w-[98%]" >
              <li>
                <Button asChild variant="link" className="w-full justify-start" >
                  <Link href="/" onClick={handleClose} >Home</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="link" className="w-full justify-start" >
                  <Link href="/about" onClick={handleClose} >About</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="link" className="w-full justify-start" >
                  <Link href="/" onClick={handleClose} >Products</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="link" className="w-full justify-start" >
                  <Link href="/" onClick={handleClose} >Contact</Link>
                </Button>
              </li>
            </ul>
          </nav>
        </DialogContent>
    </Dialog>
  );
}

"use client";

import { MenuIcon } from "lucide-react";
import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { NavigationMenu } from "./ui/navigation-menu";
import { MainNavigationMenu } from "./menu-link";


export default function MobileNav() {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <Dialog open={open} onOpenChange={(isOpen) => setOpen(isOpen)}>
      <DialogTrigger asChild>
        <Button variant="ghost" className="block md:hidden">
          <MenuIcon />
        </Button>
      </DialogTrigger>
      <DialogContent aria-describedby={undefined} overlayClassname="md:hidden" className="left-[-2px] top-0 translate-x-0 translate-y-0 max-w-[calc(100vw-20px)] m-[10px] rounded-md md:hidden">
        <DialogTitle className="sr-only">Navigation menus</DialogTitle>
        <NavigationMenu className="items-start justify-start max-w-full md:max-w-max md:items-center md:justify-center" menuViewPortClassName="top-[calc(100%-80px)] md:top-full w-full" >
          <MainNavigationMenu onClick={handleClose} />
        </NavigationMenu>
      </DialogContent>
    </Dialog>
  );
}
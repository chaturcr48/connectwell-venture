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
        <Button autoFocus variant="ghost" className="block md:hidden">
          <MenuIcon />
        </Button>
      </DialogTrigger>
      <DialogContent overlayClassname="md:hidden" className="left-0 top-0 translate-x-0 translate-y-0 max-w-screen md:hidden">
        <DialogTitle className="sr-only">Navigation menus</DialogTitle>
        <NavigationMenu className="items-start justify-start max-w-full md:max-w-max md:items-center md:justify-center" menuViewPortClassName="top-[calc(100%-36px)] md:top-full w-full" >
          <MainNavigationMenu onClick={handleClose} />
        </NavigationMenu>
      </DialogContent>
    </Dialog>
  );
}
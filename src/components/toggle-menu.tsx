"use client";

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { Button } from "./ui/button";
import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
  

export default function ToggleMenu() {
  const [open, setOpen] = useState(false)
  return (
    <Popover open={open} onOpenChange={(isOpen) => setOpen(isOpen)} >
        <PopoverTrigger asChild >
            <Button variant="ghost" className="block md:hidden ml-auto text-primary-foreground">
              {open ? <XIcon />  : <MenuIcon />}
            </Button>
        </PopoverTrigger>
        <PopoverContent>Place content for the popover here.</PopoverContent>
    </Popover>
  );
}

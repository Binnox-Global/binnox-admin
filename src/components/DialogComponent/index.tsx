import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";

interface DialogComponentProps {
  children: React.ReactNode;
  trigger: React.ReactNode;
  title: string;
}

export function DialogComponent({
  trigger,
  title,
  children,
}: DialogComponentProps) {
  return (
    <Dialog>
      <DialogTrigger>{trigger}</DialogTrigger>
      <DialogContent className="bg-white ro unded-[50px] w-full">
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{children}</DialogDescription>
      </DialogContent>
    </Dialog>
  );
}

//  default DialogComponent;

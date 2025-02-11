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
      <DialogContent className="bg-white ro unded-[50px] min-w-[900px] border border-red-500">
        {/* <DialogTitle>{title}</DialogTitle> */}
        {/* <DialogDescription>{children}</DialogDescription> */}
        {children}
      </DialogContent>
    </Dialog>
  );
}

//  default DialogComponent;

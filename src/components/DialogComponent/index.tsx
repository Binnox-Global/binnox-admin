"use client";
import React, { useState } from "react";
import { Dialog2CloseSvg, DialogCloseSvg } from "../icons/DialogCloseSvg";
import "./style.scss";
import { useDialog } from "@/contexts/DialogContext";

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
  // const [isOpen, setIsOpen] = useState(false);
  const { isOpen, toggleDialog } = useDialog();
  return (
    <div className="DialogComponent">
      <div onClick={() => toggleDialog("open")}>{trigger}</div>
      {isOpen && (
        <div className="Dialog-background bg-black/40 backdrop-blur-[30px]">
          <div className="relative p b-20 border border-red-500 z-[20]">
            <div
              className="close-button cursor-pointer absolute top-[22px] right-[23px] p-2 z-[10]"
              onClick={() => toggleDialog(null)}
            >
              <DialogCloseSvg />
            </div>
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

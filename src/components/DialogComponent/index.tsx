"use client";
import React, { useState } from "react";
import { Dialog2CloseSvg, DialogCloseSvg } from "../icons/DialogCloseSvg";

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
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="DialogComponent">
      <div onClick={() => setIsOpen(!isOpen)}>{trigger}</div>
      {isOpen && (
        <div className=" absolute top-0 left-0 right-0 min-h-full  z-[8] flex justify-center items-center py-[110px] pb -[50px] bg-black/40 backdrop-blur-[30px] border border-red-500">
          <div className="relative border border-red-500">
            <div
              className="close-button cursor-pointer absolute top-[22px] right-[23px] p-2 z-[10] "
              onClick={() => setIsOpen(false)}
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

//  default DialogComponent;

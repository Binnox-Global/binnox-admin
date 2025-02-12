"use client";

import { createContext, useContext, useState } from "react";

interface DialogContextType {
  // isOpen: boolean;
  isOpen: null | string;
  toggleDialog: (dialog: string) => void;
}
interface ToggleDialogType {
  (dialog: string): void;
}

const DialogContext = createContext<DialogContextType | undefined>(undefined);

export function DialogProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState<string | null>(null);

  const toggleDialog: ToggleDialogType = (dialog) => {
    setIsOpen((prev) => (prev === null ? dialog : null));
  };
  return (
    <DialogContext.Provider value={{ isOpen, toggleDialog }}>
      {children}
    </DialogContext.Provider>
  );
}

export const useDialog = () => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error("useDialog must be used within DialogProvider");
  }
  return context;
};

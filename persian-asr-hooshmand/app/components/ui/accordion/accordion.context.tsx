"use client";

import { createContext, useContext } from "react";

export type AccordionValue = string;

export type AccordionContextValue = {
  openItems: Set<AccordionValue>;
  toggleItem: (id: AccordionValue) => void;
  isOpen: (id: AccordionValue) => boolean;
};

const AccordionContext = createContext<AccordionContextValue | null>(null);

export function useAccordionContext() {
  const context = useContext(AccordionContext);

  if (!context) {
    throw new Error("Accordion components must be used inside Accordion.Root");
  }

  return context;
}

export default AccordionContext;

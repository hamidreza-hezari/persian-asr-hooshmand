"use client";

import React, { ReactNode } from "react";

import AccordionContext, {
  AccordionContextValue,
  useAccordionContext,
} from "./accordion.context";
import PlusIcon from "@/assets/icons/plus-icon";

type RootProps = {
  children: ReactNode;
  value: AccordionContextValue;
};

function Root({ children, value }: RootProps) {
  return (
    <AccordionContext.Provider value={value}>
      <div className="flex flex-col gap-3 px-3">{children}</div>
    </AccordionContext.Provider>
  );
}

type ItemProps = {
  id: string;
  children: ReactNode;
};

function Item({ children }: ItemProps) {
  return <div className="overflow-hidden rounded-xl">{children}</div>;
}

type TriggerProps = {
  id: string;
  children: ReactNode;
};

function Trigger({ id, children }: TriggerProps) {
  const { isOpen, toggleItem } = useAccordionContext();

  const open = isOpen(id);

  return (
    <button
      type="button"
      aria-expanded={open}
      aria-controls={`accordion-content-${id}`}
      id={`accordion-trigger-${id}`}
      onClick={() => toggleItem(id)}
      className="border-border flex w-full items-center justify-between gap-4 rounded-xl border bg-neutral-50 px-5 py-4 text-left transition-colors duration-200 hover:bg-neutral-100"
    >
      <span className="text-text-primary flex-1 text-right text-sm font-medium md:text-base">
        {children}
      </span>

      <div
        className="text-text-primary flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-black transition-transform duration-300"
        style={{
          transform: open ? "rotate(45deg)" : "rotate(0deg)",
        }}
      >
        <PlusIcon className="h-4 w-4" />
      </div>
    </button>
  );
}

type ContentProps = {
  id: string;
  children: ReactNode;
};

function Content({ id, children }: ContentProps) {
  const { isOpen } = useAccordionContext();

  const open = isOpen(id);

  return (
    <div
      id={`accordion-content-${id}`}
      role="region"
      aria-labelledby={`accordion-trigger-${id}`}
      className={`grid transition-all duration-300 ease-in-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"} `}
    >
      <div className="overflow-hidden">
        <div className="text-text-primary mt-1 rounded-xl bg-neutral-100 px-5 py-4 text-xs leading-relaxed md:text-sm">
          {children}
        </div>
      </div>
    </div>
  );
}

export const Accordion = {
  Root,
  Item,
  Trigger,
  Content,
};

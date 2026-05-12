"use client";

import React, { createContext, type ReactNode, useContext } from "react";
import { FAQItem } from "@/app/constants/faqs.constants";

type AccordionContextValue = {
  openItems: Set<string>;
  toggleItem: (id: string) => void;
  isOpen: (id: string) => boolean;
};

const AccordionContext = createContext<AccordionContextValue | null>(null);

function useAccordionContext() {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("Accordion components must be used within FAQAccordion");
  }
  return context;
}

type FAQAccordionProps = {
  children: ReactNode;
  value: AccordionContextValue;
};

export function FAQAccordionProvider({ children, value }: FAQAccordionProps) {
  return (
    <AccordionContext.Provider value={value}>
      <div className="flex flex-col gap-2 md:gap-4">{children}</div>
    </AccordionContext.Provider>
  );
}

type AccordionItemProps = {
  item: FAQItem;
  children: ReactNode;
};

function AccordionItem({ item, children }: AccordionItemProps) {
  return (
    <div
      className="overflow-hidden rounded-md transition-all duration-200"
      dir="rtl"
    >
      {children}
    </div>
  );
}

type AccordionTriggerProps = {
  id: string;
  question: string;
};

function AccordionTrigger({ id, question }: AccordionTriggerProps) {
  const { toggleItem, isOpen } = useAccordionContext();
  const open = isOpen(id);

  return (
    <button
      onClick={() => toggleItem(id)}
      className="hover:bg-border-hover border-border flex w-full items-center justify-between gap-4 rounded-md border bg-[#FCFCFC] px-4 py-4 text-right transition-colors md:h-16 md:px-6"
      aria-expanded={open}
      type="button"
    >
      <span className="flex-1 text-sm font-medium text-black md:text-base">
        {question}
      </span>
      <div
        className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-black transition-transform duration-200 md:h-7 md:w-7"
        style={{
          transform: open ? "rotate(45deg)" : "rotate(0deg)",
        }}
      >
        <svg
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="md:h-5 md:w-5"
        >
          <path
            d="M8 3.5V12.5M3.5 8H12.5"
            stroke="black"
            strokeWidth="1"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </button>
  );
}

type AccordionContentProps = {
  id: string;
  answer: string;
};

function AccordionContent({ id, answer }: AccordionContentProps) {
  const { isOpen } = useAccordionContext();
  const open = isOpen(id);

  return (
    <div
      id={`faq-content-${id}`}
      role="region"
      aria-labelledby={`faq-trigger-${id}`}
      className={`grid transition-all duration-300 ease-in-out ${
        open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
      }`}
    >
      <div className="overflow-hidden">
        <div className="bg-border text-text-secondary px-4 pt-2 pb-4 text-right text-xs leading-relaxed md:px-6 md:pt-3 md:pb-6 md:text-base">
          {answer}
        </div>
      </div>
    </div>
  );
}

export const FAQAccordion = {
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Content: AccordionContent,
};

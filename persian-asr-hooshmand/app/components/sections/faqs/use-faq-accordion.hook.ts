"use client";

import { useCallback, useState } from "react";

export const useFAQAccordion = (allowMultiple = false) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = useCallback(
    (id: string) => {
      setOpenItems((prev) => {
        const next = new Set(prev);

        if (next.has(id)) {
          next.delete(id);
        } else {
          if (!allowMultiple) {
            next.clear();
          }
          next.add(id);
        }

        return next;
      });
    },
    [allowMultiple],
  );

  const isOpen = useCallback((id: string) => openItems.has(id), [openItems]);

  return {
    openItems,
    toggleItem,
    isOpen,
  };
};

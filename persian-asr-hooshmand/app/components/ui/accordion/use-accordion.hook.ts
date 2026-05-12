"use client";

import { useCallback, useState } from "react";

type Options = {
  multiple?: boolean;
  defaultOpenItems?: string[];
};

export function useAccordion({
  multiple = false,
  defaultOpenItems = [],
}: Options = {}) {
  const [openItems, setOpenItems] = useState(new Set(defaultOpenItems));

  const isOpen = useCallback((id: string) => openItems.has(id), [openItems]);

  const toggleItem = useCallback(
    (id: string) => {
      setOpenItems((prev) => {
        const next = new Set(prev);

        if (next.has(id)) {
          next.delete(id);
        } else {
          if (!multiple) {
            next.clear();
          }

          next.add(id);
        }

        return next;
      });
    },
    [multiple],
  );

  return {
    openItems,
    isOpen,
    toggleItem,
  };
}

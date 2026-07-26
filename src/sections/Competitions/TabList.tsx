import { useRef } from "react";
import clsx from "clsx";
import type { EventStatus } from "@/types";

interface Tab {
  key: EventStatus;
  label: string;
}

interface TabListProps {
  tabs: Tab[];
  activeTab: EventStatus;
  onTabChange: (tab: EventStatus) => void;
}

export function TabList({ tabs, activeTab, onTabChange }: TabListProps) {
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  function focusTab(index: number) {
    const tab = tabs[index];
    if (!tab) return;
    tabRefs.current[tab.key]?.focus();
    onTabChange(tab.key);
  }

  function handleKeyDown(e: React.KeyboardEvent, index: number) {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      focusTab((index + 1) % tabs.length);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      focusTab((index - 1 + tabs.length) % tabs.length);
    } else if (e.key === "Home") {
      e.preventDefault();
      focusTab(0);
    } else if (e.key === "End") {
      e.preventDefault();
      focusTab(tabs.length - 1);
    }
  }

  return (
    <div role="tablist" aria-label="Events" className="flex gap-2 border-b border-surface-border">
      {tabs.map((tab, index) => {
        const isActive = tab.key === activeTab;
        return (
          <button
            key={tab.key}
            ref={(el) => {
              tabRefs.current[tab.key] = el;
            }}
            role="tab"
            id={`tab-${tab.key}`}
            aria-selected={isActive}
            aria-controls={`tabpanel-${tab.key}`}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onTabChange(tab.key)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={clsx(
              "relative px-4 py-3 text-sm font-semibold uppercase tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red rounded-t",
              isActive
                ? "text-brand-red"
                : "text-text-secondary hover:text-text-primary"
            )}
          >
            {tab.label}
            {isActive && (
              <span
                aria-hidden="true"
                className="absolute inset-x-0 -bottom-px h-0.5 bg-brand-red"
              />
            )}
          </button>
        );
      })}
    </div>
  );
}

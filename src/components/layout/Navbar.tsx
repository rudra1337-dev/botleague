import { useEffect, useRef, useState } from "react";
import { Menu, X, Zap } from "lucide-react";
import { navLinks } from "@/data/nav";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  function closeMenu() {
    setIsMenuOpen(false);
    toggleRef.current?.focus();
  }

  useEffect(() => {
    if (!isMenuOpen) return;

    // Move focus into the menu, and trap Tab/Shift+Tab within it while open.
    const focusables = menuRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])'
    );
    focusables?.[0]?.focus();

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        closeMenu();
        return;
      }
      if (e.key !== "Tab" || !focusables || focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-surface-border bg-surface-base/90 backdrop-blur">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
      >
        {/* PLACEHOLDER — swap Zap for the real BotLeague logo/wordmark from Figma */}
        <a href="/" className="flex items-center gap-2 font-bold text-text-primary">
          <Zap className="h-6 w-6 text-brand-red" aria-hidden="true" />
          BotLeague
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-text-secondary transition-colors hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 focus-visible:ring-offset-surface-base rounded"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="outline">Login</Button>
          <Button variant="primary">Register Now</Button>
        </div>

        <button
          ref={toggleRef}
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav-menu"
          onClick={() => setIsMenuOpen((v) => !v)}
          className="rounded-md p-2 text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red lg:hidden"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {isMenuOpen && (
        <div
          ref={menuRef}
          id="mobile-nav-menu"
          className="border-t border-surface-border px-4 pb-6 pt-2 lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block rounded-md px-2 py-2.5 text-sm font-medium text-text-secondary hover:bg-surface-raised hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-2">
            <Button variant="outline" className="w-full">
              Login
            </Button>
            <Button variant="primary" className="w-full">
              Register Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

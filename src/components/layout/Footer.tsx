import { navLinks } from "@/data/nav";
import {
  YoutubeIcon,
  InstagramIcon,
  FacebookIcon,
  TwitterIcon,
} from "@/components/ui/SocialIcons";

const socialLinks = [
  { label: "YouTube", href: "https://youtube.com", Icon: YoutubeIcon },
  { label: "Instagram", href: "https://instagram.com", Icon: InstagramIcon },
  { label: "Facebook", href: "https://facebook.com", Icon: FacebookIcon },
  { label: "Twitter", href: "https://twitter.com", Icon: TwitterIcon },
];

export function Footer() {
  return (
    <footer className="border-t border-surface-border bg-surface-base">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:justify-between lg:px-8">
        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-primary">
            Quick Links
          </h2>
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-text-secondary hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red rounded"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-primary">
            Social Media
          </h2>
          <div className="flex gap-3">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={`Follow us on ${label}`}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-surface-border text-text-secondary transition-colors hover:border-brand-red hover:text-brand-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <p className="border-t border-surface-border px-4 py-4 text-center text-xs text-text-muted sm:px-6 lg:px-8">
        © {new Date().getFullYear()} BotLeague. All rights reserved.
      </p>
    </footer>
  );
}

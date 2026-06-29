"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/dashboard/companies", label: "My companies" },
  { href: "/dashboard/companies/new", label: "Add company" },
  { href: "/dashboard/messages", label: "Messages" },
  { href: "/dashboard/offers", label: "Offers" },
  { href: "/dashboard/analytics", label: "Analytics" },
  { href: "/dashboard/bookmarks", label: "Bookmarks" },
  { href: "/dashboard/profile", label: "Profile" },
  { href: "/dashboard/billing", label: "Billing" },
  { href: "/dashboard/settings", label: "Settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-56 shrink-0 border-r border-line min-h-screen p-4 flex flex-col">
      <p className="font-voice text-lg text-text-primary mb-6 px-2">Vxn Store</p>
      <nav className="flex flex-col gap-1">
        {links.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm px-3 py-2 rounded-md transition-colors ${
                active
                  ? "bg-brass/10 text-brass-strong"
                  : "text-text-secondary hover:bg-paper-raised"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
      <button className="mt-auto text-sm text-text-muted px-3 py-2 text-left hover:text-rust">
        Log out
      </button>
    </aside>
  );
}

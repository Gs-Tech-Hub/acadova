import Link from 'next/link';
import { GraduationCap } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

const links = [
  { href: '/programs', label: 'Courses' },
  { href: '/about', label: 'About Acadova' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#e5e3dc] bg-[#f8f7f2]/95 backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex min-h-18 max-w-7xl items-center justify-between gap-4 px-6 py-3 sm:px-8"
      >
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0b2d52] text-[#f4b942]">
            <GraduationCap className="h-6 w-6" aria-hidden="true" />
          </span>
          <span className="font-heading text-xl font-extrabold tracking-[-0.04em] text-[#0b2d52]">
            acadova<span className="text-[#007c85]">.</span>
          </span>
        </Link>

        <div className="flex items-center gap-1 sm:gap-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${link.href === '/about' ? 'hidden sm:inline-flex' : 'inline-flex'} rounded-full px-3 py-2 text-xs font-bold text-[#425162] transition-colors hover:bg-white hover:text-[#007c85] sm:px-4 sm:text-sm`}
            >
              {link.label}
            </Link>
          ))}
          <div className="hidden sm:flex">
            <ThemeToggle />
          </div>
          <Link
            href="/apply"
            className="inline-flex h-10 items-center justify-center rounded-full bg-[#0b2d52] px-4 text-xs font-bold text-white transition-colors hover:bg-[#174674] sm:px-5 sm:text-sm"
          >
            Enquire
          </Link>
        </div>
      </nav>
    </header>
  );
}

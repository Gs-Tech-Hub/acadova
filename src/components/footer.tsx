import Link from 'next/link';
import { GraduationCap } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0b2d52] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 sm:py-14">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[#f4b942]">
                <GraduationCap className="h-6 w-6" aria-hidden="true" />
              </span>
              <span className="font-heading text-xl font-extrabold tracking-[-0.04em]">
                acadova<span className="text-[#f4b942]">.</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-6 text-white/65">
              A place to learn with purpose, grow with confidence, and lead with curiosity.
            </p>
            <p className="mt-5 font-heading text-sm font-bold text-[#f4b942]">Learn. Grow. Lead.</p>
          </div>

          <div className="flex gap-12">
            <div className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-white/50">
                Explore
              </h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/programs" className="text-white/80 transition-colors hover:text-[#f4b942]">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-white/80 transition-colors hover:text-[#f4b942]">
                    About Acadova
                  </Link>
                </li>
                <li>
                  <Link href="/apply" className="text-white/80 transition-colors hover:text-[#f4b942]">
                    Enquiries
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-white/50">
                Keep in touch
              </h2>
              <a
                href="mailto:hello@acadova.edu"
                className="text-sm text-white/80 transition-colors hover:text-[#f4b942]"
              >
                hello@acadova.edu
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/15 pt-5 text-xs text-white/50">
          © {new Date().getFullYear()} Acadova. Learn. Grow. Lead.
        </div>
      </div>
    </footer>
  );
}

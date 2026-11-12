import Link from 'next/link';
import { ArrowLeft, ArrowRight, BookOpen, MessageCircle } from 'lucide-react';

const fieldClassName =
  'w-full rounded-xl border border-[#dcded9] bg-white px-4 py-3 text-sm text-[#2d3748] placeholder:text-[#89939c] focus:border-[#007c85] focus:outline-none focus:ring-2 focus:ring-[#007c85]/15';

export default function ApplyPage() {
  return (
    <div>
      <section className="bg-[#0b2d52] text-white">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-18">
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 text-sm font-bold text-white/70 transition-colors hover:text-[#f4b942]"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to courses
          </Link>
          <p className="mt-8 text-sm font-bold uppercase tracking-[0.18em] text-[#f4b942]">
            Start a conversation
          </p>
          <h1 className="mt-3 font-heading text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
            Let&apos;s find your next step.
          </h1>
          <p className="mt-4 max-w-2xl leading-7 text-white/70">
            Curious about a course or not sure where to begin? Share a little about what you&apos;re
            looking for.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:px-8 sm:py-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
        <aside className="space-y-5">
          <div className="rounded-3xl bg-[#e6f0ed] p-6">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#007c85]">
              <BookOpen className="h-5 w-5" aria-hidden="true" />
            </span>
            <h2 className="mt-5 font-heading text-lg font-bold text-[#0b2d52]">
              A good place to begin
            </h2>
            <p className="mt-2 text-sm leading-6 text-[#596574]">
              Tell us what you&apos;re interested in and what you hope to learn. We can help you
              explore your options.
            </p>
            <Link
              href="/programs"
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#007c85] hover:text-[#0b2d52]"
            >
              Browse courses
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="flex gap-4 rounded-3xl border border-[#e5e3dc] bg-white p-6">
            <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#007c85]" aria-hidden="true" />
            <div>
              <h2 className="font-heading text-sm font-bold text-[#0b2d52]">Prefer email?</h2>
              <a
                href="mailto:hello@acadova.edu"
                className="mt-1 inline-block text-sm text-[#007c85] hover:underline"
              >
                hello@acadova.edu
              </a>
            </div>
          </div>
        </aside>

        <form
          action="mailto:hello@acadova.edu"
          method="post"
          encType="text/plain"
          className="rounded-3xl border border-[#e5e3dc] bg-white p-6 sm:p-9"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#2d3748]" htmlFor="name">
                Your name
              </label>
              <input
                className={fieldClassName}
                id="name"
                name="name"
                placeholder="How should we address you?"
                autoComplete="name"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#2d3748]" htmlFor="email">
                Email address
              </label>
              <input
                className={fieldClassName}
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <label className="text-sm font-bold text-[#2d3748]" htmlFor="course">
                What are you interested in?
              </label>
              <select className={fieldClassName} id="course" name="course" defaultValue="">
                <option value="">I&apos;m exploring my options</option>
                <option value="business-entrepreneurship">Business &amp; Entrepreneurship</option>
                <option value="data-science-ai">Data Science &amp; AI</option>
                <option value="design-creative-practice">Design &amp; Creative Practice</option>
                <option value="wellbeing-psychology">Wellbeing &amp; Psychology</option>
                <option value="leadership-communication">Leadership &amp; Communication</option>
                <option value="climate-sustainability">Climate &amp; Sustainability</option>
              </select>
            </div>
            <div className="space-y-2 sm:col-span-2">
              <label className="text-sm font-bold text-[#2d3748]" htmlFor="message">
                What would you like to know?
              </label>
              <textarea
                className={`${fieldClassName} min-h-32 resize-y`}
                id="message"
                name="message"
                placeholder="Share a little about what you're hoping to learn."
                rows={4}
                required
              />
            </div>
          </div>
          <button
            className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#0b2d52] px-6 text-sm font-bold text-white transition-colors hover:bg-[#174674] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#007c85]"
            type="submit"
          >
            Send an enquiry
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
          <p className="mt-4 text-center text-xs leading-5 text-[#78838c]">
            Sending an enquiry opens your email app so you can send your message to Acadova.
          </p>
        </form>
      </section>
    </div>
  );
}

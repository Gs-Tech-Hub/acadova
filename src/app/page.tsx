import Link from 'next/link';
import {
  ArrowDownRight,
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  Check,
  Clock3,
  Code2,
  GraduationCap,
  HeartPulse,
  Palette,
  Sparkles,
  Users,
} from 'lucide-react';

const courses = [
  {
    category: 'Business',
    title: 'Business & Entrepreneurship',
    description: 'Turn bright ideas into thoughtful, sustainable ventures.',
    duration: '8 weeks',
    icon: BriefcaseBusiness,
    tone: 'bg-[#e6f0ed] text-[#007c85]',
    courseId: 'business-entrepreneurship',
  },
  {
    category: 'Technology',
    title: 'Data Science & AI',
    description: 'Make sense of data and build what comes next.',
    duration: '12 weeks',
    icon: Code2,
    tone: 'bg-[#e8edf4] text-[#0b2d52]',
    courseId: 'data-science-ai',
  },
  {
    category: 'Creative',
    title: 'Design & Creative Practice',
    description: 'Shape meaningful digital experiences with confidence.',
    duration: '10 weeks',
    icon: Palette,
    tone: 'bg-[#fbf0d7] text-[#8a6010]',
    courseId: 'design-creative-practice',
  },
];

const benefits = [
  {
    icon: Users,
    title: 'Learn together',
    description: 'Small, welcoming cohorts make room for good questions and new connections.',
  },
  {
    icon: BookOpen,
    title: 'Learn by doing',
    description: 'Practical projects help you bring new skills into your work and your world.',
  },
  {
    icon: GraduationCap,
    title: 'Guided by experts',
    description: 'Get thoughtful guidance from people who put their craft into practice.',
  },
];

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-36 -top-32 h-[34rem] w-[34rem] rounded-full bg-[#e6f0ed] opacity-70 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-28 lg:pt-24">
          <div className="max-w-2xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#d7e5df] bg-white/80 px-4 py-2 text-sm font-bold text-[#007c85] shadow-sm">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              A different kind of learning institution
            </div>
            <h1 className="max-w-[13ch] text-5xl font-extrabold leading-[1.08] tracking-[-0.045em] text-[#0b2d52] sm:text-6xl lg:text-[4.5rem]">
              Make room for what&apos;s next.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#596574] sm:text-xl">
              Curious minds belong here. Explore practical courses, meet inspiring people, and
              build skills for a future you choose.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/programs"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0b2d52] px-6 text-sm font-bold text-white transition-colors hover:bg-[#174674] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#007c85]"
              >
                Explore our courses
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/about"
                className="inline-flex h-12 items-center justify-center rounded-full px-5 text-sm font-bold text-[#0b2d52] transition-colors hover:bg-white"
              >
                Get to know us
              </Link>
            </div>
            <div className="mt-11 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-[#596574]">
              <span className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-[#007c85]" aria-hidden="true" />
                Flexible, expert-led learning
              </span>
              <span className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-[#007c85]" aria-hidden="true" />
                Welcoming to every starting point
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[34rem] lg:ml-auto">
            <div className="absolute -left-7 top-16 z-10 hidden h-20 w-20 rotate-[-12deg] items-center justify-center rounded-3xl bg-[#f4b942] text-[#0b2d52] shadow-lg sm:flex">
              <Sparkles className="h-8 w-8" aria-hidden="true" />
            </div>
            <div className="relative overflow-hidden rounded-[2rem] bg-[#0b2d52] p-7 text-white shadow-[0_28px_70px_-30px_rgba(11,45,82,0.55)] sm:p-9">
              <div className="absolute -right-16 -top-20 h-60 w-60 rounded-full border-[34px] border-white/5" />
              <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full border-[38px] border-[#007c85]/30" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#f4d27e]">
                    Your next chapter
                  </span>
                  <ArrowDownRight className="h-5 w-5 text-white/60" aria-hidden="true" />
                </div>
                <p className="mt-10 max-w-sm font-heading text-3xl font-bold leading-tight sm:text-4xl">
                  Learning that moves with you.
                </p>
                <p className="mt-3 max-w-sm text-sm leading-6 text-white/70">
                  A little curiosity can take you somewhere extraordinary.
                </p>
                <div className="mt-9 rounded-2xl bg-white p-5 text-[#2d3748] shadow-xl sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e6f0ed] text-[#007c85]">
                      <HeartPulse className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <span className="rounded-full bg-[#fbf0d7] px-3 py-1 text-xs font-bold text-[#79570f]">
                      Enrolling now
                    </span>
                  </div>
                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-[#007c85]">
                    Featured course
                  </p>
                  <h2 className="mt-1 font-heading text-xl font-bold text-[#0b2d52]">
                    Wellbeing & Psychology
                  </h2>
                  <div className="mt-4 flex items-center justify-between border-t border-[#eeece6] pt-4 text-sm text-[#64707b]">
                    <span className="flex items-center gap-2">
                      <Clock3 className="h-4 w-4" aria-hidden="true" />
                      6 weeks
                    </span>
                    <Link
                      href="/programs#wellbeing-psychology"
                      className="inline-flex items-center gap-1 font-bold text-[#007c85] hover:text-[#0b2d52]"
                    >
                      Discover
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-7 right-5 hidden items-center gap-3 rounded-2xl border border-[#e8e5dc] bg-white px-4 py-3 shadow-lg sm:flex">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f4b942] text-[#0b2d52]">
                <GraduationCap className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <p className="font-heading text-sm font-bold text-[#0b2d52]">Learn. Grow. Lead.</p>
                <p className="text-xs text-[#64707b]">Your future starts here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#e5e3dc] bg-white/70">
        <div className="mx-auto grid max-w-7xl gap-7 px-6 py-7 sm:grid-cols-3 sm:px-8">
          {[
            { value: '01', label: 'Learn at your pace' },
            { value: '02', label: 'Put ideas into practice' },
            { value: '03', label: 'Find your people' },
          ].map((item) => (
            <div key={item.value} className="flex items-center gap-4">
              <span className="font-heading text-sm font-bold text-[#007c85]">{item.value}</span>
              <span className="h-px flex-1 bg-[#e5e3dc]" />
              <span className="text-sm font-bold text-[#0b2d52]">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-28">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#007c85]">
              Find your direction
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-[-0.035em] text-[#0b2d52] sm:text-4xl">
              Courses for a world in motion.
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-[#64707b]">
              From a first step to a fresh perspective, discover learning designed to meet you where
              you are.
            </p>
          </div>
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 self-start text-sm font-bold text-[#007c85] hover:text-[#0b2d52] sm:self-auto"
          >
            View all courses
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {courses.map((course) => {
            const Icon = course.icon;

            return (
              <Link
                key={course.courseId}
                href={`/programs#${course.courseId}`}
                className="group rounded-3xl border border-[#e8e5dc] bg-white p-6 transition-all hover:-translate-y-1 hover:border-[#bdd5ce] hover:shadow-[0_20px_40px_-30px_rgba(11,45,82,0.45)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#007c85]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#64707b]">
                    {course.category}
                  </span>
                  <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${course.tone}`}>
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                </div>
                <h3 className="mt-8 font-heading text-xl font-bold text-[#0b2d52]">
                  {course.title}
                </h3>
                <p className="mt-3 min-h-12 text-sm leading-6 text-[#64707b]">
                  {course.description}
                </p>
                <div className="mt-7 flex items-center justify-between border-t border-[#eeece6] pt-5 text-sm">
                  <span className="flex items-center gap-2 text-[#64707b]">
                    <Clock3 className="h-4 w-4" aria-hidden="true" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1 font-bold text-[#007c85] transition-transform group-hover:translate-x-1">
                    Explore
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="bg-[#0b2d52] text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f4b942]">
              The Acadova difference
            </p>
            <h2 className="mt-4 max-w-md font-heading text-3xl font-bold leading-tight tracking-[-0.035em] sm:text-4xl">
              Learning should open doors.
            </h2>
            <p className="mt-5 max-w-md leading-7 text-white/70">
              We bring people and possibility together, with an education that feels personal,
              purposeful, and made for real life.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#f4b942] hover:text-white"
            >
              Our approach
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <article key={benefit.title} className="rounded-2xl border border-white/15 bg-white/[0.06] p-5">
                  <Icon className="h-6 w-6 text-[#f4b942]" aria-hidden="true" />
                  <h3 className="mt-6 font-heading text-base font-bold">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/65">{benefit.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#f4b942] px-7 py-12 sm:px-12 sm:py-14">
          <div className="absolute -right-20 -top-32 h-72 w-72 rounded-full border-[42px] border-[#0b2d52]/[0.06]" />
          <div className="relative flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#0b2d52]/70">
                A good place to begin
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-[-0.035em] text-[#0b2d52] sm:text-4xl">
                Your next chapter is yours to shape.
              </h2>
              <p className="mt-3 text-[#0b2d52]/75">
                Take a look around and find the course that feels like your next step.
              </p>
            </div>
            <Link
              href="/programs"
              className="inline-flex h-12 shrink-0 items-center justify-center gap-2 self-start rounded-full bg-[#0b2d52] px-6 text-sm font-bold text-white transition-colors hover:bg-[#174674] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:self-auto"
            >
              Find your course
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-8 sm:pb-24">
        <div className="flex flex-col gap-6 rounded-3xl border border-[#e5e3dc] bg-white p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9">
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#e6f0ed] text-[#007c85]">
              <GraduationCap className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#007c85]">
                Student management
              </p>
              <h2 className="mt-1 font-heading text-xl font-bold text-[#0b2d52] sm:text-2xl">
                Registration and course management, in one place.
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-[#64707b]">
                Our student portal brings course registration, learner enrollments, and staff
                catalog management together.
              </p>
            </div>
          </div>
          <Link
            href="/portal"
            className="inline-flex h-11 shrink-0 items-center justify-center gap-2 self-start rounded-full bg-[#007c85] px-5 text-sm font-bold text-white transition-colors hover:bg-[#00656c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b2d52] sm:self-auto"
          >
            Explore the portal
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}

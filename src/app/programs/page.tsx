import Link from 'next/link';
import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
  Clock3,
  Code2,
  HeartPulse,
  Lightbulb,
  Palette,
  Users,
} from 'lucide-react';

const programs = [
  {
    id: 'business-entrepreneurship',
    category: 'Business',
    title: 'Business & Entrepreneurship',
    description:
      'Build a strong foundation in business, explore new ideas, and learn how to bring them to life.',
    duration: '8 weeks',
    format: 'Online, instructor-led',
    icon: BriefcaseBusiness,
    tone: 'bg-[#e6f0ed] text-[#007c85]',
    skills: ['Business fundamentals', 'Customer discovery', 'Pitch with purpose'],
  },
  {
    id: 'data-science-ai',
    category: 'Technology',
    title: 'Data Science & AI',
    description:
      'Develop practical data skills and discover how responsible AI can help solve real problems.',
    duration: '12 weeks',
    format: 'Online, project-based',
    icon: Code2,
    tone: 'bg-[#e8edf4] text-[#0b2d52]',
    skills: ['Data storytelling', 'AI foundations', 'Applied projects'],
  },
  {
    id: 'design-creative-practice',
    category: 'Creative',
    title: 'Design & Creative Practice',
    description:
      'Explore the craft of design, from early concepts to thoughtful digital experiences.',
    duration: '10 weeks',
    format: 'Online, studio sessions',
    icon: Palette,
    tone: 'bg-[#fbf0d7] text-[#8a6010]',
    skills: ['Visual thinking', 'Design systems', 'Portfolio project'],
  },
  {
    id: 'wellbeing-psychology',
    category: 'Wellbeing',
    title: 'Wellbeing & Psychology',
    description:
      'Explore the science of wellbeing and develop everyday tools for a more balanced life.',
    duration: '6 weeks',
    format: 'Online, self-paced',
    icon: HeartPulse,
    tone: 'bg-[#f8e8e7] text-[#a14848]',
    skills: ['Psychology essentials', 'Everyday resilience', 'Reflective practice'],
  },
  {
    id: 'leadership-communication',
    category: 'Leadership',
    title: 'Leadership & Communication',
    description:
      'Grow your confidence as a leader and learn to bring people together around shared goals.',
    duration: '8 weeks',
    format: 'Online, instructor-led',
    icon: Users,
    tone: 'bg-[#eee8f5] text-[#694b87]',
    skills: ['Clear communication', 'Collaborative leadership', 'Giving feedback'],
  },
  {
    id: 'climate-sustainability',
    category: 'Society',
    title: 'Climate & Sustainability',
    description:
      'Understand the forces shaping our climate and find practical ways to contribute to change.',
    duration: '6 weeks',
    format: 'Online, self-paced',
    icon: Lightbulb,
    tone: 'bg-[#edf0de] text-[#617634]',
    skills: ['Climate literacy', 'Systems thinking', 'Solutions in action'],
  },
];

export default function ProgramsPage() {
  return (
    <div>
      <section className="bg-[#0b2d52] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f4b942]">
            Find your next step
          </p>
          <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <h1 className="max-w-2xl font-heading text-4xl font-bold leading-tight tracking-[-0.04em] sm:text-5xl">
              A course for every kind of curious.
            </h1>
            <p className="max-w-xl leading-7 text-white/70">
              Explore flexible, expert-led learning across business, technology, creativity, and
              more. Your next chapter can start right here.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-20">
        <div className="mb-9 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#007c85]">
              Explore Acadova
            </p>
            <h2 className="mt-2 font-heading text-2xl font-bold text-[#0b2d52] sm:text-3xl">
              Find a subject that sparks something.
            </h2>
          </div>
          <p className="text-sm text-[#64707b]">{programs.length} learning paths to explore</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => {
            const Icon = program.icon;

            return (
              <article
                key={program.id}
                id={program.id}
                className="flex scroll-mt-28 flex-col rounded-3xl border border-[#e5e3dc] bg-white p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="pt-2 text-xs font-bold uppercase tracking-[0.14em] text-[#64707b]">
                    {program.category}
                  </span>
                  <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${program.tone}`}>
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                </div>
                <h2 className="mt-6 font-heading text-xl font-bold text-[#0b2d52]">
                  {program.title}
                </h2>
                <p className="mt-3 min-h-[4.5rem] text-sm leading-6 text-[#64707b]">
                  {program.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-y border-[#eeece6] py-4 text-xs font-bold text-[#596574]">
                  <span className="flex items-center gap-1.5">
                    <Clock3 className="h-4 w-4 text-[#007c85]" aria-hidden="true" />
                    {program.duration}
                  </span>
                  <span>{program.format}</span>
                </div>
                <ul className="mt-5 space-y-2.5">
                  {program.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-sm text-[#596574]">
                      <Check className="h-4 w-4 shrink-0 text-[#007c85]" aria-hidden="true" />
                      {skill}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/apply"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#007c85] transition-colors hover:text-[#0b2d52]"
                >
                  Ask about this course
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 sm:px-8 sm:pb-20">
        <div className="flex flex-col gap-5 rounded-3xl bg-[#e6f0ed] p-7 sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div>
            <h2 className="font-heading text-2xl font-bold text-[#0b2d52]">
              Not sure where to start?
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-[#596574]">
              Tell us what you&apos;re curious about and we&apos;ll help you find a good fit.
            </p>
          </div>
          <Link
            href="/apply"
            className="inline-flex h-11 shrink-0 items-center justify-center gap-2 self-start rounded-full bg-[#007c85] px-5 text-sm font-bold text-white transition-colors hover:bg-[#00656c] sm:self-auto"
          >
            Talk to our team
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}

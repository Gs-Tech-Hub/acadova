import Link from 'next/link';
import { ArrowRight, BookOpen, Compass, Heart, Lightbulb } from 'lucide-react';

const values = [
  {
    icon: Compass,
    title: 'Curiosity comes first',
    description:
      'Good learning starts with good questions. We make space to explore, experiment, and find your own point of view.',
  },
  {
    icon: BookOpen,
    title: 'Learning for real life',
    description:
      'Ideas matter most when you can use them. Our courses connect thoughtful teaching with practical experience.',
  },
  {
    icon: Heart,
    title: 'People make the difference',
    description:
      'A welcoming community gives you room to grow, share perspectives, and find encouragement along the way.',
  },
  {
    icon: Lightbulb,
    title: 'Possibility is for everyone',
    description:
      'There is no single path to progress. We celebrate different starting points, ambitions, and ways of learning.',
  },
];

export default function AboutPage() {
  return (
    <div>
      <section className="bg-[#0b2d52] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f4b942]">
            About Acadova
          </p>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-bold leading-tight tracking-[-0.04em] sm:text-5xl">
            An open door to what you can become.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
            We believe education should meet you where you are—and help you imagine where you could
            go next.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#007c85]">
            Our purpose
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold leading-tight tracking-[-0.035em] text-[#0b2d52]">
            Learn with purpose. Grow with confidence.
          </h2>
        </div>
        <div className="space-y-5 text-base leading-7 text-[#596574]">
          <p>
            Acadova is a digital learning institution for people ready to explore new ideas and
            build practical skills. Our courses bring together expert guidance, active learning,
            and the flexibility to fit around real life.
          </p>
          <p>
            Wherever you&apos;re starting from, we want you to feel welcome here. Learn something
            new, find your community, and take your next step with confidence.
          </p>
          <p className="font-heading text-lg font-bold text-[#007c85]">Learn. Grow. Lead.</p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#007c85]">
              What guides us
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-[-0.035em] text-[#0b2d52]">
              A thoughtful way to learn.
            </h2>
          </div>
          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article key={value.title} className="rounded-3xl border border-[#e8e5dc] p-6 sm:p-7">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e6f0ed] text-[#007c85]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-bold text-[#0b2d52]">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#64707b]">{value.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20">
        <div className="flex flex-col gap-6 rounded-3xl bg-[#f4b942] p-7 sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div>
            <h2 className="font-heading text-2xl font-bold text-[#0b2d52]">
              Ready to explore?
            </h2>
            <p className="mt-2 text-sm text-[#0b2d52]/75">
              Find a course and make your next move.
            </p>
          </div>
          <Link
            href="/programs"
            className="inline-flex h-11 items-center justify-center gap-2 self-start rounded-full bg-[#0b2d52] px-5 text-sm font-bold text-white transition-colors hover:bg-[#174674] sm:self-auto"
          >
            Explore courses
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}

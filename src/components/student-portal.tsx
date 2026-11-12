'use client';

import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  Check,
  Clock3,
  Code2,
  GraduationCap,
  HeartPulse,
  LayoutDashboard,
  Lightbulb,
  Palette,
  Plus,
  ShieldCheck,
  Trash2,
  Users,
} from 'lucide-react';

type Course = {
  id: string;
  title: string;
  category: string;
  duration: string;
  description: string;
};

type Enrollment = {
  courseId: string;
  studentName: string;
};

const initialCourses: Course[] = [
  {
    id: 'business-entrepreneurship',
    title: 'Business & Entrepreneurship',
    category: 'Business',
    duration: '8 weeks',
    description: 'Turn bright ideas into thoughtful, sustainable ventures.',
  },
  {
    id: 'data-science-ai',
    title: 'Data Science & AI',
    category: 'Technology',
    duration: '12 weeks',
    description: 'Make sense of data and build what comes next.',
  },
  {
    id: 'design-creative-practice',
    title: 'Design & Creative Practice',
    category: 'Creative',
    duration: '10 weeks',
    description: 'Shape meaningful digital experiences with confidence.',
  },
  {
    id: 'wellbeing-psychology',
    title: 'Wellbeing & Psychology',
    category: 'Wellbeing',
    duration: '6 weeks',
    description: 'Explore the science of wellbeing and everyday resilience.',
  },
  {
    id: 'leadership-communication',
    title: 'Leadership & Communication',
    category: 'Leadership',
    duration: '8 weeks',
    description: 'Bring people together around shared goals.',
  },
  {
    id: 'climate-sustainability',
    title: 'Climate & Sustainability',
    category: 'Society',
    duration: '6 weeks',
    description: 'Find practical ways to contribute to a more sustainable future.',
  },
];

const categoryIcons: Record<string, typeof BookOpen> = {
  Business: BriefcaseBusiness,
  Technology: Code2,
  Creative: Palette,
  Wellbeing: HeartPulse,
  Leadership: Users,
  Society: Lightbulb,
};

const categoryStyles: Record<string, string> = {
  Business: 'bg-[#e6f0ed] text-[#007c85]',
  Technology: 'bg-[#e8edf4] text-[#0b2d52]',
  Creative: 'bg-[#fbf0d7] text-[#8a6010]',
  Wellbeing: 'bg-[#f8e8e7] text-[#a14848]',
  Leadership: 'bg-[#eee8f5] text-[#694b87]',
  Society: 'bg-[#edf0de] text-[#617634]',
};

type PortalMode = 'student' | 'staff';

export function StudentPortal() {
  const [mode, setMode] = useState<PortalMode>('student');
  const [studentName, setStudentName] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [courses, setCourses] = useState(initialCourses);
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [activeTab, setActiveTab] = useState<'overview' | 'my-courses' | 'catalog'>('overview');
  const [courseTitle, setCourseTitle] = useState('');
  const [courseCategory, setCourseCategory] = useState('Business');
  const [courseDuration, setCourseDuration] = useState('');
  const [notice, setNotice] = useState('');

  const enrolledCourseIds = new Set(
    enrollments
      .filter((enrollment) => enrollment.studentName === studentName)
      .map((enrollment) => enrollment.courseId),
  );
  const myCourses = courses.filter((course) => enrolledCourseIds.has(course.id));

  function registerStudent(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('studentName') ?? '').trim();

    if (!name) return;

    setStudentName(name);
    setIsRegistered(true);
    setNotice(`Welcome to Acadova, ${name}. Your demo profile is ready.`);
  }

  function enroll(course: Course) {
    if (enrolledCourseIds.has(course.id)) return;

    setEnrollments((current) => [...current, { courseId: course.id, studentName }]);
    setNotice(`You’re enrolled in ${course.title}.`);
  }

  function withdraw(course: Course) {
    setEnrollments((current) =>
      current.filter(
        (enrollment) =>
          enrollment.studentName !== studentName || enrollment.courseId !== course.id,
      ),
    );
    setNotice(`You’ve withdrawn from ${course.title}.`);
  }

  function addCourse(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const title = courseTitle.trim();
    const duration = courseDuration.trim();

    if (!title || !duration) return;

    const newCourse: Course = {
      id: `demo-course-${Date.now()}`,
      title,
      category: courseCategory,
      duration,
      description: 'A new course added in this temporary portal demo.',
    };

    setCourses((current) => [...current, newCourse]);
    setCourseTitle('');
    setCourseDuration('');
    setNotice(`${title} was added to the demo course catalog.`);
  }

  function removeCourse(course: Course) {
    setCourses((current) => current.filter((item) => item.id !== course.id));
    setEnrollments((current) => current.filter((item) => item.courseId !== course.id));
    setNotice(`${course.title} was removed from the demo course catalog.`);
  }

  function changeMode(nextMode: PortalMode) {
    setMode(nextMode);
    setNotice('');
  }

  return (
    <div className="min-h-[70vh] bg-[#f8f7f2]">
      <section className="bg-[#0b2d52] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-6 py-10 sm:px-8 sm:py-12 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-[#f4b942]">
              <GraduationCap className="h-4 w-4" aria-hidden="true" />
              Acadova learning space
            </p>
            <h1 className="mt-3 font-heading text-3xl font-bold tracking-[-0.035em] sm:text-4xl">
              Student portal
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70 sm:text-base">
              Register for courses, keep track of your learning, and explore what&apos;s next.
            </p>
          </div>
          <div className="flex w-fit rounded-full border border-white/20 bg-white/10 p-1" aria-label="Demo portal role">
            <button
              type="button"
              onClick={() => changeMode('student')}
              aria-pressed={mode === 'student'}
              className={`rounded-full px-4 py-2 text-sm font-bold transition-colors ${mode === 'student' ? 'bg-white text-[#0b2d52]' : 'text-white/75 hover:text-white'}`}
            >
              Student view
            </button>
            <button
              type="button"
              onClick={() => changeMode('staff')}
              aria-pressed={mode === 'staff'}
              className={`rounded-full px-4 py-2 text-sm font-bold transition-colors ${mode === 'staff' ? 'bg-white text-[#0b2d52]' : 'text-white/75 hover:text-white'}`}
            >
              Staff view
            </button>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-7 sm:px-8 sm:py-9">
        <div className="mb-7 flex items-start gap-3 rounded-2xl border border-[#f0d88e] bg-[#fff7df] p-4 text-sm leading-6 text-[#604b18]">
          <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#9b7412]" aria-hidden="true" />
          <p>
            <strong>Interactive demo only.</strong> Profiles, registrations, and course changes are
            temporary and reset when you leave or refresh this page. Don&apos;t enter real personal
            information.
          </p>
        </div>

        {notice && (
          <div
            role="status"
            className="mb-6 rounded-xl border border-[#bdd5ce] bg-[#e6f0ed] px-4 py-3 text-sm font-bold text-[#0b625f]"
          >
            {notice}
          </div>
        )}

        {mode === 'student' ? (
          !isRegistered ? (
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
              <div className="rounded-3xl bg-[#e6f0ed] p-7 sm:p-9">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#007c85]">
                  <BookOpen className="h-6 w-6" aria-hidden="true" />
                </span>
                <h2 className="mt-6 font-heading text-2xl font-bold text-[#0b2d52]">
                  Your learning, all in one place.
                </h2>
                <p className="mt-3 text-sm leading-6 text-[#596574]">
                  Create a temporary demo profile to try registering for courses and managing your
                  learning. This won&apos;t create an account or send your details anywhere.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-[#425162]">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[#007c85]" aria-hidden="true" />
                    Explore the Acadova course catalog
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[#007c85]" aria-hidden="true" />
                    Register for and withdraw from courses
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[#007c85]" aria-hidden="true" />
                    See your course list in one place
                  </li>
                </ul>
              </div>

              <form
                onSubmit={registerStudent}
                className="rounded-3xl border border-[#e5e3dc] bg-white p-7 sm:p-9"
              >
                <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#007c85]">
                  Student registration
                </p>
                <h2 className="mt-2 font-heading text-2xl font-bold text-[#0b2d52]">
                  Try the student experience
                </h2>
                <label htmlFor="studentName" className="mt-7 block text-sm font-bold text-[#2d3748]">
                  Name for this demo
                </label>
                <input
                  id="studentName"
                  name="studentName"
                  autoComplete="off"
                  maxLength={60}
                  required
                  placeholder="For example, Alex Morgan"
                  className="mt-2 w-full rounded-xl border border-[#dcded9] bg-white px-4 py-3 text-sm text-[#2d3748] placeholder:text-[#89939c] focus:border-[#007c85] focus:outline-none focus:ring-2 focus:ring-[#007c85]/15"
                />
                <button
                  type="submit"
                  className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#0b2d52] px-6 text-sm font-bold text-white transition-colors hover:bg-[#174674] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#007c85]"
                >
                  Continue to student portal
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
                <p className="mt-4 text-xs leading-5 text-[#78838c]">
                  No password or email required. Your demo profile exists only in this page
                  session.
                </p>
              </form>
            </div>
          ) : (
            <StudentDashboard
              studentName={studentName}
              courses={courses}
              myCourses={myCourses}
              enrolledCourseIds={enrolledCourseIds}
              activeTab={activeTab}
              onTabChange={setActiveTab}
              onEnroll={enroll}
              onWithdraw={withdraw}
              onReset={() => {
                setIsRegistered(false);
                setStudentName('');
                setEnrollments([]);
                setActiveTab('overview');
                setNotice('');
              }}
            />
          )
        ) : (
          <StaffDashboard
            courses={courses}
            enrollments={enrollments}
            courseTitle={courseTitle}
            courseCategory={courseCategory}
            courseDuration={courseDuration}
            onCourseTitleChange={setCourseTitle}
            onCourseCategoryChange={setCourseCategory}
            onCourseDurationChange={setCourseDuration}
            onAddCourse={addCourse}
            onRemoveCourse={removeCourse}
          />
        )}
      </div>
    </div>
  );
}

type StudentDashboardProps = {
  studentName: string;
  courses: Course[];
  myCourses: Course[];
  enrolledCourseIds: Set<string>;
  activeTab: 'overview' | 'my-courses' | 'catalog';
  onTabChange: (tab: 'overview' | 'my-courses' | 'catalog') => void;
  onEnroll: (course: Course) => void;
  onWithdraw: (course: Course) => void;
  onReset: () => void;
};

function StudentDashboard({
  studentName,
  courses,
  myCourses,
  enrolledCourseIds,
  activeTab,
  onTabChange,
  onEnroll,
  onWithdraw,
  onReset,
}: StudentDashboardProps) {
  const tabs = [
    { id: 'overview' as const, label: 'Overview', icon: LayoutDashboard },
    { id: 'my-courses' as const, label: 'My courses', icon: GraduationCap },
    { id: 'catalog' as const, label: 'Browse courses', icon: BookOpen },
  ];
  const displayedCourses =
    activeTab === 'my-courses' ? myCourses : courses.filter((course) => !enrolledCourseIds.has(course.id));

  return (
    <div>
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#007c85]">
            Student dashboard
          </p>
          <h2 className="mt-2 font-heading text-2xl font-bold text-[#0b2d52] sm:text-3xl">
            Welcome, {studentName}
          </h2>
        </div>
        <button
          type="button"
          onClick={onReset}
          className="self-start rounded-full border border-[#dcded9] px-4 py-2 text-sm font-bold text-[#596574] hover:bg-white"
        >
          End demo session
        </button>
      </div>

      <div className="mt-7 flex gap-2 overflow-x-auto border-b border-[#e5e3dc]">
        {tabs.map((tab) => {
          const Icon = tab.icon;

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onTabChange(tab.id)}
              aria-current={activeTab === tab.id ? 'page' : undefined}
              className={`inline-flex shrink-0 items-center gap-2 border-b-2 px-4 py-3 text-sm font-bold transition-colors ${activeTab === tab.id ? 'border-[#007c85] text-[#007c85]' : 'border-transparent text-[#64707b] hover:text-[#0b2d52]'}`}
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
              {tab.label}
              {tab.id === 'my-courses' && (
                <span className="rounded-full bg-[#e6f0ed] px-2 py-0.5 text-xs text-[#007c85]">
                  {myCourses.length}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {activeTab === 'overview' && (
        <div className="mt-7 grid gap-5 sm:grid-cols-3">
          <SummaryCard label="My courses" value={String(myCourses.length)} icon={BookOpen} />
          <SummaryCard label="Available courses" value={String(courses.length - myCourses.length)} icon={GraduationCap} />
          <SummaryCard label="Learning status" value="Getting started" icon={Check} />
        </div>
      )}

      <div className="mt-8">
        <div className="mb-5">
          <h3 className="font-heading text-xl font-bold text-[#0b2d52]">
            {activeTab === 'my-courses'
              ? 'Your courses'
              : activeTab === 'catalog'
                ? 'Explore available courses'
                : myCourses.length
                  ? 'Explore another course'
                  : 'Find your first course'}
          </h3>
          {activeTab === 'my-courses' && (
            <p className="mt-1 text-sm text-[#64707b]">Your current Acadova enrollments.</p>
          )}
        </div>
        {displayedCourses.length ? (
          <CourseGrid
            courses={displayedCourses}
            enrolledCourseIds={enrolledCourseIds}
            mode="student"
            onEnroll={onEnroll}
            onWithdraw={onWithdraw}
          />
        ) : (
          <div className="rounded-2xl border border-dashed border-[#dcded9] bg-white p-8 text-center">
            <p className="font-heading font-bold text-[#0b2d52]">No courses here just yet.</p>
            <button
              type="button"
              onClick={() => onTabChange('catalog')}
              className="mt-3 text-sm font-bold text-[#007c85] hover:underline"
            >
              Browse the course catalog
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

type SummaryCardProps = {
  label: string;
  value: string;
  icon: typeof BookOpen;
};

function SummaryCard({ label, value, icon: Icon }: SummaryCardProps) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-[#e5e3dc] bg-white p-5">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e6f0ed] text-[#007c85]">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#64707b]">{label}</p>
        <p className="mt-1 font-heading text-lg font-bold text-[#0b2d52]">{value}</p>
      </div>
    </div>
  );
}

type CourseGridProps = {
  courses: Course[];
  enrolledCourseIds: Set<string>;
  mode: 'student' | 'staff';
  onEnroll?: (course: Course) => void;
  onWithdraw?: (course: Course) => void;
  onRemove?: (course: Course) => void;
};

function CourseGrid({
  courses,
  enrolledCourseIds,
  mode,
  onEnroll,
  onWithdraw,
  onRemove,
}: CourseGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {courses.map((course) => {
        const Icon = categoryIcons[course.category] ?? BookOpen;
        const enrolled = enrolledCourseIds.has(course.id);

        return (
          <article key={course.id} className="flex flex-col rounded-2xl border border-[#e5e3dc] bg-white p-5">
            <div className="flex items-center justify-between gap-3">
              <span className="text-xs font-bold uppercase tracking-[0.13em] text-[#64707b]">
                {course.category}
              </span>
              <span
                className={`flex h-10 w-10 items-center justify-center rounded-xl ${categoryStyles[course.category] ?? 'bg-[#e6f0ed] text-[#007c85]'}`}
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
            </div>
            <h4 className="mt-5 font-heading text-lg font-bold text-[#0b2d52]">{course.title}</h4>
            <p className="mt-2 min-h-12 text-sm leading-6 text-[#64707b]">{course.description}</p>
            <p className="mt-4 flex items-center gap-2 text-xs font-bold text-[#596574]">
              <Clock3 className="h-4 w-4 text-[#007c85]" aria-hidden="true" />
              {course.duration}
            </p>
            {mode === 'student' ? (
              enrolled ? (
                <button
                  type="button"
                  onClick={() => onWithdraw?.(course)}
                  className="mt-5 inline-flex h-10 items-center justify-center rounded-full border border-[#dcded9] px-4 text-sm font-bold text-[#596574] hover:bg-[#f8f7f2]"
                >
                  Withdraw
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => onEnroll?.(course)}
                  className="mt-5 inline-flex h-10 items-center justify-center gap-2 rounded-full bg-[#0b2d52] px-4 text-sm font-bold text-white hover:bg-[#174674]"
                >
                  Register for course
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              )
            ) : (
              <button
                type="button"
                onClick={() => onRemove?.(course)}
                className="mt-5 inline-flex h-10 items-center justify-center gap-2 rounded-full border border-[#eed1d1] px-4 text-sm font-bold text-[#a14848] hover:bg-[#fdf3f3]"
              >
                <Trash2 className="h-4 w-4" aria-hidden="true" />
                Remove course
              </button>
            )}
          </article>
        );
      })}
    </div>
  );
}

type StaffDashboardProps = {
  courses: Course[];
  enrollments: Enrollment[];
  courseTitle: string;
  courseCategory: string;
  courseDuration: string;
  onCourseTitleChange: (value: string) => void;
  onCourseCategoryChange: (value: string) => void;
  onCourseDurationChange: (value: string) => void;
  onAddCourse: (event: FormEvent<HTMLFormElement>) => void;
  onRemoveCourse: (course: Course) => void;
};

function StaffDashboard({
  courses,
  enrollments,
  courseTitle,
  courseCategory,
  courseDuration,
  onCourseTitleChange,
  onCourseCategoryChange,
  onCourseDurationChange,
  onAddCourse,
  onRemoveCourse,
}: StaffDashboardProps) {
  const categories = ['Business', 'Technology', 'Creative', 'Wellbeing', 'Leadership', 'Society'];

  return (
    <div>
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#007c85]">Staff dashboard</p>
        <h2 className="mt-2 font-heading text-2xl font-bold text-[#0b2d52] sm:text-3xl">
          Course management
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-[#64707b]">
          Add courses to the catalog, review demo enrollments, or remove courses. Changes are only
          kept in this page session.
        </p>
      </div>

      <div className="mt-7 grid gap-4 sm:grid-cols-3">
        <SummaryCard label="Course catalog" value={String(courses.length)} icon={BookOpen} />
        <SummaryCard label="Demo registrations" value={String(enrollments.length)} icon={Users} />
        <SummaryCard
          label="Learners enrolled"
          value={String(new Set(enrollments.map((enrollment) => enrollment.studentName)).size)}
          icon={GraduationCap}
        />
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <form onSubmit={onAddCourse} className="h-fit rounded-2xl border border-[#e5e3dc] bg-white p-6">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e6f0ed] text-[#007c85]">
            <Plus className="h-5 w-5" aria-hidden="true" />
          </span>
          <h3 className="mt-4 font-heading text-lg font-bold text-[#0b2d52]">Add a course</h3>
          <label htmlFor="courseTitle" className="mt-5 block text-sm font-bold text-[#2d3748]">
            Course title
          </label>
          <input
            id="courseTitle"
            value={courseTitle}
            onChange={(event) => onCourseTitleChange(event.target.value)}
            required
            maxLength={80}
            placeholder="e.g. Creative Writing"
            className="mt-2 w-full rounded-xl border border-[#dcded9] px-4 py-3 text-sm focus:border-[#007c85] focus:outline-none focus:ring-2 focus:ring-[#007c85]/15"
          />
          <label htmlFor="courseCategory" className="mt-4 block text-sm font-bold text-[#2d3748]">
            Category
          </label>
          <select
            id="courseCategory"
            value={courseCategory}
            onChange={(event) => onCourseCategoryChange(event.target.value)}
            className="mt-2 w-full rounded-xl border border-[#dcded9] bg-white px-4 py-3 text-sm focus:border-[#007c85] focus:outline-none focus:ring-2 focus:ring-[#007c85]/15"
          >
            {categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>
          <label htmlFor="courseDuration" className="mt-4 block text-sm font-bold text-[#2d3748]">
            Duration
          </label>
          <input
            id="courseDuration"
            value={courseDuration}
            onChange={(event) => onCourseDurationChange(event.target.value)}
            required
            maxLength={30}
            placeholder="e.g. 6 weeks"
            className="mt-2 w-full rounded-xl border border-[#dcded9] px-4 py-3 text-sm focus:border-[#007c85] focus:outline-none focus:ring-2 focus:ring-[#007c85]/15"
          />
          <button
            type="submit"
            className="mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[#007c85] px-4 text-sm font-bold text-white hover:bg-[#00656c]"
          >
            <Plus className="h-4 w-4" aria-hidden="true" />
            Add to catalog
          </button>
        </form>

        <div>
          <div className="mb-4 flex items-center gap-2">
            <LayoutDashboard className="h-5 w-5 text-[#007c85]" aria-hidden="true" />
            <h3 className="font-heading text-lg font-bold text-[#0b2d52]">
              Manage courses ({courses.length})
            </h3>
          </div>
          <CourseGrid
            courses={courses}
            enrolledCourseIds={new Set()}
            mode="staff"
            onRemove={onRemoveCourse}
          />
        </div>
      </div>

      <section className="mt-10 rounded-2xl border border-[#e5e3dc] bg-white p-6">
        <h3 className="font-heading text-lg font-bold text-[#0b2d52]">Recent demo registrations</h3>
        {enrollments.length ? (
          <ul className="mt-4 divide-y divide-[#eeece6]">
            {enrollments.map((enrollment, index) => {
              const course = courses.find((item) => item.id === enrollment.courseId);

              return (
                <li key={`${enrollment.studentName}-${enrollment.courseId}-${index}`} className="flex flex-wrap justify-between gap-2 py-3 text-sm">
                  <span className="font-bold text-[#2d3748]">{enrollment.studentName}</span>
                  <span className="text-[#64707b]">{course?.title ?? 'Course removed'}</span>
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="mt-2 text-sm text-[#64707b]">
            No demo registrations yet. Enroll a student from the student view to see registrations
            here.
          </p>
        )}
      </section>

      <Link
        href="/programs"
        className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#007c85] hover:text-[#0b2d52]"
      >
        View public course catalog
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </div>
  );
}

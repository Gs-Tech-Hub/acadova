import type { Metadata } from 'next';
import { StudentPortal } from '@/components/student-portal';

export const metadata: Metadata = {
  title: 'Student Portal | Acadova',
  description: 'Register for courses and manage your learning in the Acadova student portal demo.',
};

export default function PortalPage() {
  return <StudentPortal />;
}

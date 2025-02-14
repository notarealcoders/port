import { projects } from '@/lib/projects';
import { ProjectDetails } from './project-details';

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug,
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug as keyof typeof projects];

  if (!project) {
    return <div>Project not found</div>;
  }

  return <ProjectDetails project={project} />;
}
import './styles.scss';
import { ProjectCard } from '../ProjectCard';
import { useProjects } from '../../../../context/ProjectsContext';

export function ProjectsList() {
  const { projects } = useProjects();

  return (
    <ul className="ProjectList">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </ul>
  );
}

import { useState } from 'react';

interface Project {
  id: string;
  data: {
    title: string;
    status: string;
    tags: string[];
    description: string;
    link?: string;
    category: string;
  };
}

export default function ProjectFilter({ projects }: { projects: Project[] }) {
  projects = projects.filter(p => p.data.status !== 'planned' && p.data.status !== 'shelved');
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.data.category === activeFilter);

  const uniqueFilters = ['all', ...new Set(projects.map(p => p.data.category))];

  return (
    <div>
      <div className="flex gap-2 mb-6 flex-wrap">
        {uniqueFilters.map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-3 py-1 text-xs border transition-colors ${
              activeFilter === filter
                ? 'border-zinc-500 text-zinc-900'
                : 'border-zinc-200 text-zinc-400 hover:border-zinc-400 hover:text-zinc-600'
            }`}
          >
            {filter.replaceAll('-', ' ')}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {filteredProjects.map((project) => {
          const Card = project.data.link ? 'a' : 'div';
          const cardProps = project.data.link
            ? { href: project.data.link, target: '_blank', rel: 'noopener noreferrer' }
            : {};
          return (
            <Card key={project.id} {...cardProps} className={`block border border-zinc-200 p-4 ${project.data.link ? 'hover:border-zinc-400 transition-colors' : ''}`}>
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-sm text-zinc-900">{project.data.title}</p>
                  <span className={`inline-block mt-1 text-xs border px-1.5 py-0.5 ${
                    project.data.status === 'production'
                      ? 'border-green-300 text-green-600'
                      : project.data.status === 'in-progress'
                      ? 'border-amber-300 text-amber-600'
                      : 'border-zinc-200 text-zinc-400'
                  }`}>
                    {project.data.status}
                  </span>
                </div>
                {project.data.link && (
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-zinc-300 mt-0.5 shrink-0">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                )}
              </div>
              <p className="text-xs text-zinc-500 leading-relaxed mb-3">{project.data.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.data.tags.map((tag: string) => (
                  <span key={tag} className="text-xs text-zinc-400 border border-zinc-200 px-1.5 py-0.5">{tag}</span>
                ))}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

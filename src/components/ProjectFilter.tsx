import { useState } from 'react';

interface Project {
  slug: string;
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

  projects = projects.filter(p => p.data.status != 'planned' && p.data.status != 'shelved');
  const [activeFilter, setActiveFilter] = useState('all');

  let filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.data.category === activeFilter);
  
 
  const filters = projects.flatMap(x => x.data.category || []);
  let uniquefilters = [...new Set(filters)];
  uniquefilters.unshift('all');

 
  return (
    <div>
      <div className="flex gap-4 mb-8 flex-wrap">
        {uniquefilters.map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 text-sm font-mono border-2 transition-colors ${
              activeFilter === filter
                ? 'bg-stone-900 text-amber-50 border-stone-900'
                : 'bg-transparent text-stone-700 border-stone-300 hover:border-stone-900'
            }`}
          >
            {filter.replace('-', ' ')}
          </button>
        ))}
      </div>

      <div className="grid gap-6">
        {filteredProjects.map((project) => (
          <div key={project.slug} className="border-2 border-stone-900 bg-white p-6">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-xl font-bold">{project.data.title}</h3>
                <span className={`inline-block mt-2 px-3 py-1 text-xs font-mono border ${
                  project.data.status === 'production' 
                    ? 'border-green-700 text-green-700 bg-green-50'
                    : project.data.status === 'in-progress'
                    ? 'border-amber-700 text-amber-700 bg-amber-50'
                    : 'border-stone-400 text-stone-600 bg-stone-50'
                }`}>
                  {project.data.status}
                </span>
              </div>
              {project.data.link && (
                <a href={project.data.link} target="_blank" rel="noopener noreferrer" className="text-stone-700 hover:text-stone-900 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              )}
            </div>
            <p className="text-stone-700 mb-4">{project.data.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.data.tags.map((tag: string) => (
                <span key={tag} className="px-3 py-1 text-xs font-mono bg-stone-100 text-stone-700 border border-stone-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
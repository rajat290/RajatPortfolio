import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform For Nursery',
    description: 'A full-stack e-commerce solution For a NGO called MANAVTA NURSERY with React, Node.js, Express.js and MongoDB',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c',
    technologies: ['React', 'Node.js', 'MongoDB', 'Redux'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://manavtanursery.org',
  },
  {
    title: 'School OR College Management System',
    description: 'A collaborative task management tool with real-time updates',
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Socket.io'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    title: 'Portfolio Generator',
    description: 'An automated portfolio website generator for developers',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    technologies: ['React', 'GraphQL', 'Node.js', 'AWS'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    learnMore : '',
  },
];

export const Projects = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900" id="projects">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-shadow duration-300 transform hover:shadow-xl hover:shadow-blue-500/50 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm transition-colors duration-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <Github className="w-5 h-5" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Learn More about Project</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
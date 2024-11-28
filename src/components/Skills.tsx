import React from 'react';
import { Code2, Database, Globe, Layout, Server, Smartphone } from 'lucide-react';

const skills = [
  {
    category: 'Frontend',
    icon: <Layout className="w-6 h-6" />,
    items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
  },
  {
    category: 'Backend',
    icon: <Server className="w-6 h-6" />,
    items: ['Node.js', 'Python', 'PHP', 'Express'],
  },
  {
    category: 'Database',
    icon: <Database className="w-6 h-6" />,
    items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis'],
  },
  {
    category: 'Mobile',
    icon: <Smartphone className="w-6 h-6" />,
    items: ['React Native', 'Android', 'iOS', 'Flutter'],
  },
  {
    category: 'DevOps',
    icon: <Globe className="w-6 h-6" />,
    items: ['AWS', 'Docker', 'CI/CD', 'Kubernetes'],
  },
  {
    category: 'Languages',
    icon: <Code2 className="w-6 h-6" />,
    items: ['JavaScript', 'Python', 'Java', 'PHP'],
  },
];

export const Skills = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800" id="skills">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg transition-shadow duration-300 transform hover:shadow-xl hover:shadow-blue-500/50 hover:scale-105"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-blue-600 dark:text-blue-400">{skill.icon}</span>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400">
                  {skill.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm transition-colors duration-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
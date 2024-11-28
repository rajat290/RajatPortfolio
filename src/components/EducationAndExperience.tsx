import React from 'react';

const educationHistory = [
  {
    degree: 'Master of Computer Application',
    institution: 'Galgotias University',
    location: 'Greater Noida, Delhi NCR',
    year: '2022 - 2024',
    logo: 'galgotiasuniversity_logo.jpg',
    items: ['React', 'Data Structure', 'Computer Networks', 'Machine Learning', 'Data Analysis', 'Python With Django', 'Next.js'], // Skills learned
  },
  {
    degree: 'Bachelor of Computer Application',
    institution: 'BBD University',
    year: '2019-2022',
    location: 'Lucknow, Uttar Pradesh',
    logo: 'bbduniversityofficial_logo.jpg',
    items: ['Java', 'C++', 'Database Management', 'Web Development', 'Android development', 'Object-Oriented Programming'],
  },
];

const workHistory = [
  {
    title: 'Software Developer Intern',
    company: 'Empower IAS',
    year: 'June 2024 - Aug. 2024',
    description: 'Developing user-friendly web applications using React and TypeScript.',
  },
  {
    title: 'Freelance Website Developer',
    company: 'Regular Technologies',
    year: 'June 2022 - June 2024',
    description: 'Assisted in developing and maintaining web applications.',
  },
  {
    title: 'Android Developer Intern',
    company: 'Digipodium',
    year: 'Jan 2022 - May 2022',
    description: 'Developed and maintained scalable Android applications using Kotlin and Android Studio. Also gained experience in using RESTful APIs, Firebase, and version control with Git. Contributed to the development of UPHAAR (charity app) using Kotlin in Android Studio.',
  },
];

export const EducationAndExperience = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800" id="education-experience">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Education & Work History
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education Box */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg transition-shadow duration-300 transform hover:shadow-xl hover:shadow-blue-500/50 hover:scale-105">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
              Education
            </h3>
            {educationHistory.map((edu, index) => (
              <div key={edu.degree} className="mb-4 flex flex-col">
                <div className="flex items-center">
                  <img src={edu.logo} alt={`${edu.institution} logo`} className="w-10 h-10 rounded-full mr-4" />
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                      {edu.degree}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">{edu.institution}</p>
                    <p className="text-gray-500 dark:text-gray-400">{edu.year}</p>
                    <p className="text-gray-500 dark:text-gray-400">{edu.location}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {edu.items && edu.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm transition-colors duration-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                {index < educationHistory.length - 1 && (
                  <div className="border-b border-gray-300 dark:border-gray-600 my-4" />
                )}
              
            
              </div>
            ))}
          </div>

          {/* Work Experience Box */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg transition-shadow duration-300 transform hover:shadow-xl hover:shadow-blue-500/50 hover:scale-105">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
              Work Experience
            </h3>
            {workHistory.map((work) => (
              <div key={work.title} className="mb-4">
                <h4 className="text-xl font-bold text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                  {work.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">{work.company}</p>
                <p className="text-gray-500 dark:text-gray-400">{work.year}</p>
                <p className="text-gray-500 dark:text-gray-400">{work.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
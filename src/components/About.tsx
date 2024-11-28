import React from 'react';
import './About.css'; // Make sure to import the CSS file

export const About = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900" id="about">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <img
              src="mine.jpg"
              alt="Profile"
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto image-effect"
            />
          </div>
          <div className="w-full md:w-1/2">
            <div className="about-box p-6">
              <h2 className="text-3xl font-bold mb-6 text-white">About Me</h2>
              <p className="text-gray-200 mb-6 font-bold">
                Results-driven Software Engineer with hands-on experience in designing and developing full-stack
                and scalable applications. Proficient in React.js, Node.js, and AWS, with a strong foundation in backend systems, database
                management, and DevOps practices. Adept at solving complex challenges in fast-paced, agile environments while ensuring the delivery of
                high-quality software solutions.
              </p>
              <p className="text-gray-200 mb-6 font-bold">
                I specialize in front-end development using React and TypeScript, with a strong foundation
                in UI/UX design principles. I'm always excited to learn new technologies and tackle challenging projects.
              </p>
              <a
                href="/assets/resume.pdf" // Update this path to where your resume file is located
                download
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-300 inline-block"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
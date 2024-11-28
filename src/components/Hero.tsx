import React from 'react';
import { Github, Linkedin, Mail, Instagram, } from 'lucide-react'; // Import the new icons

import './Hero.css'; // Make sure to import the CSS file

export const Hero = () => {
  return (
    <section className="hero-section min-h-screen flex items-center justify-center relative overflow-hidden">
     
      <div className="container px-4 mx-auto text-center relative z-10">
        <div className="hero-box bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg transition-transform duration-300">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 glowing-text">
            RAJAT SINGH TOMAR
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8">
            Freelance Website Developer
          <br />  MERN Stack Developer
          <br /> Full Stack Developer 
          <br /> Software Engineer 

          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
            Crafting beautiful, responsive websites with modern technologies and best practices.
          </p>
          <div className="flex justify-center gap-6">
            <SocialLink href="https://github.com/rajat/290" icon={<Github />} label="GitHub" />
            <SocialLink href="https://linkedin.com" icon={<Linkedin />} label="LinkedIn" />
            <SocialLink href="mailto:rajatsinghtomarofficial@gmail.com" icon={<Mail />} label="Email" />
            <SocialLink href="https://instagram.com" icon={<Instagram />} label="Instagram" />
            
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-full bg-white dark:bg-red-800 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl icon-effect"
    aria-label={label}
  >
    <span className="text-gray-700 dark:text-gray-300">{icon}</span>
  </a>
);